// tools/build-standalone.mjs — بناء نسخة بملف واحد (CSS/JS/خطوط مضمّنة) للمعاينة دون شبكة
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'css/style.css'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'js/app.bundle.js'), 'utf8');

html = html.replace('<link rel="stylesheet" href="css/style.css">', () => '<style>\n' + css + '\n</style>');
html = html.replace('<script src="js/app.bundle.js"></script>', () => '<script>\n' + js + '\n</script>');

/* تضمين خطوط عربية أساسية (Cairo + Amiri) لتعمل دون اتصال */
const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Amiri:wght@400;700&display=swap';
let embedded = '';
try {
  const res = await fetch(fontCssUrl, { headers: { 'User-Agent': UA } });
  let cssTxt = await res.text();
  const urls = [...new Set([...cssTxt.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map(m => m[1]))];
  for (const u of urls) {
    try {
      const r = await fetch(u, { headers: { 'User-Agent': UA } });
      const buf = Buffer.from(await r.arrayBuffer());
      cssTxt = cssTxt.split(u).join('data:font/woff2;base64,' + buf.toString('base64'));
    } catch (e) { }
  }
  embedded = '<style>/* embedded fonts: Cairo, Amiri */\n' + cssTxt + '\n</style>';
} catch (e) {
  console.log('تعذر تضمين الخطوط (سيعمل عبر CDN):', e.message);
}
if (embedded) html = html.replace('</title>', () => '</title>\n' + embedded);

const out = '/home/user/curve-studio-standalone.html';
fs.writeFileSync(out, html);
console.log('OK →', out, (fs.statSync(out).size / 1024 / 1024).toFixed(2) + 'MB');
