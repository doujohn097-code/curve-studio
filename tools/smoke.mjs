// tools/smoke.mjs — اختبار آلي شامل + لقطات شاشة
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';

const ROOT = new URL('..', import.meta.url).pathname;
const shots = ROOT + 'docs/';
fs.mkdirSync(shots, { recursive: true });

const server = spawn('python3', ['-m', 'http.server', '8123', '-d', ROOT], { stdio: 'ignore' });
await new Promise(r => setTimeout(r, 900));

const errors = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', m => { if (m.type() === 'error') errors.push('[console] ' + m.text()); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));

try {
  await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'networkidle', timeout: 45000 });
} catch (e) { errors.push('[goto] ' + e.message); }
await page.waitForTimeout(2500);

const step = async (name, fn) => {
  try { await fn(); console.log('✔', name); }
  catch (e) { console.log('✘', name, '→', e.message.split('\n')[0]); errors.push('[' + name + '] ' + e.message); }
};

// صورة اختبار
await step('توليد صورة اختبار', async () => {
  const dataUrl = await page.evaluate(() => {
    const c = document.createElement('canvas'); c.width = 900; c.height = 1200;
    const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 900, 1200);
    g.addColorStop(0, '#0b0b0c'); g.addColorStop(.5, '#4a4a55'); g.addColorStop(1, '#e0e0e6');
    x.fillStyle = g; x.fillRect(0, 0, 900, 1200);
    x.fillStyle = '#fff'; x.font = '900 130px Cairo, sans-serif'; x.textAlign = 'center';
    x.fillText('صورتك', 450, 640);
    x.strokeStyle = '#fff'; x.lineWidth = 14; x.strokeRect(70, 70, 760, 1060);
    return c.toDataURL('image/png');
  });
  fs.writeFileSync('/tmp/test-img.png', Buffer.from(dataUrl.split(',')[1], 'base64'));
});

await step('الحالة الفارغة ظاهرة', async () => {
  await page.waitForSelector('#empty:not(.hidden)', { timeout: 5000 });
  await page.screenshot({ path: shots + 'shot-1-empty.png' });
});

await step('إضافة نص', async () => {
  await page.click('#eTxt');
  await page.waitForSelector('.chip', { timeout: 5000 });
});

await step('كتابة نص عربي وتغيير الخط', async () => {
  await page.fill('#panel textarea', 'مرحبا بالعالم\nHello 3D');
  const select = await page.$('#pcFont');
  await select.selectOption('Amiri');
  await page.waitForTimeout(600);
});

await step('إضافة صورة عبر حقل الملف', async () => {
  await page.setInputFiles('#fileInput', '/tmp/test-img.png');
  await page.waitForTimeout(1200);
  const chips = await page.$$eval('.chip', els => els.length);
  if (chips !== 2) throw new Error('عدد الشرائح ' + chips + ' متوقع 2');
});

await step('تحديد الصورة بالنقر على شريطها', async () => {
  await page.click('.chip[data-i="0"]');
  await page.waitForTimeout(400);
});

await step('تطبيق انحناء قوي + إطار مستدير', async () => {
  await page.click('#pcBendPre button:nth-child(4)'); // نصف لفة
  await page.waitForTimeout(300);
  await page.screenshot({ path: shots + 'shot-2-roll.png' });
});

await step('دوران 360 بالسحب على الخلفية', async () => {
  await page.mouse.move(200, 450);
  await page.mouse.down();
  await page.mouse.move(1100, 300, { steps: 25 });
  await page.mouse.up();
  await page.waitForTimeout(600);
  await page.screenshot({ path: shots + 'shot-3-rotated.png' });
});

await step('تصدير PNG', async () => {
  await page.click('#exportBtn');
  await page.waitForSelector('#modals.show img', { timeout: 8000 });
  await page.screenshot({ path: shots + 'shot-4-export.png' });
  await page.click('#mClose');
});

await step('إنشاء بيئة عمل جديدة والتبديل', async () => {
  await page.click('#wsNew');
  await page.waitForTimeout(400);
  await page.click('#eTxt');
  await page.waitForTimeout(400);
});

await step('الوضع الليلي', async () => {
  await page.click('#themeBtn');
  await page.waitForTimeout(400);
  await page.screenshot({ path: shots + 'shot-5-dark.png' });
  await page.click('#themeBtn');
});

await step('شاشة هاتف (موبايل)', async () => {
  await page.setViewportSize({ width: 420, height: 860 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: shots + 'shot-6-mobile.png' });
});

console.log('\n--- أخطاء وحدة التحكم (' + errors.length + ') ---');
errors.slice(0, 20).forEach(e => console.log(e));

await browser.close();
server.kill();
process.exit(errors.length ? 1 : 0);
