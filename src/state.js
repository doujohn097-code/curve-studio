// state.js — الحالة، العناصر، الأصول، التاريخ (تراجع/إعادة)، التخزين المحلي

let _seq = 1;
export function uid(p = 'e') { return p + (_seq++) + '-' + Math.random().toString(36).slice(2, 6); }
export function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

/* ---------------- الأصول (الصور) ---------------- */
export const assets = new Map(); // id -> {id, src, img, thumb}
let _aseq = 1;
export function addAsset(src) {
  const id = 'a' + (_aseq++) + '-' + Math.random().toString(36).slice(2, 6);
  const img = new Image();
  const rec = { id, src, img, thumb: null };
  assets.set(id, rec);
  img.onload = () => { rec.thumb = makeThumb(img); }; // تغيّر أبعاد الصورة سيجدد الخامة تلقائياً عبر مفتاح الخامة
  img.onerror = () => { rec.error = true; };
  img.src = src;
  return id;
}
function makeThumb(img) {
  try {
    const c = document.createElement('canvas'); const s = 72;
    c.width = s; c.height = s;
    const x = c.getContext('2d');
    const r = Math.max(s / img.width, s / img.height);
    const w = img.width * r, h = img.height * r;
    x.drawImage(img, (s - w) / 2, (s - h) / 2, w, h);
    return c.toDataURL('image/png');
  } catch (e) { return null; }
}
export function assetOf(el) { return el && el.assetId ? assets.get(el.assetId) : null; }

/* ---------------- الحالة العامة ---------------- */
export const state = {
  workspaces: [],
  activeId: null,
  ui: { tool: 'move', theme: 'light', grid: true, autoRotate: false }
};
export function activeWs() { return state.workspaces.find(w => w.id === state.activeId) || null; }

/* ---------------- مصانع ---------------- */
export function makeWorkspace(name = 'مشروع جديد') {
  return {
    id: uid('w'), name,
    w: 1080, h: 1350, duration: 5,
    bg: { type: 'color', color: '#ffffff', from: '#ffffff', to: '#e9e9ec', angle: 135 },
    elements: []
  };
}
const baseElement = () => ({
  id: uid('t'), type: 'text', name: 'عنصر',
  visible: true, locked: false,
  x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: 0, scale: 1, opacity: 1,
  bendX: 0, bendY: 0, twist: 0, waveAmp: 0, waveCount: 1.5,
  radius: 12, border: 0, borderColor: '#0b0b0c', shadow: false, bg: 'transparent'
});
export function defaultTextElement(n = 1) {
  return {
    ...baseElement(), type: 'text', name: 'نص ' + n,
    text: 'اكتب نصك هنا', font: 'Cairo', fontSize: 36, weight: 700, italic: false,
    spacing: 0, lineHeight: 1.25, align: 'center', dir: 'auto',
    color: '#141414', strokeW: 0, strokeColor: '#ffffff', textBg: 'transparent', radius: 30
  };
}
export function defaultImageElement(assetId, n = 1) {
  return {
    ...baseElement(), type: 'image', name: 'صورة ' + n,
    assetId, aspect: 'free', radius: 14, bendX: 30, bg: 'transparent'
  };
}

/* ---------------- تسلسل / استنساخ ---------------- */
const strip = (k, v) => (k && k[0] === '_' ? undefined : v);
export function serialize(ws) { return JSON.stringify({ name: ws.name, w: ws.w, h: ws.h, bg: ws.bg, elements: ws.elements }, strip); }
export function applySnapshot(ws, json) {
  const o = JSON.parse(json);
  ws.name = o.name; ws.w = o.w; ws.h = o.h; ws.bg = o.bg; ws.elements = o.elements;
}

/* ---------------- التاريخ: تراجع/إعادة لكل بيئة عمل ---------------- */
const stacks = new Map(); // wsId -> {u:[], r:[], pending}
function stackOf(ws) {
  if (!stacks.has(ws.id)) stacks.set(ws.id, { u: [], r: [], pending: serialize(ws) });
  return stacks.get(ws.id);
}
export const history = {
  touch(ws) { stackOf(ws); },
  commit(ws) {
    const s = stackOf(ws); const now = serialize(ws);
    if (now === s.pending) return;
    s.u.push(s.pending); if (s.u.length > 50) s.u.shift();
    s.r.length = 0; s.pending = now;
  },
  undo(ws) {
    const s = stackOf(ws); if (!s.u.length) return false;
    s.r.push(serialize(ws)); applySnapshot(ws, s.u.pop()); s.pending = serialize(ws); return true;
  },
  redo(ws) {
    const s = stackOf(ws); if (!s.r.length) return false;
    s.u.push(serialize(ws)); applySnapshot(ws, s.r.pop()); s.pending = serialize(ws); return true;
  },
  canUndo(ws) { const s = stacks.get(ws.id); return !!s && s.u.length > 0; },
  canRedo(ws) { const s = stacks.get(ws.id); return !!s && s.r.length > 0; }
};

/* ---------------- التخزين المحلي ---------------- */
const LS_KEY = 'curve-studio.v1';
export const storage = {
  save() {
    try {
      const usedAssets = {};
      for (const w of state.workspaces) for (const el of w.elements) if (el.assetId && assets.has(el.assetId)) usedAssets[el.assetId] = assets.get(el.assetId).src;
      const data = {
        v: 1, activeId: state.activeId, ui: { theme: state.ui.theme },
        workspaces: state.workspaces.map(w => JSON.parse(serialize(w))),
        assets: usedAssets
      };
      localStorage.setItem(LS_KEY, JSON.stringify(data));
      return true;
    } catch (e) { return false; }
  },
  load() {
    try {
      const raw = localStorage.getItem(LS_KEY); if (!raw) return null;
      const d = JSON.parse(raw); if (!d || !Array.isArray(d.workspaces) || !d.workspaces.length) return null;
      for (const [id, src] of Object.entries(d.assets || {})) {
        if (typeof src === 'string' && src.startsWith('data:image')) {
          const img = new Image(); const rec = { id, src, img, thumb: null };
          assets.set(id, rec);
          img.onload = () => { rec.thumb = makeThumb(img); };
          img.src = src;
        }
      }
      state.workspaces = d.workspaces;
      state.activeId = d.activeId && state.workspaces.some(w => w.id === d.activeId) ? d.activeId : state.workspaces[0].id;
      // توحيد الحقول بين الإصدارات
      state.workspaces.forEach(w => {
        if (!w.duration || !isFinite(w.duration)) w.duration = 5;
        if (!w.bg) w.bg = { type: 'color', color: '#ffffff', from: '#ffffff', to: '#e9e9ec', angle: 135 };
        w.elements = (w.elements || []).map(el => ({ ...el }));
      });
      if (d.ui && d.ui.theme) state.ui.theme = d.ui.theme;
      return d;
    } catch (e) { return null; }
  },
  clear() { try { localStorage.removeItem(LS_KEY); } catch (e) { } }
};
