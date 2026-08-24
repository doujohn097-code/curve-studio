/* ============================================================
   Curve Studio — منطق المحرر
   إدارة الحالة، الطبقات، التحريك، التكبير، المفتش، التصدير
   ============================================================ */
(() => {
'use strict';

const R = window.CSRender;
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const uid = () => 'l' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/* ================== الخطوط ================== */
const FONT_GROUPS = [
  { label: 'خطوط عربية', fonts: [
    ['Cairo', 'Cairo', [400, 600, 700, 900]],
    ['Tajawal', 'Tajawal', [400, 500, 700, 800]],
    ['Almarai', 'Almarai', [400, 700, 800]],
    ['Changa', 'Changa', [400, 600, 700, 800]],
    ['Noto Kufi Arabic', 'Noto Kufi Arabic', [400, 600, 700, 900]],
    ['Readex Pro', 'Readex Pro', [400, 600, 700]],
    ['IBM Plex Sans Arabic', 'IBM Plex Sans Arabic', [400, 500, 700]],
    ['Amiri', 'Amiri', [400, 700]],
    ['Aref Ruqaa', 'Aref Ruqaa', [400, 700]],
    ['Reem Kufi', 'Reem Kufi', [400, 600, 700]],
  ]},
  { label: 'خطوط إنجليزية', fonts: [
    ['Inter', 'Inter', [400, 600, 700, 900]],
    ['Poppins', 'Poppins', [400, 600, 700, 900]],
    ['Montserrat', 'Montserrat', [400, 600, 700, 900]],
    ['Space Grotesk', 'Space Grotesk', [400, 500, 700]],
    ['Anton', 'Anton', [400]],
    ['Bebas Neue', 'Bebas Neue', [400]],
    ['Oswald', 'Oswald', [400, 600, 700]],
    ['Playfair Display', 'Playfair Display', [400, 600, 700, 900]],
    ['Lobster', 'Lobster', [400]],
    ['Merriweather', 'Merriweather', [400, 700, 900]],
  ]},
];
const FONT_WEIGHTS = {};
FONT_GROUPS.forEach(g => g.fonts.forEach(([id, , ws]) => FONT_WEIGHTS[id] = ws));

const CANVAS_PRESETS = [
  ['custom', 'مخصص'],
  ['sq1080', 'مربع — 1080 × 1080', 1080, 1080],
  ['po1080', 'عمودي — 1080 × 1350', 1080, 1350],
  ['story', 'ستوري — 1080 × 1920', 1080, 1920],
  ['wide', 'عريض — 1920 × 1080', 1920, 1080],
  ['yt', 'يوتيوب — 1280 × 720', 1280, 720],
  ['a4l', 'عرضي كبير — 2560 × 1440', 2560, 1440],
];

const GRAD_PRESETS = [
  ['#6366f1', '#ec4899'], ['#0ea5e9', '#6366f1'], ['#f59e0b', '#ef4444'],
  ['#10b981', '#0ea5e9'], ['#8b5cf6', '#ec4899'], ['#111827', '#374151'],
  ['#fdfcfb', '#e2d1c3'], ['#a8edea', '#fed6e3'], ['#ff9a9e', '#fecfef'],
  ['#1e3c72', '#2a5298'], ['#134e5e', '#71b280'], ['#41295a', '#2f0743'],
  ['#fc4a1a', '#f7b733'], ['#22c1c3', '#fdbb2d'], ['#0f0c29', '#302b63'],
];
const BG_SWATCHES = ['#ffffff', '#f8fafc', '#f1f5f9', '#111827', '#000000', '#fef3c7', '#dcfce7', '#e0f2fe', '#fce7f3', '#ede9fe', '#6366f1', '#0ea5e9'];
const FRAME_COLORS = ['#15181e', '#2f3542', '#c0c4cc', '#e8e6e1', '#d8b56d', '#b76e79', '#5b6ee1', '#8e44ad', '#0f766e', '#c23636'];
const TEXT_COLORS = ['#111111', '#ffffff', '#6366f1', '#ec4899', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];

/* ================== الحالة ================== */
function defaultState() {
  return {
    version: 1,
    name: 'مشروعي الجديد',
    canvas: {
      w: 1600, h: 1000, preset: 'custom',
      bg: { type: 'color', color: '#ffffff', g1: '#6366f1', g2: '#ec4899', angle: 120, imageHash: null, fit: 'cover' },
    },
    layers: [],
  };
}
let state = defaultState();
let selectedId = null;

/* مخزن الصور: hash → { dataURL, el } */
const IMG = {};
function storeImage(dataURL) {
  const h = uid();
  IMG[h] = { dataURL, el: null };
  return h;
}
function getImgEl(hash) {
  if (!hash) return null;
  const rec = IMG[hash];
  if (!rec) return null;
  if (rec.el) return rec.el;
  return null;
}
function ensureImg(hash) {
  return new Promise(res => {
    const rec = IMG[hash];
    if (!rec) return res(null);
    if (rec.el && rec.el.complete) return res(rec.el);
    if (rec.el) { rec.el.onload = () => res(rec.el); return; }
    const im = new Image();
    im.src = rec.dataURL;
    rec.el = im;
    if (im.complete && im.naturalWidth) res(im);
    else { im.onload = () => res(im); im.onerror = () => res(null); }
  });
}
function imageHashesInUse() {
  const used = new Set();
  state.layers.forEach(l => { if (l.imageHash) used.add(l.imageHash); });
  if (state.canvas.bg.imageHash) used.add(state.canvas.bg.imageHash);
  return used;
}

/* ================== السجل (تراجع/إعادة) ================== */
let past = [], future = [];
function snapshot() { return JSON.stringify({ state, selectedId }); }
function saveHistory() {
  past.push(snapshot());
  if (past.length > 80) past.shift();
  future = [];
  syncHistoryBtns();
}
function restore(json) {
  const d = JSON.parse(json);
  state = d.state; selectedId = d.selectedId;
  rebuildAll(); syncBgInputs(); syncSizeInputs();
  $('#projectName').value = state.name;
  scheduleAutosave();
}
function undo() { if (!past.length) return; future.push(snapshot()); restore(past.pop()); toast('تراجع'); }
function redo() { if (!future.length) return; past.push(snapshot()); restore(future.pop()); toast('إعادة'); }
function syncHistoryBtns() {
  $('#btnUndo').disabled = !past.length;
  $('#btnRedo').disabled = !future.length;
}

/* تعديل الحالة مع تسجيل التاريخ */
function mutate(fn, opts = {}) {
  if (opts.history !== false) saveHistory();
  fn();
  rebuildAll();
  scheduleAutosave();
}

/* ================== العرض (تكبير/إزاحة) ================== */
const view = { zoom: 1, panX: 0, panY: 0 };
const viewport = $('#viewport'), scaler = $('#scaler'), artboard = $('#artboard');

function applyView() {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const { w, h } = state.canvas;
  const tx = vw / 2 + view.panX - (w * view.zoom) / 2;
  const ty = vh / 2 + view.panY - (h * view.zoom) / 2;
  scaler.style.transform = `translate(${tx}px, ${ty}px) scale(${view.zoom})`;
  const pct = Math.round(view.zoom * 100);
  $('#zoomVal').textContent = pct + '%';
  const zr = $('#zoomRange');
  if (document.activeElement !== zr) zr.value = clamp(pct, 5, 400);
  syncTextSelBoxes();
}
function setZoom(z, cx, cy) {
  z = clamp(z, 0.05, 8);
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const { w, h } = state.canvas;
  if (cx === undefined) { cx = vw / 2; cy = vh / 2; }
  const rect = viewport.getBoundingClientRect();
  cx -= rect.left; cy -= rect.top;
  const tx0 = vw / 2 + view.panX - (w * view.zoom) / 2;
  const ty0 = vh / 2 + view.panY - (h * view.zoom) / 2;
  const wx = (cx - tx0) / view.zoom, wy = (cy - ty0) / view.zoom;
  view.zoom = z;
  const tx1 = cx - wx * z, ty1 = cy - wy * z;
  view.panX = tx1 + (w * z) / 2 - vw / 2;
  view.panY = ty1 + (h * z) / 2 - vh / 2;
  applyView();
  schedulePreviewRerender();
}
function fitView() {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const { w, h } = state.canvas;
  view.zoom = clamp(Math.min((vw - 110) / w, (vh - 110) / h), 0.05, 8);
  view.panX = 0; view.panY = 0;
  applyView();
  schedulePreviewRerender();
}
function screenToWorld(e) {
  const r = artboard.getBoundingClientRect();
  return { x: (e.clientX - r.left) / view.zoom, y: (e.clientY - r.top) / view.zoom };
}

/* إعادة رسم كانفس الأجهزة عند تغيّر التكبير (للحدة) */
let rerenderT = null;
function schedulePreviewRerender() {
  clearTimeout(rerenderT);
  rerenderT = setTimeout(() => { flatCache = {}; renderLayersDom(); }, 260);
}
function previewScale() {
  const d = window.devicePixelRatio || 1;
  return clamp(Math.round(view.zoom * d * 4) / 4, 1, 3);
}

/* ================== العناصر (مصانع) ================== */
function makeDevice() {
  const n = state.layers.filter(l => l.type === 'device').length;
  return {
    id: uid(), type: 'device', name: 'هاتف ' + (n + 1),
    x: state.canvas.w / 2 + (n % 3 - 1) * 120, y: state.canvas.h / 2,
    rotation: 0, scale: 1, opacity: 1, hidden: false,
    width: 300, frame: 'iphone', frameColor: '#15181e', fit: 'cover',
    imageHash: null, tiltX: 0, tiltY: -14,
    shadow: { on: true, blur: 60, alpha: .42, y: 30 },
  };
}
function makeText(content) {
  const n = state.layers.filter(l => l.type === 'text').length;
  return {
    id: uid(), type: 'text', name: 'نص ' + (n + 1),
    x: state.canvas.w / 2, y: state.canvas.h * 0.2,
    rotation: 0, scale: 1, opacity: 1, hidden: false,
    content: content || 'اكتب نصك هنا', font: 'Cairo', size: 84, weight: 800,
    color: '#111111', align: 'center', ls: 0, lh: 1.25,
    bgOn: false, bgColor: '#111111',
    shadow: { on: false, alpha: .5 },
  };
}
function makeImageLayer(iw, ih, hash) {
  const n = state.layers.filter(l => l.type === 'image').length;
  const maxW = Math.min(state.canvas.w, 700);
  const s = Math.min(1, maxW / iw);
  return {
    id: uid(), type: 'image', name: 'صورة ' + (n + 1),
    x: state.canvas.w / 2, y: state.canvas.h / 2,
    rotation: 0, scale: 1, opacity: 1, hidden: false,
    imageHash: hash, iw: iw * s, ih: ih * s, radius: 28,
    shadow: { on: true, blur: 50, alpha: .4, y: 26 },
  };
}

/* ================== كاشف الأجهزة المسطّحة ================== */
let flatCache = {};
function flatPropsKey(l) {
  const sh = l.shadow || {};
  return [l.width, l.frame, l.frameColor, l.fit, l.imageHash, sh.on, sh.blur, sh.alpha, sh.y].join('|');
}
function getFlat(layer, S) {
  const key = layer.id + '|' + S + '|' + flatPropsKey(layer);
  if (!flatCache[key]) {
    flatCache[key] = R.drawDeviceFlat(layer, getImgEl(layer.imageHash), S);
  }
  return flatCache[key];
}

/* ================== بناء DOM الطبقات ================== */
const layersRoot = $('#layersRoot');

function layerSize(l) {
  if (l.type === 'device') {
    const f = R.frameOf(l);
    const sh = l.shadow || { on: true, blur: 60, y: 30 };
    const pad = sh.on ? Math.ceil(sh.blur * 1.9 + Math.abs(sh.y) + 14) : 12;
    return { w: l.width + pad * 2, h: l.width * f.ratio + pad * 2, pad };
  }
  if (l.type === 'image') return { w: l.iw, h: l.ih, pad: 0 };
  // النص: حجم تلقائي من DOM
  const el = layersRoot.querySelector(`[data-id="${l.id}"]`);
  if (el) {
    const inner = el.firstElementChild;
    return { w: inner ? inner.offsetWidth : 100, h: inner ? inner.offsetHeight : 50, pad: 0 };
  }
  return { w: 100, h: 50, pad: 0 };
}

function renderLayersDom() {
  layersRoot.innerHTML = '';
  for (const l of state.layers) {
    if (l.hidden) continue;
    const el = document.createElement('div');
    el.className = 'layer controllable' + (l.id === selectedId ? ' selected' : '');
    el.dataset.id = l.id;
    el.style.zIndex = state.layers.indexOf(l);
    applyLayerTransform(el, l);

    if (l.type === 'device') {
      const { w, h, pad } = layerSize(l);
      el.style.width = w + 'px';
      el.style.height = h + 'px';
      // توسيط صندوق العنصر حول نقطة الارتكاز (x,y)
      el.style.left = (-w / 2) + 'px';
      el.style.top = (-h / 2) + 'px';
      const tilt = document.createElement('div');
      tilt.className = 'dev-tilt';
      tilt.style.transform = `perspective(1200px) rotateX(${l.tiltX || 0}deg) rotateY(${l.tiltY || 0}deg)`;
      const flat = getFlat(l, previewScale());
      tilt.appendChild(flat.canvas);
      flat.canvas.className = 'dev-canvas';
      flat.canvas.style.width = flat.cssW + 'px';
      flat.canvas.style.height = flat.cssH + 'px';
      el.appendChild(tilt);
      el.appendChild(buildSel(pad));
    } else if (l.type === 'text') {
      const inner = document.createElement('div');
      inner.className = 'txt-inner';
      inner.dir = 'auto';
      inner.textContent = l.content;
      inner.style.cssText = [
        `font-family:"${l.font}",sans-serif`,
        `font-size:${l.size}px`,
        `font-weight:${l.weight}`,
        `color:${l.color}`,
        `line-height:${l.lh || 1.25}`,
        `letter-spacing:${l.ls || 0}px`,
        `text-align:${l.align || 'center'}`,
        l.bgOn ? `background:${l.bgColor};padding:${l.size * 0.18}px ${l.size * 0.42}px;border-radius:${l.size * 0.42}px` : '',
        (l.shadow && l.shadow.on) ? `text-shadow:0 ${l.size * 0.05}px ${l.size * 0.14}px rgba(0,0,0,${l.shadow.alpha ?? .5})` : '',
      ].join(';');
      // غلاف يوسّط المحتوى حول نقطة الارتكاز (0,0) للطبقة — بعرض المحتوى الكامل
      const wrap = document.createElement('div');
      wrap.style.cssText = 'position:absolute;left:0;top:0;transform:translate(-50%,-50%);width:max-content';
      wrap.appendChild(inner);
      el.appendChild(wrap);
      el.appendChild(buildSelForText(l));
    } else if (l.type === 'image') {
      el.style.width = l.iw + 'px';
      el.style.height = l.ih + 'px';
      el.style.left = (-l.iw / 2) + 'px';
      el.style.top = (-l.ih / 2) + 'px';
      const im = document.createElement('img');
      im.draggable = false;
      im.src = IMG[l.imageHash] ? IMG[l.imageHash].dataURL : '';
      im.style.borderRadius = (l.radius ?? 28) + 'px';
      if (l.shadow && l.shadow.on) im.style.boxShadow = `0 ${l.shadow.y}px ${l.shadow.blur}px rgba(0,0,0,${l.shadow.alpha ?? .4})`;
      el.appendChild(im);
      el.appendChild(buildSel(0));
    }
    layersRoot.appendChild(el);
  }
  syncTextSelBoxes();
}

/* تحويل الطبقة (موضع/دوران/مقياس/شفافية) */
function applyLayerTransform(el, l) {
  el.style.transform = `translate(${l.x}px, ${l.y}px) rotate(${l.rotation || 0}deg) scale(${l.scale || 1})`;
  el.style.opacity = l.opacity ?? 1;
}

/* صندوق التحديد للأجهزة/الصور: pad = هامش الظل */
function buildSel(pad) {
  const sel = document.createElement('div');
  sel.className = 'sel';
  sel.style.inset = pad + 'px';
  sel.innerHTML = `<div class="box"></div>
    <div class="rot-line"></div>
    <div class="rot-handle" data-h="rot"></div>
    <div class="handle" data-h="nw"></div><div class="handle" data-h="ne"></div>
    <div class="handle" data-h="sw"></div><div class="handle" data-h="se"></div>`;
  return sel;
}
/* صندوق تحديد للنص يتبع حجم المحتوى الفعلي */
function buildSelForText() {
  const sel = document.createElement('div');
  sel.className = 'sel text-sel';
  sel.innerHTML = `<div class="box"></div>
    <div class="rot-line"></div>
    <div class="rot-handle" data-h="rot"></div>
    <div class="handle" data-h="nw"></div><div class="handle" data-h="ne"></div>
    <div class="handle" data-h="sw"></div><div class="handle" data-h="se"></div>`;
  return sel;
}
function syncTextSelBoxes() {
  $$('.layer[data-id]', layersRoot).forEach(el => {
    const l = state.layers.find(x => x.id === el.dataset.id);
    if (!l || l.type !== 'text') return;
    const sel = $('.sel', el);
    const inner = $('.txt-inner', el);
    if (!sel || !inner) return;
    const w = inner.offsetWidth, h = inner.offsetHeight;
    sel.style.left = (-w / 2) + 'px';
    sel.style.top = (-h / 2) + 'px';
    sel.style.width = w + 'px';
    sel.style.height = h + 'px';
    sel.style.inset = 'auto';
  });
  // ضبط حجم المقابض مع التكبير
  const inv = 1 / view.zoom;
  $$('.handle, .rot-handle', layersRoot).forEach(h => {
    h.style.transform = `translate(${h.classList.contains('rot-handle') ? '-50%,0' : '-50%,-50%'}) scale(${clamp(inv, .4, 3)})`;
  });
}

/* ================== الخلفية واللوحة ================== */
function buildArtboard() {
  const { w, h, bg } = state.canvas;
  artboard.style.width = w + 'px';
  artboard.style.height = h + 'px';
  if (bg.type === 'gradient') {
    artboard.style.background = `linear-gradient(${bg.angle}deg, ${bg.g1}, ${bg.g2})`;
  } else if (bg.type === 'image' && bg.imageHash && IMG[bg.imageHash]) {
    artboard.style.backgroundColor = '#0b0e13';
    artboard.style.backgroundImage = `url(${IMG[bg.imageHash].dataURL})`;
    artboard.style.backgroundSize = bg.fit === 'contain' ? 'contain' : bg.fit === 'fill' ? '100% 100%' : 'cover';
    artboard.style.backgroundPosition = 'center';
    artboard.style.backgroundRepeat = 'no-repeat';
  } else {
    artboard.style.background = bg.color || '#ffffff';
    artboard.style.backgroundImage = 'none';
  }
}

function rebuildAll() {
  flatCache = {};
  buildArtboard();
  renderLayersDom();
  renderLayersPanel();
  renderInspector();
  updateEmptyHint();
  applyView();
}
function updateEmptyHint() {
  $('#emptyHint').classList.toggle('hidden', state.layers.length > 0);
}

/* ================== لوحة الطبقات ================== */
const TYPE_ICONS = {
  device: '<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4"/></svg>',
  text: '<svg viewBox="0 0 24 24"><path d="M4 7V5h16v2M9 20h6M12 5v15"/></svg>',
  image: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
};
function renderLayersPanel() {
  const list = $('#layersList');
  list.innerHTML = '';
  if (!state.layers.length) {
    list.innerHTML = '<div class="layers-empty">لا توجد عناصر بعد — أضف هاتفًا أو نصًا</div>';
    return;
  }
  [...state.layers].reverse().forEach(l => {
    const row = document.createElement('div');
    row.className = 'layer-row' + (l.id === selectedId ? ' on' : '');
    row.draggable = true;
    row.dataset.id = l.id;
    row.innerHTML = `
      <span class="lic">${TYPE_ICONS[l.type]}</span>
      <span class="lname">${escapeHtml(l.name)}${l.hidden ? ' (مخفي)' : ''}</span>
      <span class="lbtn" data-act="eye" title="إظهار/إخفاء"><svg viewBox="0 0 24 24">${l.hidden
        ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"/>'
        : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'}</svg></span>
      <span class="lbtn" data-act="up" title="رفع"><svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg></span>
      <span class="lbtn" data-act="down" title="خفض"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span>`;
    row.addEventListener('click', e => {
      const act = e.target.closest('.lbtn')?.dataset.act;
      if (act === 'eye') { mutate(() => { l.hidden = !l.hidden; }); return; }
      if (act === 'up')   { moveLayer(l, +1); return; }
      if (act === 'down') { moveLayer(l, -1); return; }
      selectLayer(l.id);
    });
    // سحب لإعادة الترتيب
    row.addEventListener('dragstart', e => e.dataTransfer.setData('text/id', l.id));
    row.addEventListener('dragover', e => { e.preventDefault(); row.classList.add('drag-over'); });
    row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
    row.addEventListener('drop', e => {
      e.preventDefault(); row.classList.remove('drag-over');
      const dragId = e.dataTransfer.getData('text/id');
      if (!dragId || dragId === l.id) return;
      mutate(() => {
        const from = state.layers.findIndex(x => x.id === dragId);
        const to = state.layers.findIndex(x => x.id === l.id);
        const [m] = state.layers.splice(from, 1);
        state.layers.splice(to, 0, m);
      });
    });
    list.appendChild(row);
  });
}
function moveLayer(l, dir) {
  mutate(() => {
    const i = state.layers.indexOf(l);
    const j = clamp(i + dir, 0, state.layers.length - 1);
    if (i === j) return;
    state.layers.splice(i, 1);
    state.layers.splice(j, 0, l);
  });
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function selectLayer(id) {
  if (selectedId === id) return;
  selectedId = id;
  renderLayersDom();
  renderLayersPanel();
  renderInspector();
}

/* ================== المفتش (الخصائص) ================== */
const insp = $('#inspector');

function hRow(labelText, ...nodes) {
  const row = document.createElement('div');
  row.className = 'i-row';
  const lab = document.createElement('label');
  lab.textContent = labelText;
  row.appendChild(lab);
  const flex = document.createElement('div');
  flex.className = 'row-flex';
  nodes.forEach(n => flex.appendChild(n));
  row.appendChild(flex);
  return row;
}
function rangeControl(min, max, step, get, set, commitLabel) {
  const r = document.createElement('input');
  r.type = 'range'; r.min = min; r.max = max; r.step = step; r.value = get();
  const n = document.createElement('input');
  n.className = 'i-num'; n.type = 'number'; n.min = min; n.max = max; n.step = step; n.value = Math.round(get() * 100) / 100;
  let saved = false;
  const fmt = v => Math.round(v * 100) / 100;
  const input = v => {
    if (!saved) { saveHistory(); saved = true; }
    set(clamp(parseFloat(v) || 0, min, max), false);
    n.value = fmt(parseFloat(v) || 0);
    liveRefresh();
  };
  const commit = v => {
    set(clamp(parseFloat(v) || 0, min, max), true);
    n.value = fmt(parseFloat(v) || 0);
    r.value = fmt(get());
    saved = false;
    rebuildAll();
    scheduleAutosave();
  };
  r.addEventListener('input', () => input(r.value));
  r.addEventListener('change', () => commit(r.value));
  n.addEventListener('change', () => { input(n.value); commit(n.value); });
  r.dataset.sync = 'range'; n.dataset.sync = 'num';
  return { wrap: [r, n], refresh() { r.value = fmt(get()); n.value = fmt(get()); } };
}
function colorControl(get, set) {
  const c = document.createElement('input');
  c.type = 'color'; c.value = get();
  let saved = false;
  c.addEventListener('input', () => {
    if (!saved) { saveHistory(); saved = true; }
    set(c.value); liveRefresh();
  });
  c.addEventListener('change', () => { saved = false; rebuildAll(); scheduleAutosave(); });
  return c;
}
function segmented(options, get, set) {
  const box = document.createElement('div');
  box.className = 'segmented';
  const sync = () => $$('button', box).forEach(b => b.classList.toggle('on', b.dataset.v == get()));
  options.forEach(([v, label]) => {
    const b = document.createElement('button');
    b.textContent = label; b.dataset.v = v;
    b.addEventListener('click', () => { set(v); sync(); });
    box.appendChild(b);
  });
  sync();
  return box;
}
function switchControl(get, set) {
  const lab = document.createElement('label');
  lab.className = 'switch';
  const i = document.createElement('input');
  i.type = 'checkbox'; i.checked = get();
  i.addEventListener('change', () => set(i.checked));
  lab.appendChild(i);
  lab.appendChild(document.createElement('i'));
  return lab;
}
function chipRow(options, get, set) {
  const box = document.createElement('div');
  box.className = 'chips';
  const sync = () => $$('button', box).forEach(b => b.classList.toggle('on', b.dataset.v == get()));
  options.forEach(([v, label]) => {
    const b = document.createElement('button');
    b.textContent = label; b.dataset.v = v;
    b.addEventListener('click', () => { set(v); sync(); });
    box.appendChild(b);
  });
  sync();
  return box;
}
/* تحديث حي أثناء السحب بدون إعادة بناء كاملة */
function liveRefresh() {
  flatCache = {};
  buildArtboard();
  renderLayersDom();
  renderLayersPanel();
}
function syncInspectorValues() { renderInspector(); }

function renderInspector() {
  insp.innerHTML = '';
  const l = state.layers.find(x => x.id === selectedId);
  if (!l) {
    insp.innerHTML = `<div class="empty-i">حدّد عنصرًا من اللوحة أو من قائمة الطبقات لعرض خصائصه.<br><br>💡 نصيحة: اسحب أي عنصر لتحريكه، واستخدم المقابض للتكبير والتدوير.</div>`;
    return;
  }

  const title = document.createElement('div');
  title.className = 'i-title';
  title.innerHTML = TYPE_ICONS[l.type] + `<span>${l.type === 'device' ? 'هاتف' : l.type === 'text' ? 'نص' : 'صورة'}</span>`;
  insp.appendChild(title);

  // الاسم
  const nameInp = document.createElement('input');
  nameInp.className = 'inp'; nameInp.value = l.name;
  nameInp.addEventListener('change', () => mutate(() => { l.name = nameInp.value || l.name; }));
  insp.appendChild(hRow('الاسم', nameInp));

  if (l.type === 'device') buildDeviceInspector(l);
  else if (l.type === 'text') buildTextInspector(l);
  else buildImageInspector(l);

  buildCommonInspector(l);
}

function buildDeviceInspector(l) {
  // اللقطة
  const up = document.createElement('button');
  up.className = 'btn ghost full';
  up.innerHTML = '<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg> ' + (l.imageHash ? 'استبدال لقطة الشاشة' : 'رفع لقطة الشاشة');
  up.addEventListener('click', () => pickImage().then(img => {
    if (img) mutate(() => { l.imageHash = img.hash; });
  }));
  insp.appendChild(hRow('اللقطة', up));

  // ملاءمة اللقطة
  insp.appendChild(hRow('ملاءمة اللقطة', segmented(
    [['cover', 'تغطية'], ['contain', 'احتواء'], ['fill', 'تمديد']],
    () => l.fit, v => mutate(() => { l.fit = v; }))));

  // نمط الإطار
  insp.appendChild(hRow('نمط الهاتف', segmented(
    [['iphone', 'آيفون'], ['android', 'أندرويد'], ['minimal', 'بسيط']],
    () => l.frame, v => mutate(() => { l.frame = v; }))));

  // لون الإطار
  insp.appendChild(hRow('لون الإطار', colorControl(() => l.frameColor, v => { l.frameColor = v; })));
  const sw = document.createElement('div');
  sw.className = 'swatches';
  FRAME_COLORS.forEach(c => {
    const b = document.createElement('button');
    b.style.background = c;
    b.addEventListener('click', () => mutate(() => { l.frameColor = c; }));
    sw.appendChild(b);
  });
  insp.lastChild.after(swRow(sw));
  function swRow(node) { const d = document.createElement('div'); d.className = 'i-row'; d.appendChild(node); return d; }

  // حجم الهاتف
  const wCtl = rangeControl(120, 700, 5, () => l.width, (v, commit) => { l.width = v; });
  insp.appendChild(hRow('عرض الهاتف', ...wCtl.wrap));

  // أوضاع ثلاثية الأبعاد جاهزة
  insp.appendChild(hRow('وضعية ثلاثية الأبعاد', chipRow(
    [['0,0', 'مسطّح'], ['0,-18', 'يمين'], ['0,18', 'يسار'], ['-14,0', 'أعلى'], ['12,0', 'أسفل'], ['-8,-22', 'انسيابي']],
    () => `${Math.round(l.tiltX)},${Math.round(l.tiltY)}`,
    v => mutate(() => { const [a, b] = v.split(',').map(Number); l.tiltX = a; l.tiltY = b; }))));

  const txCtl = rangeControl(-45, 45, 1, () => l.tiltX, v => { l.tiltX = v; });
  insp.appendChild(hRow('إمالة رأسية ↕', ...txCtl.wrap));
  const tyCtl = rangeControl(-45, 45, 1, () => l.tiltY, v => { l.tiltY = v; });
  insp.appendChild(hRow('إمالة أفقية ↔', ...tyCtl.wrap));

  // الظل
  const shRow = document.createElement('div');
  shRow.className = 'switch-row';
  shRow.append('تفعيل الظل', switchControl(() => l.shadow.on, v => mutate(() => { l.shadow.on = v; })));
  insp.appendChild(shRow);
  if (l.shadow.on) {
    insp.appendChild(hRow('نعومة الظل', ...rangeControl(10, 150, 2, () => l.shadow.blur, v => { l.shadow.blur = v; }).wrap));
    insp.appendChild(hRow('قوة الظل', ...rangeControl(0.05, 0.9, 0.01, () => l.shadow.alpha, v => { l.shadow.alpha = v; }).wrap));
    insp.appendChild(hRow('انزياح الظل', ...rangeControl(0, 120, 2, () => l.shadow.y, v => { l.shadow.y = v; }).wrap));
  }
}

function buildTextInspector(l) {
  // المحتوى
  const ta = document.createElement('textarea');
  ta.className = 'inp'; ta.dir = 'auto'; ta.value = l.content;
  ta.addEventListener('change', () => mutate(() => { l.content = ta.value; }));
  insp.appendChild(hRow('المحتوى', ta));

  // الخط
  const sel = document.createElement('select');
  sel.className = 'inp i-select';
  FONT_GROUPS.forEach(g => {
    const og = document.createElement('optgroup');
    og.label = g.label;
    g.fonts.forEach(([id, label]) => {
      const o = document.createElement('option');
      o.value = id; o.textContent = label; o.style.fontFamily = `"${id}"`;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
  sel.value = l.font;
  sel.addEventListener('change', () => {
    document.fonts.load(`16px "${sel.value}"`).then(() => {});
    mutate(() => {
      l.font = sel.value;
      const ws = FONT_WEIGHTS[sel.value] || [400, 700];
      if (!ws.includes(Number(l.weight))) l.weight = ws.includes(700) ? 700 : ws[0];
    });
  });
  insp.appendChild(hRow('الخط', sel));

  // الحجم + الوزن
  insp.appendChild(hRow('حجم الخط', ...rangeControl(12, 320, 1, () => l.size, v => { l.size = v; }).wrap));
  const wSel = document.createElement('select');
  wSel.className = 'inp i-select';
  const wNames = { 100: 'رفيع', 300: 'خفيف', 400: 'عادي', 500: 'متوسط', 600: 'سمين', 700: 'عريض', 800: 'عريض جدًا', 900: 'أسود' };
  (FONT_WEIGHTS[l.font] || [400, 700]).forEach(w => {
    const o = document.createElement('option');
    o.value = w; o.textContent = (wNames[w] || w);
    wSel.appendChild(o);
  });
  wSel.value = l.weight;
  wSel.addEventListener('change', () => mutate(() => { l.weight = Number(wSel.value); }));
  insp.appendChild(hRow('سماكة الخط', wSel));

  // اللون
  insp.appendChild(hRow('لون النص', colorControl(() => l.color, v => { l.color = v; })));
  const sw = document.createElement('div');
  sw.className = 'swatches';
  TEXT_COLORS.forEach(c => {
    const b = document.createElement('button');
    b.style.background = c; b.style.border = '1px solid rgba(255,255,255,.2)';
    b.addEventListener('click', () => mutate(() => { l.color = c; }));
    sw.appendChild(b);
  });
  const swRowEl = document.createElement('div'); swRowEl.className = 'i-row'; swRowEl.appendChild(sw);
  insp.appendChild(swRowEl);

  // المحاذاة
  insp.appendChild(hRow('محاذاة النص', segmented(
    [['right', 'يمين'], ['center', 'وسط'], ['left', 'يسار']],
    () => l.align, v => mutate(() => { l.align = v; }))));
  insp.appendChild(hRow('تباعد الأسطر', ...rangeControl(0.8, 2.5, 0.05, () => l.lh, v => { l.lh = v; }).wrap));
  insp.appendChild(hRow('تباعد الأحرف', ...rangeControl(0, 30, 0.5, () => l.ls, v => { l.ls = v; }).wrap));

  // خلفية النص
  const bgRow = document.createElement('div');
  bgRow.className = 'switch-row';
  bgRow.append('خلفية خلف النص', switchControl(() => l.bgOn, v => mutate(() => { l.bgOn = v; })));
  insp.appendChild(bgRow);
  if (l.bgOn) insp.appendChild(hRow('لون الخلفية', colorControl(() => l.bgColor, v => { l.bgColor = v; })));

  // ظل النص
  const shRow = document.createElement('div');
  shRow.className = 'switch-row';
  shRow.append('ظل النص', switchControl(() => l.shadow.on, v => mutate(() => { l.shadow.on = v; })));
  insp.appendChild(shRow);
  if (l.shadow.on) insp.appendChild(hRow('قوة الظل', ...rangeControl(0.1, 0.9, 0.01, () => l.shadow.alpha, v => { l.shadow.alpha = v; }).wrap));
}

function buildImageInspector(l) {
  const up = document.createElement('button');
  up.className = 'btn ghost full';
  up.textContent = 'استبدال الصورة';
  up.addEventListener('click', () => pickImage().then(img => {
    if (!img) return;
    mutate(() => {
      l.imageHash = img.hash;
      const s = Math.min(1, 700 / img.nw);
      l.iw = img.nw * s;
      l.ih = img.nh * s;
    });
  }));
  insp.appendChild(hRow('الصورة', up));
  insp.appendChild(hRow('استدارة الزوايا', ...rangeControl(0, 120, 1, () => l.radius, v => { l.radius = v; }).wrap));
  const shRow = document.createElement('div');
  shRow.className = 'switch-row';
  shRow.append('تفعيل الظل', switchControl(() => l.shadow.on, v => mutate(() => { l.shadow.on = v; })));
  insp.appendChild(shRow);
  if (l.shadow.on) {
    insp.appendChild(hRow('نعومة الظل', ...rangeControl(10, 150, 2, () => l.shadow.blur, v => { l.shadow.blur = v; }).wrap));
    insp.appendChild(hRow('انزياح الظل', ...rangeControl(0, 120, 2, () => l.shadow.y, v => { l.shadow.y = v; }).wrap));
  }
}

/* خصائص مشتركة: موضع، دوران، مقياس، محاذاة، ترتيب، إجراءات */
function buildCommonInspector(l) {
  insp.appendChild(hRow('الموضع X', ...rangeControl(0, state.canvas.w, 1, () => l.x, v => { l.x = v; }).wrap));
  insp.appendChild(hRow('الموضع Y', ...rangeControl(0, state.canvas.h, 1, () => l.y, v => { l.y = v; }).wrap));
  insp.appendChild(hRow('الدوران °', ...rangeControl(-180, 180, 1, () => l.rotation || 0, v => { l.rotation = v; }).wrap));
  insp.appendChild(hRow('المقياس ×', ...rangeControl(0.1, 4, 0.01, () => l.scale || 1, v => { l.scale = v; }).wrap));
  insp.appendChild(hRow('الشفافية', ...rangeControl(0.05, 1, 0.01, () => l.opacity ?? 1, v => { l.opacity = v; }).wrap));

  // محاذاة سريعة
  const grid = document.createElement('div');
  grid.className = 'align-grid';
  for (let gy = 0; gy < 3; gy++) for (let gx = 0; gx < 3; gx++) {
    const b = document.createElement('button');
    b.innerHTML = '<i></i>';
    b.title = 'محاذاة';
    b.addEventListener('click', () => alignLayer(l, gx, gy));
    grid.appendChild(b);
  }
  insp.appendChild(hRow('محاذاة سريعة للوحة', grid));

  // ترتيب الطبقة
  const ord = document.createElement('div');
  ord.className = 'i-btns';
  const bTop = mkMini('الأمام', () => setZ(l, 'top'));
  const bUp = mkMini('فوق', () => moveLayer(l, +1));
  const bDn = mkMini('تحت', () => moveLayer(l, -1));
  const bBot = mkMini('الخلف', () => setZ(l, 'bottom'));
  ord.append(bTop, bUp, bDn, bBot);
  insp.appendChild(hRow('ترتيب الطبقة', ord));

  // إجراءات
  const act = document.createElement('div');
  act.className = 'i-btns';
  const dup = document.createElement('button');
  dup.className = 'btn mini'; dup.textContent = 'تكرار';
  dup.addEventListener('click', () => duplicateLayer(l));
  const del = document.createElement('button');
  del.className = 'btn danger'; del.textContent = 'حذف العنصر';
  del.style.flex = '1';
  del.addEventListener('click', () => deleteLayer(l));
  act.append(dup, del);
  insp.appendChild(hRow('إجراءات', act));
}
function mkMini(t, fn) {
  const b = document.createElement('button');
  b.className = 'btn mini'; b.textContent = t;
  b.addEventListener('click', fn);
  return b;
}
function setZ(l, where) {
  mutate(() => {
    const i = state.layers.indexOf(l);
    state.layers.splice(i, 1);
    if (where === 'top') state.layers.push(l); else state.layers.unshift(l);
  });
}
function alignLayer(l, gx, gy) {
  mutate(() => {
    const { w, h } = layerSize(l);
    const bw = w * (l.scale || 1), bh = h * (l.scale || 1);
    const mX = state.canvas.w * 0.06, mY = state.canvas.h * 0.06;
    l.x = gx === 0 ? mX + bw / 2 : gx === 2 ? state.canvas.w - mX - bw / 2 : state.canvas.w / 2;
    l.y = gy === 0 ? mY + bh / 2 : gy === 2 ? state.canvas.h - mY - bh / 2 : state.canvas.h / 2;
  });
}
function duplicateLayer(l) {
  mutate(() => {
    const c = JSON.parse(JSON.stringify(l));
    c.id = uid();
    c.name += ' ⠂نسخة';
    c.x += 30; c.y += 30;
    state.layers.push(c);
    selectedId = c.id;
  });
}
function deleteLayer(l) {
  mutate(() => {
    state.layers = state.layers.filter(x => x.id !== l.id);
    if (selectedId === l.id) selectedId = null;
  });
  toast('تم حذف العنصر');
}

/* ================== التفاعل مع اللوحة ================== */
let drag = null;
let spaceHeld = false;

viewport.addEventListener('pointerdown', e => {
  if (e.target.closest('.rot-handle') || e.target.closest('.handle')) return;
  const layerEl = e.target.closest('.layer');

  if (e.button === 1 || (e.button === 0 && spaceHeld)) {
    drag = { mode: 'pan', sx: e.clientX, sy: e.clientY, px: view.panX, py: view.panY };
    viewport.setPointerCapture(e.pointerId);
    viewport.style.cursor = 'grabbing';
    e.preventDefault();
    return;
  }
  if (layerEl && e.button === 0) {
    const l = state.layers.find(x => x.id === layerEl.dataset.id);
    if (!l) return;
    if (selectedId !== l.id) selectLayer(l.id);
    const w0 = screenToWorld(e);
    drag = { mode: 'move', l, startX: l.x, startY: l.y, w0, saved: false };
    layerEl.classList.add('dragging');
    viewport.setPointerCapture(e.pointerId);
    e.preventDefault();
    return;
  }
  // نقرة على فراغ = إلغاء التحديد
  if (e.button === 0) { selectLayer(null); selectedId = null; renderLayersDom(); renderLayersPanel(); renderInspector(); }
});

/* مقابض التحجيم والتدوير */
layersRoot.addEventListener('pointerdown', e => {
  const hEl = e.target.closest('.handle, .rot-handle');
  if (!hEl) return;
  const layerEl = e.target.closest('.layer');
  const l = state.layers.find(x => x.id === layerEl.dataset.id);
  if (!l) return;
  const w0 = screenToWorld(e);
  const c = { x: l.x, y: l.y };
  if (hEl.dataset.h === 'rot') {
    drag = { mode: 'rotate', l, a0: Math.atan2(w0.y - c.y, w0.x - c.x), r0: l.rotation || 0, saved: false };
  } else {
    drag = { mode: 'scale', l, d0: Math.max(4, Math.hypot(w0.x - c.x, w0.y - c.y)), s0: l.scale || 1, saved: false, c };
  }
  viewport.setPointerCapture(e.pointerId);
  e.stopPropagation();
  e.preventDefault();
});

viewport.addEventListener('pointermove', e => {
  const wpt = screenToWorld(e);
  $('#coords').textContent = `X: ${Math.round(wpt.x)} · Y: ${Math.round(wpt.y)}`;
  if (!drag) return;
  e.preventDefault();

  if (drag.mode === 'pan') {
    view.panX = drag.px + (e.clientX - drag.sx);
    view.panY = drag.py + (e.clientY - drag.sy);
    applyView();
    return;
  }
  const l = drag.l;
  if (!drag.saved) { saveHistory(); drag.saved = true; }

  if (drag.mode === 'move') {
    let nx = drag.startX + (wpt.x - drag.w0.x);
    let ny = drag.startY + (wpt.y - drag.w0.y);
    const th = 9 / view.zoom;
    let gv = false, gh = false;
    if (Math.abs(nx - state.canvas.w / 2) < th) { nx = state.canvas.w / 2; gv = true; }
    if (Math.abs(ny - state.canvas.h / 2) < th) { ny = state.canvas.h / 2; gh = true; }
    l.x = Math.round(nx); l.y = Math.round(ny);
    showGuides(gv, gh);
  } else if (drag.mode === 'scale') {
    const d = Math.hypot(wpt.x - drag.c.x, wpt.y - drag.c.y);
    l.scale = clamp(drag.s0 * d / drag.d0, 0.05, 20);
  } else if (drag.mode === 'rotate') {
    const a = Math.atan2(wpt.y - l.y, wpt.x - l.x);
    let deg = drag.r0 + (a - drag.a0) * 180 / Math.PI;
    if (e.shiftKey) deg = Math.round(deg / 15) * 15;
    l.rotation = Math.round(((deg + 180) % 360 + 360) % 360 - 180);
  }
  const el = layersRoot.querySelector(`[data-id="${l.id}"]`);
  if (el) applyLayerTransform(el, l);
});

function endDrag(e) {
  if (!drag) return;
  if (drag.mode !== 'pan' && drag.saved) {
    flatCache = {};
    rebuildAll();
    scheduleAutosave();
  }
  if (drag.mode === 'pan') viewport.style.cursor = '';
  $$('.layer.dragging', layersRoot).forEach(x => x.classList.remove('dragging'));
  showGuides(false, false);
  drag = null;
}
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);

function showGuides(v, h) {
  const gv = $('#guideV'), gh = $('#guideH');
  gv.classList.toggle('show', v);
  gh.classList.toggle('show', h);
  if (v) gv.style.left = (state.canvas.w / 2) + 'px';
  if (h) gh.style.top = (state.canvas.h / 2) + 'px';
}

/* عجلة التكبير */
viewport.addEventListener('wheel', e => {
  e.preventDefault();
  const f = Math.exp(-e.deltaY * 0.0016);
  setZoom(view.zoom * f, e.clientX, e.clientY);
}, { passive: false });

/* تعديل النص بالنقر المزدوج · استبدال لقطة الجهاز */
layersRoot.addEventListener('dblclick', e => {
  const layerEl = e.target.closest('.layer');
  if (!layerEl) return;
  const l = state.layers.find(x => x.id === layerEl.dataset.id);
  if (!l) return;
  if (l.type === 'text') {
    const inner = $('.txt-inner', layerEl);
    if (!inner) return;
    inner.contentEditable = 'true';
    inner.focus();
    document.execCommand('selectAll', false, null);
    const commit = () => {
      inner.contentEditable = 'false';
      const t = inner.innerText.replace(/\n$/, '');
      if (t !== l.content) mutate(() => { l.content = t; });
    };
    inner.addEventListener('blur', commit, { once: true });
    inner.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') inner.blur();
      ev.stopPropagation();
    });
  } else if (l.type === 'device') {
    pickImage().then(img => { if (img) mutate(() => { l.imageHash = img.hash; }); });
  } else if (l.type === 'image') {
    pickImage().then(img => { if (img) mutate(() => { l.imageHash = img.hash; }); });
  }
});
/* منع الحركة أثناء تحرير النص */
layersRoot.addEventListener('pointerdown', e => {
  if (e.target.closest('[contenteditable="true"]')) e.stopPropagation();
}, true);

/* ================== لوحة المفاتيح ================== */
window.addEventListener('keydown', e => {
  const inField = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '') ||
                  document.activeElement?.isContentEditable;
  if (e.code === 'Space' && !inField) { spaceHeld = true; viewport.style.cursor = 'grab'; e.preventDefault(); }
  if (inField) return;

  const l = state.layers.find(x => x.id === selectedId);
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); downloadProject(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd' && l) { e.preventDefault(); duplicateLayer(l); return; }
  if ((e.ctrlKey || e.metaKey) && e.key === '0') { e.preventDefault(); fitView(); return; }
  if ((e.key === 'Delete' || e.key === 'Backspace') && l) { e.preventDefault(); deleteLayer(l); return; }
  if (e.key === 'Escape') selectLayer(null);
  if (l && e.key.startsWith('Arrow')) {
    e.preventDefault();
    saveHistory();
    const d = e.shiftKey ? 10 : 1;
    if (e.key === 'ArrowUp') l.y -= d;
    if (e.key === 'ArrowDown') l.y += d;
    if (e.key === 'ArrowLeft') l.x -= d;
    if (e.key === 'ArrowRight') l.x += d;
    rebuildAll();
    scheduleAutosave();
  }
});
window.addEventListener('keyup', e => {
  if (e.code === 'Space') { spaceHeld = false; viewport.style.cursor = ''; }
});

/* ================== رفع الصور ================== */
function pickFile(accept) {
  return new Promise(res => {
    const inp = $('#filePick');
    inp.value = '';
    inp.accept = accept;
    inp.onchange = () => res(inp.files[0] || null);
    inp.click();
  });
}
async function pickImage() {
  const file = await pickFile('image/*');
  if (!file) return null;
  const dataURL = await downscaleImage(file, 1800);
  const { w, h } = await imgDims(dataURL);
  const hash = storeImage(dataURL);
  await ensureImg(hash);
  toast('تم رفع الصورة');
  return { hash, nw: w, nh: h };
}
function imgDims(dataURL) {
  return new Promise(res => {
    const im = new Image();
    im.onload = () => res({ w: im.naturalWidth, h: im.naturalHeight });
    im.src = dataURL;
  });
}
/* تصغير الصور الكبيرة لتخفيف الذاكرة والحفظ */
async function downscaleImage(file, maxDim) {
  const url = await readAsDataURL(file);
  const { w, h } = await imgDims(url);
  if (Math.max(w, h) <= maxDim) return url;
  const s = maxDim / Math.max(w, h);
  const cv = document.createElement('canvas');
  cv.width = Math.round(w * s); cv.height = Math.round(h * s);
  cv.getContext('2d').drawImage(await loadImg(url), 0, 0, cv.width, cv.height);
  return cv.toDataURL('image/png');
}
function readAsDataURL(f) {
  return new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(f); });
}
function loadImg(url) {
  return new Promise(res => { const im = new Image(); im.onload = () => res(im); im.src = url; });
}

/* ================== أزرار الإضافة ================== */
$('#addDevice').addEventListener('click', async () => {
  const d = makeDevice();
  mutate(() => { state.layers.push(d); selectedId = d.id; });
  toast('أُضيف هاتف — اختر لقطة الشاشة');
  const img = await pickImage();
  if (img) mutate(() => { d.imageHash = img.hash; });
});
$('#addText').addEventListener('click', () => {
  const t = makeText();
  mutate(() => { state.layers.push(t); selectedId = t.id; });
  toast('أُضيف نص — انقر عليه مرتين للتحرير');
});
$('#addImage').addEventListener('click', async () => {
  const img = await pickImage();
  if (!img) return;
  const layer = makeImageLayer(img.nw, img.nh, img.hash);
  mutate(() => { state.layers.push(layer); selectedId = layer.id; });
});

/* ================== إعدادات اللوحة ================== */
const presetSel = $('#canvasPreset');
CANVAS_PRESETS.forEach(([id, label]) => {
  const o = document.createElement('option');
  o.value = id; o.textContent = label;
  presetSel.appendChild(o);
});
presetSel.addEventListener('change', () => {
  const p = CANVAS_PRESETS.find(x => x[0] === presetSel.value);
  if (p && p[2]) {
    mutate(() => {
      state.canvas.w = p[2]; state.canvas.h = p[3]; state.canvas.preset = p[0];
    });
    fitView();
  }
});
function syncSizeInputs() {
  $('#cw').value = state.canvas.w;
  $('#ch').value = state.canvas.h;
  presetSel.value = state.canvas.preset || 'custom';
}
$('#cw').addEventListener('change', () => {
  mutate(() => { state.canvas.w = clamp(+$('#cw').value || 100, 200, 6000); state.canvas.preset = 'custom'; });
  syncSizeInputs(); fitView();
});
$('#ch').addEventListener('change', () => {
  mutate(() => { state.canvas.h = clamp(+$('#ch').value || 100, 200, 6000); state.canvas.preset = 'custom'; });
  syncSizeInputs(); fitView();
});

/* الخلفية */
$('#bgType').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  mutate(() => { state.canvas.bg.type = b.dataset.v; });
  syncBgInputs();
});
function syncBgInputs() {
  const t = state.canvas.bg.type;
  $$('#bgType button').forEach(b => b.classList.toggle('on', b.dataset.v === t));
  $('#bgColorBox').hidden = t !== 'color';
  $('#bgGradBox').hidden = t !== 'gradient';
  $('#bgImgBox').hidden = t !== 'image';
  $('#bgColor').value = state.canvas.bg.color;
  $('#bgG1').value = state.canvas.bg.g1;
  $('#bgG2').value = state.canvas.bg.g2;
  $('#bgAngle').value = state.canvas.bg.angle;
  $('#bgAngleVal').textContent = state.canvas.bg.angle + '°';
  $$('#bgFit button').forEach(b => b.classList.toggle('on', b.dataset.v === (state.canvas.bg.fit || 'cover')));
}
function bindBgColor(id, key) {
  const el = $(id);
  el.addEventListener('input', () => {
    if (!el.dataset.saved) { saveHistory(); el.dataset.saved = '1'; }
    state.canvas.bg[key] = el.value;
    buildArtboard();
  });
  el.addEventListener('change', () => { delete el.dataset.saved; scheduleAutosave(); });
}
bindBgColor('#bgColor', 'color');
bindBgColor('#bgG1', 'g1');
bindBgColor('#bgG2', 'g2');
$('#bgAngle').addEventListener('input', () => {
  if (!$('#bgAngle').dataset.saved) { saveHistory(); $('#bgAngle').dataset.saved = '1'; }
  state.canvas.bg.angle = +$('#bgAngle').value;
  $('#bgAngleVal').textContent = state.canvas.bg.angle + '°';
  buildArtboard();
});
$('#bgAngle').addEventListener('change', () => { delete $('#bgAngle').dataset.saved; scheduleAutosave(); });
$('#bgFit').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  mutate(() => { state.canvas.bg.fit = b.dataset.v; });
  syncBgInputs();
});
$('#bgUpload').addEventListener('click', async () => {
  const img = await pickImage();
  if (img) mutate(() => { state.canvas.bg.imageHash = img.hash; state.canvas.bg.type = 'image'; });
  syncBgInputs();
});
{
  const box = $('#bgSwatches');
  BG_SWATCHES.forEach(c => {
    const b = document.createElement('button');
    b.style.background = c;
    b.addEventListener('click', () => { saveHistory(); state.canvas.bg.color = c; state.canvas.bg.type = 'color'; buildArtboard(); syncBgInputs(); scheduleAutosave(); });
    box.appendChild(b);
  });
  const gp = $('#gradPresets');
  GRAD_PRESETS.forEach(([a, b2]) => {
    const btn = document.createElement('button');
    btn.style.background = `linear-gradient(120deg, ${a}, ${b2})`;
    btn.addEventListener('click', () => {
      saveHistory();
      Object.assign(state.canvas.bg, { type: 'gradient', g1: a, g2: b2 });
      buildArtboard(); syncBgInputs(); scheduleAutosave();
    });
    gp.appendChild(btn);
  });
}

