// panel.js — لوحة خصائص العنصر المحدد (يمين الشاشة)
import { icon } from './icons.js';
import { esc } from './state.js';

let _seq = 1;
const nid = () => 'pc' + (_seq++);
const fmt = v => (typeof v === 'number' ? Math.round(v * 100) / 100 : v);
const clampN = (v, a, b) => Math.max(a, Math.min(b, v));

export const AR_FONTS = ['Alexandria', 'Almarai', 'Amiri', 'Aref Ruqaa', 'Baloo Bhaijaan 2', 'Blaka', 'Cairo', 'Changa', 'El Messiri', 'Gulzar', 'IBM Plex Sans Arabic', 'Jomhuria', 'Katibeh', 'Lalezar', 'Lateef', 'Mada', 'Markazi Text', 'Marhey', 'Noto Kufi Arabic', 'Noto Naskh Arabic', 'Noto Sans Arabic', 'Qahiri', 'Rakkas', 'Readex Pro', 'Reem Kufi', 'Rubik', 'Scheherazade New', 'Tajawal', 'Vibes'];
export const EN_FONTS = ['Abril Fatface', 'Anton', 'Archivo Black', 'Bebas Neue', 'Cinzel', 'Dancing Script', 'Great Vibes', 'Inter', 'Jost', 'Lobster', 'Merriweather', 'Montserrat', 'Oswald', 'Pacifico', 'Playfair Display', 'Poppins', 'Press Start 2P', 'Raleway', 'Righteous', 'Roboto', 'Space Mono'];

const BEND_PRESETS = [
  { n: 'مسطح', p: { bendX: 0, bendY: 0, twist: 0, waveAmp: 0 } },
  { n: 'قوس', p: { bendX: 65, bendY: 0, twist: 0, waveAmp: 0 } },
  { n: 'قوس عمودي', p: { bendX: 0, bendY: 60, twist: 0, waveAmp: 0 } },
  { n: 'نصف لفة', p: { bendX: 150, bendY: 0, twist: 0, waveAmp: 0 } },
  { n: 'موجة', p: { bendX: 0, bendY: 0, twist: 0, waveAmp: 9 } },
  { n: 'التواء', p: { bendX: 0, bendY: 0, twist: 80, waveAmp: 0 } },
  { n: 'قبة', p: { bendX: 38, bendY: 38, twist: 0, waveAmp: 0 } }
];
const ASPECTS = [['free', 'حر (نسبة الصورة)'], ['1:1', '1:1 مربع'], ['4:5', '4:5'], ['3:4', '3:4'], ['9:16', '9:16 ستوري'], ['16:9', '16:9 عريض'], ['9:19.5', '9:19.5 هاتف']];
const SIZES = [['1080', 'مربع 1080×1080'], ['1080x1350', 'بورتريه 1080×1350'], ['1080x1920', 'ستوري 1080×1920'], ['1920x1080', 'عريض 1920×1080'], ['1170x2532', 'هاتف 1170×2532'], ['1200x628', 'غلاف 1200×628']];

const row = (label, inner) => `<div class="row"><label>${label}</label><div class="ctl">${inner}</div></div>`;
const group = (title, open, inner) => `<details class="grp" ${open ? 'open' : ''}><summary>${title}</summary><div class="gin">${inner}</div></details>`;

