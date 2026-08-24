// tools/smoke.mjs — اختبار آلي شامل + لقطات شاشة (نسخة المخطط الزمني)
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

await step('الحالة الفارغة', async () => {
  await page.waitForSelector('#empty:not(.hidden)', { timeout: 5000 });
  await page.screenshot({ path: shots + 'shot-1-empty.png' });
});

await step('إضافة نص', async () => {
  await page.click('#eTxt');
  await page.waitForSelector('.trow.layer[data-id]', { timeout: 5000 });
});

await step('كتابة نص وتغيير الخط', async () => {
  await page.fill('#panel textarea', 'مرحبا بالعالم\nHello 3D');
  await page.selectOption('#pcFont', 'Amiri');
  await page.waitForTimeout(600);
});

await step('إضافة صورة', async () => {
  await page.setInputFiles('#fileInput', '/tmp/test-img.png');
  await page.waitForTimeout(1200);
  const rows = await page.$$eval('.trow.layer[data-id]', els => els.length);
  if (rows !== 2) throw new Error('عدد الصفوف ' + rows + ' متوقع 2');
});

await step('تحديد الصورة من المخطط الزمني', async () => {
  await page.click('.trow.layer[data-id] >> nth=0');
  await page.waitForTimeout(400);
});

await step('انحناء نصف لفة', async () => {
  await page.click('#pcBendPre button:nth-child(4)');
  await page.waitForTimeout(300);
  await page.screenshot({ path: shots + 'shot-2-roll.png' });
});

await step('مقابض Gizmo ظاهرة (9 مقابض)', async () => {
  await page.waitForTimeout(300);
  const n = await page.$$eval('#gizmo .gzh', els => els.length);
  if (n !== 9) throw new Error('المقابض ' + n);
});

await step('تكبير بمقبض الزاوية من الواجهة', async () => {
  // حدد عنصر النص (غير ملتف) واسحب المقبض شعاعياً بعيداً عن المركز
  await page.click('.trow.layer[data-id] >> nth=1');
  await page.waitForTimeout(400);
  const before = await page.evaluate(() => window.__ctx.curVal(window.__ctx.ws().elements[1], 'scale'));
  const info = await page.evaluate(() => {
    const hs = [...document.querySelectorAll('#gizmo .gzh.c')].map(h => { const r = h.getBoundingClientRect(); return [r.x + 6, r.y + 6]; });
    const cx = (Math.min(...hs.map(p => p[0])) + Math.max(...hs.map(p => p[0]))) / 2;
    const cy = (Math.min(...hs.map(p => p[1])) + Math.max(...hs.map(p => p[1]))) / 2;
    return { nw: hs[0], cx, cy };
  });
  const [hx, hy] = info.nw;
  const dx = hx - info.cx, dy = hy - info.cy;
  await page.mouse.move(hx, hy);
  await page.mouse.down();
  const tx = hx + dx * 0.45, ty = Math.max(14, hy + dy * 0.45);
  await page.mouse.move(tx, ty, { steps: 12 });
  await page.mouse.up();
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => window.__ctx.curVal(window.__ctx.ws().elements[1], 'scale'));
  if (!(after > before + 0.08)) throw new Error('التكبير لم يعمل: ' + before + '→' + after);
  // عد إلى تحديد الصورة
  await page.click('.trow.layer[data-id] >> nth=0');
  await page.waitForTimeout(300);
});

await step('تشغيل المفاتيح التلقائية وإنشاء مفتاح بالسحب', async () => {
  await page.click('#tlAutoK');
  const info = await page.evaluate(() => {
    const hs = [...document.querySelectorAll('#gizmo .gzh.c')].map(h => { const r = h.getBoundingClientRect(); return [r.x + 6, r.y + 6]; });
    const cx = (Math.min(...hs.map(p => p[0])) + Math.max(...hs.map(p => p[0]))) / 2;
    const cy = (Math.min(...hs.map(p => p[1])) + Math.max(...hs.map(p => p[1]))) / 2;
    return { nw: hs[0], cx, cy };
  });
  const [hx, hy] = info.nw;
  const dx = hx - info.cx, dy = hy - info.cy;
  await page.mouse.move(hx, hy);
  await page.mouse.down();
  await page.mouse.move(hx - dx * 0.2, hy - dy * 0.2, { steps: 8 }); // نحو الداخل = تصغير
  await page.mouse.up();
  await page.waitForTimeout(300);
  const k = await page.evaluate(() => (window.__ctx.ws().elements[0].anim?.props?.scale?.k || []).length);
  if (k < 1) throw new Error('لم يُنشأ مفتاح');
  await page.click('#tlAutoK');
});