/* ================== شريط الأدوات العلوي ================== */
$('#btnUndo').addEventListener('click', undo);
$('#btnRedo').addEventListener('click', redo);
$('#zoomIn').addEventListener('click', () => setZoom(view.zoom * 1.25));
$('#zoomOut').addEventListener('click', () => setZoom(view.zoom / 1.25));
$('#zoomFit').addEventListener('click', fitView);
$('#zoomRange').addEventListener('input', () => setZoom(+$('#zoomRange').value / 100));
$('#projectName').addEventListener('change', () => { state.name = $('#projectName').value.trim() || 'مشروعي'; scheduleAutosave(); });

/* قائمة التصدير */
$('#btnExport').addEventListener('click', e => {
  e.stopPropagation();
  $('#exportMenu').classList.toggle('open');
});
document.addEventListener('click', () => $('#exportMenu').classList.remove('open'));
$('#exportMenu').addEventListener('click', e => {
  const b = e.target.closest('[data-exp]');
  if (!b) return;
  const [fmt, s] = b.dataset.exp.split(',');
  exportImage(fmt, +s);
  $('#exportMenu').classList.remove('open');
});

/* ================== التصدير ================== */
async function exportImage(fmt, S) {
  toast('جاري تجهيز الصورة…');
  // تحميل الخطوط والصور الناقصة
  const fontJobs = state.layers.filter(l => l.type === 'text' && !l.hidden)
    .map(l => document.fonts.load(`${l.weight} ${l.size}px "${l.font}"`).catch(() => {}));
  const imgJobs = [...imageHashesInUse()].map(ensureImg);
  await Promise.all([...fontJobs, ...imgJobs]);

  const flatProvider = (l, s) => getFlat(l, Math.min(s, 3));
  try {
    const cv = R.exportAll(state, getImgEl, flatProvider, S);
    const mime = fmt === 'jpg' ? 'image/jpeg' : 'image/png';
    const data = cv.toDataURL(mime, 0.92);
    const a = document.createElement('a');
    const name = (state.name || 'design').replace(/[\\/:*?"<>|]/g, '-');
    a.download = `${name}-${state.canvas.w}x${state.canvas.h}@${S}x.${fmt === 'jpg' ? 'jpg' : 'png'}`;
    a.href = data;
    a.click();
    toast('✓ تم تصدير الصورة بنجاح');
  } catch (err) {
    console.error(err);
    toast('تعذر التصدير — حاول مرة أخرى');
  }
}

/* ================== حفظ/فتح المشروع ================== */
function serializeProject() {
  const used = imageHashesInUse();
  const images = {};
  used.forEach(h => { if (IMG[h]) images[h] = IMG[h].dataURL; });
  return JSON.stringify({ app: 'curve-studio', version: 1, savedAt: Date.now(), state, images });
}
function downloadProject() {
  const blob = new Blob([serializeProject()], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = (state.name || 'curve-project').replace(/[\\/:*?"<>|]/g, '-') + '.curve.json';
  a.href = URL.createObjectURL(blob);
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('✓ تم حفظ ملف المشروع');
}
$('#btnSaveProj').addEventListener('click', downloadProject);
$('#btnOpen').addEventListener('click', async () => {
  const f = await pickFile('.json,.curve.json,application/json');
  if (!f) return;
  try {
    const txt = await f.text();
    loadProject(JSON.parse(txt));
    toast('✓ تم فتح المشروع');
  } catch (err) {
    toast('ملف مشروع غير صالح');
  }
});
async function loadProject(data) {
  if (!data || !data.state || !Array.isArray(data.state.layers)) throw new Error('bad');
  Object.keys(data.images || {}).forEach(h => {
    if (!IMG[h]) IMG[h] = { dataURL: data.images[h], el: null };
  });
  await Promise.all(Object.keys(IMG).map(ensureImg));
  state = data.state;
  selectedId = null;
  past = []; future = [];
  syncHistoryBtns();
  $('#projectName').value = state.name;
  rebuildAll(); syncBgInputs(); syncSizeInputs();
  fitView();
  scheduleAutosave();
}

/* ================== الحفظ التلقائي ================== */
let autosaveT = null;
function scheduleAutosave() {
  clearTimeout(autosaveT);
  autosaveT = setTimeout(() => {
    try {
      localStorage.setItem('curve-studio.project.v1', serializeProject());
      setStatus('تم الحفظ تلقائيًا ' + new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }));
    } catch (err) {
      setStatus('تعذر الحفظ التلقائي (الحجم كبير) — احفظ المشروع كملف');
    }
  }, 900);
}
async function tryRestoreAutosave() {
  try {
    const txt = localStorage.getItem('curve-studio.project.v1');
    if (!txt) return false;
    await loadProject(JSON.parse(txt));
    setStatus('تم استرجاع آخر عمل تلقائيًا');
    return true;
  } catch (e) { return false; }
}

/* ================== أدوات عامة ================== */
let toastT = null;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
function setStatus(msg) { $('#statusMsg').textContent = msg; }

window.addEventListener('resize', applyView);

/* ================== الإقلاع ================== */
(async function init() {
  syncBgInputs(); syncSizeInputs(); syncHistoryBtns();
  const restored = await tryRestoreAutosave();
  rebuildAll();
  fitView();
  if (!restored) setStatus('جاهز — أضف هاتفًا أو نصًا للبدء');
  // إعادة رسم الأجهزة بعد تحميل الخطوط (دقة النص داخل الشاشات الفارغة)
  document.fonts.ready.then(() => { flatCache = {}; renderLayersDom(); });
})();

/* واجهة برمجية خفيفة للتصحيح والتكامل */
window.CS = {
  get state() { return state; },
  R,
  rebuild() { rebuildAll(); },
  export: (fmt, s) => exportImage(fmt, s),
};
})();