export function renderPanel(ctx) {
  const root = document.getElementById('panel');
  const ws = ctx.ws();
  const el = ws ? ws.elements.find(e => e.id === ctx.selectedId) : null;
  if (!el) {
    root.innerHTML = `<div class="panel-empty">
      <div class="pe-ico">${icon('sliders', 26)}</div>
      <b>لا يوجد عنصر محدد</b>
      <p>اضغط على عنصر في المشهد أو على شريطه في الأسفل لإظهار خصائصه هنا.</p>
      <div class="pe-btns">
        <button class="btn" id="peAddImg">${icon('image')} أضف صورة</button>
        <button class="btn" id="peAddTxt">${icon('type')} أضف نص</button>
      </div></div>`;
    root.querySelector('#peAddImg').onclick = () => ctx.pickImages();
    root.querySelector('#peAddTxt').onclick = () => ctx.addText();
    return;
  }
  const parts = [], binds = [];

  /* ---------- اسم العنصر + إجراءات ---------- */
  parts.push(`
  <div class="elhead">
    <span class="elbadge">${el.type === 'image' ? icon('image') : icon('type')}</span>
    <input id="pcName" class="txt" value="${esc(el.name)}" maxlength="40">
  </div>
  <div class="quickacts">
    <button class="btn" id="pcFront" title="إلى الطبقة الأمامية">${icon('up')} للمقدمة</button>
    <button class="btn" id="pcBack" title="إلى الطبقة الخلفية">${icon('down')} للخلف</button>
    <button class="btn" id="pcDup" title="تكرار (Ctrl+D)">${icon('copy')}</button>
    <button class="btn danger" id="pcDel" title="حذف (Del)">${icon('trash')}</button>
  </div>`);
  binds.push(() => {
    const nameEl = root.querySelector('#pcName');
    nameEl.addEventListener('change', () => { el.name = nameEl.value.trim() || el.name; ctx.touch(el, true); });
    root.querySelector('#pcFront').onclick = () => ctx.moveLayer(el.id, 'front');
    root.querySelector('#pcBack').onclick = () => ctx.moveLayer(el.id, 'back');
    root.querySelector('#pcDup').onclick = () => ctx.duplicateEl(el.id);
    root.querySelector('#pcDel').onclick = () => ctx.removeEl(el.id);
  });

  /* ---------- محتوى ---------- */
  if (el.type === 'text') {
    const fid = nid();
    parts.push(group('النص', true, `
      ${row('المحتوى', `<textarea id="${fid}" rows="3" dir="auto">${esc(el.text)}</textarea>`)}
      ${row('الاتجاه', selectHTML(fid + 'd', [['auto', 'تلقائي'], ['rtl', 'عربي ←'], ['ltr', '→ لاتيني']], el.dir))}
      ${row('المحاذاة', selectHTML(fid + 'a', [['start', 'البداية'], ['center', 'وسط'], ['end', 'النهاية']], el.align))}
    `));
    binds.push(() => {
      const ta = root.querySelector('#' + fid);
      const deb = debounce(() => ctx.touch(el, false), 120);
      ta.addEventListener('input', () => { el.text = ta.value; deb(); });
      ta.addEventListener('change', () => ctx.touch(el, true));
      bindSelect(root, fid + 'd', v => { el.dir = v; ctx.touch(el, true); });
      bindSelect(root, fid + 'a', v => { el.align = v; ctx.touch(el, true); });
    });

    const g = [];
    const fopts = `<optgroup label="الخطوط العربية">${AR_FONTS.map(f => `<option value="${f}" ${f === el.font ? 'selected' : ''}>${f}</option>`).join('')}</optgroup><optgroup label="English Fonts">${EN_FONTS.map(f => `<option value="${f}" ${f === el.font ? 'selected' : ''}>${f}</option>`).join('')}</optgroup>`;
    g.push(row('الخط', `<select id="pcFont">${fopts}</select>`));
    g.push(row('المعاينة', `<div class="fontprev" dir="auto">أبجد هوز — ${esc(el.font)}</div>`));
    binds.push(() => {
      const fsel = root.querySelector('#pcFont');
      fsel.addEventListener('change', () => {
        el.font = fsel.value;
        root.querySelector('.fontprev').textContent = 'أبجد هوز — ' + el.font;
        root.querySelector('.fontprev').style.fontFamily = `"${el.font}", sans-serif`;
        ctx.touch(el, true);
      });
      root.querySelector('.fontprev').style.fontFamily = `"${el.font}", sans-serif`;
    });
    addRange(g, binds, el, ctx, 'الحجم', 'fontSize', 10, 180, 1);
    addSelect(g, binds, el, ctx, 'الوزن', 'weight', [[300, 'خفيف 300'], [400, 'عادي 400'], [500, 'متوسط 500'], [600, 'نصف عريض 600'], [700, 'عريض 700'], [800, 'أعرض 800'], [900, 'أسود 900']], true);
    addToggle(g, binds, el, ctx, 'مائل', 'italic');
    addRange(g, binds, el, ctx, 'تباعد الحروف', 'spacing', -3, 14, 0.5);
    addRange(g, binds, el, ctx, 'تباعد الأسطر', 'lineHeight', 0.8, 3, 0.05);
    addColor(g, binds, el, ctx, 'لون النص', 'color', false);
    addRange(g, binds, el, ctx, 'سماكة الحدود', 'strokeW', 0, 14, 0.5);
    addColor(g, binds, el, ctx, 'لون الحدود', 'strokeColor', false);
    addColor(g, binds, el, ctx, 'خلفية النص', 'textBg', true);
    parts.push(group('الخط والنمط', true, g.join('')));
  } else {
    const g = [];
    const id = nid();
    g.push(`<button class="btn wide" id="${id}">${icon('upload')} استبدال الصورة</button>`);
    g.push(row('نسبة العرض', selectHTML(id + 's', ASPECTS, el.aspect)));
    g.push(row('قصّ الغلاف', `<span class="hint-inline">تُقص الصورة تلقائياً لتغطية النسبة المختارة</span>`));
    binds.push(() => {
      root.querySelector('#' + id).onclick = () => ctx.replaceImage(el.id);
      bindSelect(root, id + 's', v => { el.aspect = v; ctx.touch(el, true); });
    });
    addColor(g, binds, el, ctx, 'خلفية البطاقة', 'bg', true);
    parts.push(group('الصورة', true, g.join('')));
  }

  /* ---------- الانحناء 3D ---------- */
  {
    const g = [`<div class="presets" id="pcBendPre">${BEND_PRESETS.map((b, i) => `<button class="btn chipbtn" data-i="${i}">${b.n}</button>`).join('')}</div>`];
    addRange(g, binds, el, ctx, 'انحناء أفقي', 'bendX', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'انحناء عمودي', 'bendY', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'التواء', 'twist', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'قوة الموجة', 'waveAmp', 0, 30, 0.5);
    addRange(g, binds, el, ctx, 'عدد الموجات', 'waveCount', 0.5, 5, 0.5);
    binds.push(() => {
      root.querySelector('#pcBendPre').querySelectorAll('button').forEach(b => {
        b.onclick = () => {
          const pr = BEND_PRESETS[+b.dataset.i].p;
          Object.entries(pr).forEach(([pk, pv]) => ctx.setProp(el, pk, pv));
          ctx.touch(el, true);
          ctx.refreshPanel();
        };
      });
    });
    parts.push(group('الانحناء ثلاثي الأبعاد', true, g.join('')));
  }

  /* ---------- الحواف والإطار ---------- */
  {
    const g = [];
    addRange(g, binds, el, ctx, 'استدارة الحواف', 'radius', 0, 50, 1, '%');
    addRange(g, binds, el, ctx, 'سماكة الإطار', 'border', 0, 15, 0.5, '%');
    addColor(g, binds, el, ctx, 'لون الإطار', 'borderColor', false);
    addToggle(g, binds, el, ctx, 'ظل أسفل العنصر', 'shadow');
    parts.push(group('الحواف والإطار', false, g.join('')));
  }

  /* ---------- التحويل ---------- */
  {
    const g = [];
    addRange(g, binds, el, ctx, 'الموضع أفقي', 'x', -150, 150, 1);
    addRange(g, binds, el, ctx, 'الموضع عمودي', 'y', -150, 150, 1);
    addRange(g, binds, el, ctx, 'الارتفاع (عمق)', 'z', -6, 6, 0.2);
    addRange(g, binds, el, ctx, 'إمالة X', 'rotX', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'إمالة Y', 'rotY', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'دوران Z', 'rotZ', -180, 180, 1, '°');
    addRange(g, binds, el, ctx, 'الحجم', 'scale', 0.05, 3, 0.01, '×');
    addRange(g, binds, el, ctx, 'الشفافية', 'opacity', 0, 1, 0.01);
    g.push(`<button class="btn wide" id="pcResetT">${icon('rotate')} تصفير التحويلات</button>`);
    binds.push(() => {
      root.querySelector('#pcResetT').onclick = () => {
        ['x', 'y', 'z', 'rotX', 'rotY', 'rotZ', 'scale', 'opacity'].forEach(pk => ctx.setProp(el, pk, pk === 'scale' || pk === 'opacity' ? 1 : 0));
        ctx.touch(el, true); ctx.refreshPanel();
      };
    });
    parts.push(group('التحويل والموضع', false, g.join('')));
  }

  /* ---------- الظهور ---------- */
  {
    const g = [];
    addToggle(g, binds, el, ctx, 'مرئي', 'visible');
    addToggle(g, binds, el, ctx, 'مقفول (لا يُسحب)', 'locked');
    parts.push(group('الظهور والقفل', false, g.join('')));
  }

  root.innerHTML = parts.join('');
  binds.forEach(f => f());
}

