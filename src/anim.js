// anim.js — نظام مفاتيح الحركة: تقييم، تخفيف، مجموعات الخصائص (بأسلوب After Effects)
export const ANIM_PROPS = new Set(['x', 'y', 'z', 'rotX', 'rotY', 'rotZ', 'scale', 'opacity', 'bendX', 'bendY', 'twist', 'waveAmp']);

export function ensureAnim(el, duration = 5) {
  if (!el.anim) el.anim = { in: 0, out: duration, speed: 1, props: {} };
  if (!el.anim.props) el.anim.props = {};
  return el.anim;
}

export const EASES = [
  ['l', 'خطي Linear'],
  ['i', 'دخول ناعم Ease In'],
  ['o', 'خروج ناعم Ease Out'],
  ['io', 'ناعم تماماً Ease In-Out'],
  ['h', 'ثبات Hold'],
  ['b', 'ارتداد Bounce']
];

export function easeF(f, e) {
  switch (e) {
    case 'i': return f * f * f;
    case 'o': return 1 - Math.pow(1 - f, 3);
    case 'io': return f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
    case 'h': return 0;
    case 'b': {
      const n1 = 7.5625, d1 = 2.75;
      if (f < 1 / d1) return n1 * f * f;
      if (f < 2 / d1) return n1 * (f -= 1.5 / d1) * f + 0.75;
      if (f < 2.5 / d1) return n1 * (f -= 2.25 / d1) * f + 0.9375;
      return n1 * (f -= 2.625 / d1) * f + 0.984375;
    }
    default: return f;
  }
}

/* قيمة خاصية عند زمن T (إن لم تملك مفاتيح فقيمتها الأساسية) */
export function evalProp(el, prop, T, ws) {
  const pr = el.anim && el.anim.props && el.anim.props[prop];
  if (!pr || !pr.k || !pr.k.length) return el[prop];
  const a = el.anim;
  let t = T;
  if (a.speed && a.speed !== 1 && a.in != null) t = a.in + (T - a.in) * a.speed;
  const k = pr.k;
  if (t <= k[0].t) return k[0].v;
  const last = k[k.length - 1];
  if (t >= last.t) return last.v;
  let i = 0;
  while (i < k.length - 2 && !(k[i].t <= t && t < k[i + 1].t)) i++;
  const A = k[i], B = k[i + 1];
  const span = (B.t - A.t) || 1e-6;
  const f = easeF((t - A.t) / span, B.e || A.e || 'l');
  return A.v + (B.v - A.v) * f;
}

/* ظهور الطبقة ضمن نطاقها الزمني (in/out) */
export function layerVisibleAt(el, T, ws) {
  if (!el.anim) return true;
  const dur = ws ? (ws.duration ?? 5) : 5;
  const inP = el.anim.in ?? 0;
  const out = Math.min(el.anim.out ?? dur, dur);
  return T >= inP - 1e-6 && T <= out + 1e-6;
}

/* إضافة أو تحديث مفتاح */
export function upsertKey(el, prop, t, v, e) {
  const a = ensureAnim(el);
  const arr = a.props[prop] || (a.props[prop] = { k: [] });
  const eps = 1e-3;
  let k = arr.k.find(x => Math.abs(x.t - t) < eps);
  if (k) { k.v = v; if (e) k.e = e; }
  else { k = { t, v, e: e || 'io' }; arr.k.push(k); arr.k.sort((x, y) => x.t - y.t); }
  return k;
}

export function delKeysAt(el, props, t) {
  let n = 0;
  for (const p of props) {
    const pr = el.anim?.props?.[p];
    if (!pr) continue;
    const before = pr.k.length;
    pr.k = pr.k.filter(x => Math.abs(x.t - t) > 1e-3);
    n += before - pr.k.length;
  }
  return n;
}

export function moveKeysAt(el, props, fromT, toT) {
  for (const p of props) {
    const pr = el.anim?.props?.[p];
    if (!pr) continue;
    pr.k.forEach(x => { if (Math.abs(x.t - fromT) < 1e-3) x.t = toT; });
    pr.k.sort((a, b) => a.t - b.t);
  }
}

/* مجموعات الخصائص لعرضها كصفوف في المخطط الزمني */
export const PROP_GROUPS = [
  { id: 'pos', n: 'الموضع', props: ['x', 'y'] },
  { id: 'scale', n: 'الحجم', props: ['scale'] },
  { id: 'rot', n: 'دوران Z', props: ['rotZ'] },
  { id: 'tilt', n: 'إمالة X/Y', props: ['rotX', 'rotY'] },
  { id: 'opac', n: 'الشفافية', props: ['opacity'] },
  { id: 'bend', n: 'الانحناء', props: ['bendX', 'bendY'] },
  { id: 'twist', n: 'التواء وموجة', props: ['twist', 'waveAmp'] }
];

/* انميشن جاهزة بضغطة واحدة (تُطبق على الطبقة المحددة) */
export const ANIM_PRESETS = [
  { id: 'none', n: 'بدون (حذف المفاتيح)', apply: null },
  {
    id: 'spin', n: 'دوران 360° كامل',
    apply: (el, ws, ev) => ({ rotZ: [[0, ev('rotZ')], [ws.duration, ev('rotZ') + 360]] })
  },
  {
    id: 'fadeIn', n: 'ظهور تدريجي',
    apply: (el, ws, ev) => ({ opacity: [[0, 0], [Math.min(0.8, ws.duration / 3), 1]] })
  },
  {
    id: 'flyIn', n: 'دخول من اليمين + ظهور',
    apply: (el, ws, ev) => ({
      x: [[0, ev('x') + 110], [Math.min(0.9, ws.duration / 3), ev('x')]],
      opacity: [[0, 0], [Math.min(0.9, ws.duration / 3) / 2, 1]]
    })
  },
  {
    id: 'pulse', n: 'نبض (تكبير/تصغير)',
    apply: (el, ws, ev) => {
      const d = ws.duration, s0 = ev('scale');
      return { scale: [[0, s0], [d * 0.5, s0 * 1.22], [d, s0]] };
    }
  },
  {
    id: 'sway', n: 'تمايل إمالة يمين/يسار',
    apply: (el, ws, ev) => {
      const d = ws.duration;
      return { rotY: [[0, ev('rotY') - 22], [d * 0.5, ev('rotY') + 22], [d, ev('rotY') - 22]] };
    }
  },
  {
    id: 'float', n: 'طفو لأعلى وأسفل',
    apply: (el, ws, ev) => {
      const d = ws.duration;
      return { y: [[0, ev('y')], [d * 0.5, ev('y') + 16], [d, ev('y')]] };
    }
  },
  {
    id: 'roll', n: 'لفة انحناء متحركة',
    apply: (el, ws, ev) => {
      const d = ws.duration;
      return { bendX: [[0, ev('bendX') - 60], [d * 0.5, ev('bendX') + 60], [d, ev('bendX') - 60]] };
    }
  }
];
