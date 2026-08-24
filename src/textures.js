// textures.js — رسم خامات البطاقات (صورة بحدود مستديرة + نص عربي/إنجليزي)
import { assets, assetOf } from './state.js';

export const TEX_Q = 22; // بكسل لكل وحدة عالمية
let fontsVersion = 0;
export function bumpFonts() { fontsVersion++; }
export function hasArabic(s) { return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(s || ''); }

const AR_FALLBACK = '"Cairo","Noto Sans Arabic","Segoe UI",Arial,sans-serif';

function rr(ctx, x, y, w, h, r) {
  r = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* -------- حجم البطاقة في العالم للصور -------- */
export function imageWorldSize(el) {
  const a = assetOf(el);
  let ar = a && a.img && a.img.width ? a.img.width / a.img.height : 1;
  if (el.aspect && el.aspect !== 'free') {
    const [pw, ph] = el.aspect.split(':').map(Number);
    if (pw && ph) ar = pw / ph;
  }
  const LONG = 76;
  return ar >= 1 ? { w: LONG, h: LONG / ar } : { w: LONG * ar, h: LONG };
}

/* -------- خامة بطاقة الصورة -------- */
export function renderImageCard(el, worldW, worldH, q = TEX_Q) {
  const a = assetOf(el);
  const W = Math.max(2, Math.round(worldW * q));
  const H = Math.max(2, Math.round(worldH * q));
  const min = Math.min(W, H);
  const R = (el.radius / 100) * min / 2;
  const bw = (el.border / 100) * min;
  const m = Math.round(el.shadow ? min * 0.13 : 2 + bw * 0.15);
  const c = document.createElement('canvas');
  c.width = W + 2 * m; c.height = H + 2 * m;
  const ctx = c.getContext('2d');
  if (el.shadow) {
    ctx.save();
    try { ctx.filter = `blur(${Math.round(min * 0.05)}px)`; } catch (e) { }
    ctx.fillStyle = 'rgba(0,0,0,0.32)';
    rr(ctx, m + min * 0.02, m + min * 0.045, W, H, R); ctx.fill();
    ctx.restore();
  }
  if (bw > 0.5) { ctx.fillStyle = el.borderColor || '#0b0b0c'; rr(ctx, m, m, W, H, R); ctx.fill(); }
  const ix = m + bw, iy = m + bw, iw = W - 2 * bw, ih = H - 2 * bw;
  ctx.save();
  rr(ctx, ix, iy, iw, ih, Math.max(0, R - bw)); ctx.clip();
  if (el.bg && el.bg !== 'transparent') { ctx.fillStyle = el.bg; ctx.fillRect(ix, iy, iw, ih); }
  if (a && a.img && a.img.complete && a.img.width) {
    const s = Math.max(iw / a.img.width, ih / a.img.height);
    const dw = a.img.width * s, dh = a.img.height * s;
    ctx.drawImage(a.img, ix + (iw - dw) / 2, iy + (ih - dh) / 2, dw, dh);
  } else {
    ctx.fillStyle = 'rgba(125,125,130,.25)'; ctx.fillRect(ix, iy, iw, ih);
  }
  ctx.restore();
  return { canvas: c, worldW: c.width / q, worldH: c.height / q };
}

/* -------- خامة النص -------- */
export function renderTextCard(el, q = TEX_Q) {
  const fs = Math.max(4, Math.round(el.fontSize * q));
  const pad = Math.round(el.fontSize * q * 0.32);
  const stroke = Math.max(0, el.strokeW * q);
  const lines = String(el.text ?? '').split('\n');
  const dir = el.dir === 'auto' ? (hasArabic(el.text) ? 'rtl' : 'ltr') : el.dir;
  const font = `${el.italic ? 'italic ' : ''}${el.weight} ${fs}px "${el.font}", ${AR_FALLBACK}`;

  // قياس أولي لتحديد أبعاد اللوحة
  const mc = document.createElement('canvas').getContext('2d');
  mc.font = font;
  try { mc.letterSpacing = (el.spacing * q) + 'px'; } catch (e) { }
  mc.direction = dir;
  const widths = lines.map(L => mc.measureText(L || ' ').width);
  const maxW = Math.max(8, ...widths);
  const lineH = fs * el.lineHeight;
  const W = Math.ceil(maxW + 2 * pad + 2 * stroke + 8);
  const H = Math.ceil(lines.length * lineH + 2 * pad + 2 * stroke + 4);

  const c = document.createElement('canvas');
  c.width = Math.min(W, 4096); c.height = Math.min(H, 4096);
  const ctx = c.getContext('2d');
  ctx.font = font;
  try { ctx.letterSpacing = (el.spacing * q) + 'px'; } catch (e) { }
  ctx.direction = dir;
  ctx.textBaseline = 'middle';

  // خلفية النص (كبسولة)
  if (el.textBg && el.textBg !== 'transparent') {
    ctx.fillStyle = el.textBg;
    const rad = (el.radius / 100) * Math.min(c.width, c.height) / 2;
    rr(ctx, stroke, stroke, c.width - 2 * stroke, c.height - 2 * stroke, rad);
    ctx.fill();
  }

  let align, tx;
  if (el.align === 'center') { align = 'center'; tx = c.width / 2; }
  else if ((el.align === 'start' && dir === 'rtl') || (el.align === 'end' && dir === 'ltr')) { align = 'right'; tx = c.width - pad - stroke; }
  else { align = 'left'; tx = pad + stroke; }
  ctx.textAlign = align;

  lines.forEach((L, i) => {
    const y = pad + stroke + lineH * (i + 0.5);
    if (stroke > 0) {
      ctx.lineJoin = 'round'; ctx.miterLimit = 2;
      ctx.lineWidth = stroke * 2; ctx.strokeStyle = el.strokeColor || '#fff';
      ctx.strokeText(L || ' ', tx, y);
    }
    ctx.fillStyle = el.color || '#141414';
    ctx.fillText(L || ' ', tx, y);
  });

  ensureFont(el);
  return { canvas: c, worldW: c.width / q, worldH: c.height / q };
}

function ensureFont(el) {
  try {
    if (!document.fonts) return;
    const spec = `${el.weight} 32px "${el.font}"`;
    if (!document.fonts.check(spec, el.text || 'أب')) {
      document.fonts.load(spec, el.text || 'أبجد').then(() => bumpFonts()).catch(() => { });
    }
  } catch (e) { }
}

/* -------- مفتاح الخامة (يعيد الرسم فقط عند التغيير) -------- */
export function textureKey(el, quality) {
  if (el.type === 'image') {
    const a = assetOf(el);
    const dims = a && a.img && a.img.width ? a.img.width + 'x' + a.img.height : '0';
    return JSON.stringify(['img', quality, el.assetId, dims, el.aspect, el.radius, el.border, el.borderColor, el.bg, el.shadow]);
  }
  return JSON.stringify(['txt', quality, fontsVersion, el.text, el.font, el.fontSize, el.weight, el.italic, el.spacing, el.lineHeight, el.align, el.dir, el.color, el.strokeW, el.strokeColor, el.textBg, el.radius]);
}

/* -------- خلفية بيئة العمل -------- */
export function bgStyle(bg) {
  if (!bg) return { css: '#ffffff', transparent: false };
  if (bg.type === 'transparent') return { css: '', transparent: true };
  if (bg.type === 'gradient') {
    return { css: `linear-gradient(${bg.angle || 135}deg, ${bg.from}, ${bg.to})`, transparent: false };
  }
  return { css: bg.color || '#ffffff', transparent: false };
}