/* ================= أدوات بناء عناصر التحكم ================= */
function selectHTML(id, options, value) {
  return `<select id="${id}">${options.map(o => `<option value="${o[0]}" ${String(o[0]) === String(value) ? 'selected' : ''}>${o[1]}</option>`).join('')}</select>`;
}
function bindSelect(root, id, cb) {
  const s = root.querySelector('#' + id);
  s.addEventListener('change', () => cb(s.value));
}
function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

function addRange(parts, binds, el, ctx, label, key, min, max, step, unit = '') {
  const id = nid();
  parts.push(row(label, `<div class="pair"><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${fmt(el[key])}"><input type="number" class="num" id="${id}n" min="${min}" max="${max}" step="${step}" value="${fmt(el[key])}">${unit ? `<span class="unit">${unit}</span>` : ''}</div>`));
  binds.push(() => {
    const r = document.getElementById(id), n = document.getElementById(id + 'n');
    const apply = v => { v = clampN(v, min, max); ctx.setProp(el, key, v, true); r.value = v; n.value = Math.round(v * 100) / 100; };
    r.addEventListener('input', () => apply(parseFloat(r.value)));
    n.addEventListener('input', () => { const v = parseFloat(n.value); if (!isNaN(v)) apply(v); });
    r.addEventListener('change', () => ctx.touch(el, true));
    n.addEventListener('change', () => ctx.touch(el, true));
  });
}
function addSelect(parts, binds, el, ctx, label, key, options, numeric = false) {
  const id = nid();
  parts.push(row(label, selectHTML(id, options, el[key])));
  binds.push(() => bindSelect(document, id, v => { el[key] = numeric ? parseFloat(v) : v; ctx.touch(el, true); }));
}
function addColor(parts, binds, el, ctx, label, key, allowTransparent) {
  const id = nid();
  const isT = el[key] === 'transparent';
  parts.push(row(label, `<div class="pair colorpair">
    <input type="color" id="${id}" value="${isT ? '#ffffff' : el[key]}" ${isT ? 'disabled' : ''}>
    ${allowTransparent ? `<button class="btn mini" id="${id}t">${isT ? 'شفاف ✓' : 'شفاف'}</button>` : ''}
  </div>`));
  binds.push(() => {
    const c = document.getElementById(id);
    c.addEventListener('input', () => { ctx.setProp(el, key, c.value, true); c.disabled = false; });
    c.addEventListener('change', () => ctx.touch(el, true));
    const t = document.getElementById(id + 't');
    if (t) t.onclick = () => {
      el[key] = el[key] === 'transparent' ? '#141414' : 'transparent';
      ctx.touch(el, true); ctx.refreshPanel();
    };
  });
}
function addToggle(parts, binds, el, ctx, label, key) {
  const id = nid();
  parts.push(row(label, `<button class="btn mini tog" id="${id}" aria-pressed="${!!el[key]}">${el[key] ? 'مفعّل' : 'معطّل'}</button>`));
  binds.push(() => {
    const b = document.getElementById(id);
    b.onclick = () => { ctx.setProp(el, key, !el[key]); b.setAttribute('aria-pressed', !!el[key]); b.textContent = el[key] ? 'مفعّل' : 'معطّل'; ctx.touch(el, true); };
  });
}