await step('توسيع الطبقة وإضافة مفتاح موضع', async () => {
  await page.click('.trow.layer[data-id] .exp >> nth=0');
  await page.waitForTimeout(300);
  await page.click('.kadd >> nth=0');
  await page.waitForTimeout(300);
  const n = await page.$$eval('.kfd', els => els.length);
  if (n < 1) throw new Error('لا مفاتيح ظاهرة');
});

await step('سحب المؤشر الزمني على المسطرة', async () => {
  const rc = await page.$('#tlRuler');
  const bb = await rc.boundingBox();
  await page.mouse.click(bb.x + 150, bb.y + 12);
  await page.waitForTimeout(300);
  const t = await page.evaluate(() => window.__ctx.stage.time);
  if (t < 0.3) throw new Error('المؤشر لم يتحرك: ' + t);
});

await step('تشغيل المعاينة (الزمن يتقدم)', async () => {
  await page.click('#tlPlay');
  await page.waitForTimeout(800);
  const t = await page.evaluate(() => window.__ctx.timeline.time);
  await page.click('#tlPlay');
  if (!(t > 0.4)) throw new Error('الزمن ' + t);
});

await step('تغيير مدة المشهد', async () => {
  await page.fill('#tlDur', '3');
  await page.dispatchEvent('#tlDur', 'change');
  await page.waitForTimeout(300);
  const d = await page.evaluate(() => window.__ctx.ws().duration);
  if (d !== 3) throw new Error('المدة ' + d);
  await page.screenshot({ path: shots + 'shot-8-timeline.png' });
});

await step('انميشن جاهز (دوران 360)', async () => {
  await page.selectOption('#tlPreset', 'spin');
  await page.waitForTimeout(400);
  const keys = await page.evaluate(() => (window.__ctx.ws().elements[0].anim?.props?.rotZ?.k || []).length);
  if (keys < 2) throw new Error('لم تُنشأ مفاتيح الدوران');
});

await step('إعادة ترتيب الطبقة (PageDown)', async () => {
  const before = await page.evaluate(() => window.__ctx.ws().elements[0].name);
  await page.click('.trow.layer[data-id] >> nth=0');
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(300);
  const front = await page.evaluate(() => window.__ctx.ws().elements[0].name);
  if (front === before) throw new Error('لم يتغير الترتيب');
  await page.keyboard.press('PageUp');
  await page.waitForTimeout(200);
});

await step('الاستمرارية بعد إعادة التحميل', async () => {
  await page.waitForTimeout(1200);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const n = await page.evaluate(() => window.__ctx.ws().elements.length);
  if (n < 2) throw new Error('العناصر لم تُستعد بعد التحميل: ' + n);
  const keys = await page.evaluate(() => Object.values(window.__ctx.ws().elements[0].anim?.props || {}).reduce((a, p) => a + p.k.length, 0));
  if (keys < 2) throw new Error('المفاتيح لم تُستعد');
});

await step('زر تصدير الفيديو موجود', async () => {
  const has = await page.$('#tlVideo');
  if (!has) throw new Error('الزر غير موجود');
});

await step('دوران 360 بالسحب على الخلفية', async () => {
  await page.mouse.move(200, 400);
  await page.mouse.down();
  await page.mouse.move(1100, 280, { steps: 25 });
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.screenshot({ path: shots + 'shot-3-rotated.png' });
});

await step('تصدير PNG', async () => {
  await page.click('#exportBtn');
  await page.waitForSelector('#modals.show img', { timeout: 8000 });
  await page.screenshot({ path: shots + 'shot-4-export.png' });
  await page.click('#mClose');
});

await step('الوضع الليلي', async () => {
  await page.click('#themeBtn');
  await page.waitForTimeout(400);
  await page.screenshot({ path: shots + 'shot-5-dark.png' });
  await page.click('#themeBtn');
});

await step('شاشة الهاتف', async () => {
  await page.setViewportSize({ width: 420, height: 860 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: shots + 'shot-6-mobile.png' });
});

console.log('\n--- أخطاء وحدة التحكم (' + errors.length + ') ---');
errors.slice(0, 20).forEach(e => console.log(e));

await browser.close();
server.kill();
process.exit(errors.length ? 1 : 0);
