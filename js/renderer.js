/* ============================================================
   Curve Studio — محرك الرسم
   يرسم الهواتف (إطار + لقطة + وهج + ظل) على Canvas مسطّحة،
   ثم يُسقطها بمنظور ثلاثي الأبعاد عبر تحويل إسقاطي (Homography)
   ليطابق معاينة CSS تمامًا. يُستخدم للمعاينة والتصدير معًا.
   ============================================================ */
window.CSRender = (() => {
  'use strict';

  const rad = d => d * Math.PI / 180;

  /* ---------- أدوات ألوان ---------- */
  function hexToRgb(hex) {
    let h = (hex || '#000000').replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const n = parseInt(h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function mix(hex, target, amt) {
    const a = hexToRgb(hex), b = hexToRgb(target);
    const m = (x, y) => Math.round(x + (y - x) * amt);
    return `rgb(${m(a.r, b.r)},${m(a.g, b.g)},${m(a.b, b.b)})`;
  }
  const lighten = (hex, amt) => mix(hex, '#ffffff', amt);
  const darken  = (hex, amt) => mix(hex, '#000000', amt);
  const withAlpha = (hex, a) => {
    const c = hexToRgb(hex);
    return `rgba(${c.r},${c.g},${c.b},${a})`;
  };

  function roundedRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ---------- مواصفات الإطارات ---------- */
  const FRAMES = {
    iphone:  { ratio: 2.06, bezel: 0.033, outerR: 0.150, screenR: 0.118, notch: 'island',  buttons: 'iphone'  },
    android: { ratio: 2.10, bezel: 0.028, outerR: 0.115, screenR: 0.098, notch: 'hole',    buttons: 'android' },
    minimal: { ratio: 2.06, bezel: 0.022, outerR: 0.110, screenR: 0.094, notch: null,      buttons: null      },
  };
  const frameOf = l => FRAMES[l.frame] || FRAMES.iphone;

  /* ---------- رسم الجهاز مسطّحًا (يشمل الظل) ----------
     layer: طبقة الجهاز. img: عنصر صورة اللقطة أو null.
     S: مقياس الدقة. يعيد { canvas, cssW, cssH, pad } */
  function drawDeviceFlat(layer, img, S) {
    const f = frameOf(layer);
    const w = layer.width;
    const h = w * f.ratio;
    const sh = layer.shadow || { on: true, blur: 60, alpha: .4, y: 30 };
    const pad = sh.on ? Math.ceil(sh.blur * 1.9 + Math.abs(sh.y) + 14) : 12;

    const cssW = w + pad * 2, cssH = h + pad * 2;
    const cv = document.createElement('canvas');
    cv.width  = Math.max(2, Math.round(cssW * S));
    cv.height = Math.max(2, Math.round(cssH * S));
    const ctx = cv.getContext('2d');
    ctx.setTransform(S, 0, 0, S, 0, 0);
    ctx.translate(pad, pad);

    const fc = layer.frameColor || '#15181e';

    /* --- الظل --- */
    if (sh.on) {
      ctx.save();
      ctx.shadowColor = `rgba(0,0,0,${sh.alpha})`;
      ctx.shadowBlur = sh.blur * S;        // الظل لا يتأثر بمصفوفة التحويل
      ctx.shadowOffsetY = sh.y * S;
      roundedRect(ctx, 0, 0, w, h, w * f.outerR);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fill();
      ctx.restore();
    }

    /* --- أزرار جانبية (قبل الجسم لتبرز خلف الحواف قليلًا) --- */
    const bw = Math.max(1.6, w * 0.011);
    ctx.fillStyle = darken(fc, .32);
    if (f.buttons === 'iphone') {
      const btn = (side, y, len) => {
        const x = side === 'l' ? -bw + 1.2 : w - 1.2;
        roundedRect(ctx, x, y, bw, len, bw / 2); ctx.fill();
      };
      btn('l', h * 0.155, h * 0.034);       // كتم
      btn('l', h * 0.235, h * 0.062);       // صوت +
      btn('l', h * 0.312, h * 0.062);       // صوت -
      btn('r', h * 0.262, h * 0.104);       // طاقة
    } else if (f.buttons === 'android') {
      const btn = (y, len) => {
        roundedRect(ctx, w - 1.2, y, bw, len, bw / 2); ctx.fill();
      };
      btn(h * 0.185, h * 0.125);
      btn(h * 0.325, h * 0.082);
    }

    /* --- جسم الهاتف المعدني --- */
    const bodyGrad = ctx.createLinearGradient(0, 0, w, h);
    bodyGrad.addColorStop(0, lighten(fc, .28));
    bodyGrad.addColorStop(.45, fc);
    bodyGrad.addColorStop(1, darken(fc, .22));
    roundedRect(ctx, 0, 0, w, h, w * f.outerR);
    ctx.fillStyle = bodyGrad;
    ctx.fill();
    // حافة لامعة خفيفة
    ctx.save();
    roundedRect(ctx, 0.8, 0.8, w - 1.6, h - 1.6, w * f.outerR - 1);
    ctx.strokeStyle = 'rgba(255,255,255,.22)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    /* --- منطقة الشاشة --- */
    const bz = w * f.bezel;
    const sx = bz, sy = bz, sw = w - bz * 2, shh = h - bz * 2;
    const sr = w * f.screenR;
    ctx.save();
    roundedRect(ctx, sx, sy, sw, shh, sr);
    ctx.clip();
    ctx.fillStyle = '#05070b';
    ctx.fillRect(sx, sy, sw, shh);

    if (img && img.complete && img.naturalWidth) {
      drawFit(ctx, img, sx, sy, sw, shh, layer.fit || 'cover');
    } else {
      // شاشة فارغة — دعوة لرفع لقطة
      const pg = ctx.createLinearGradient(sx, sy, sx + sw, sy + shh);
      pg.addColorStop(0, '#1b2431');
      pg.addColorStop(1, '#0c1119');
      ctx.fillStyle = pg;
      ctx.fillRect(sx, sy, sw, shh);
      ctx.fillStyle = 'rgba(255,255,255,.5)';
      ctx.strokeStyle = 'rgba(255,255,255,.55)';
      ctx.lineWidth = 1.6;
      const icw = sw * 0.16, icx = sx + sw / 2 - icw / 2, icy = sy + shh / 2 - icw * 0.95;
      roundedRect(ctx, icx, icy, icw, icw * 1.9, icw * 0.28);
      ctx.stroke();
      ctx.font = `500 ${Math.max(10, sw * 0.045)}px Tajawal, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('اضغط لرفع لقطة الشاشة', sx + sw / 2, icy + icw * 1.9 + sw * 0.09);
    }

    /* الوهج الزجاجي فوق الشاشة */
    const gl = ctx.createLinearGradient(sx, sy, sx + sw * .7, sy + shh);
    gl.addColorStop(0, 'rgba(255,255,255,.10)');
    gl.addColorStop(.22, 'rgba(255,255,255,.025)');
    gl.addColorStop(.55, 'rgba(255,255,255,0)');
    gl.addColorStop(1, 'rgba(255,255,255,.045)');
    ctx.fillStyle = gl;
    ctx.fillRect(sx, sy, sw, shh);
    ctx.restore();

    /* --- النتوء / الكاميرا --- */
    if (f.notch === 'island') {
      const iw = sw * 0.30, ih = shh * 0.043;
      const ix = w / 2 - iw / 2, iy = sy + shh * 0.014;
      ctx.fillStyle = '#000';
      roundedRect(ctx, ix, iy, iw, ih, ih / 2);
      ctx.fill();
      const camR = ih * 0.30;
      const camX = ix + iw * 0.72, camY = iy + ih / 2;
      const cg = ctx.createRadialGradient(camX - camR * .3, camY - camR * .3, camR * .1, camX, camY, camR);
      cg.addColorStop(0, '#2b3a52');
      cg.addColorStop(.7, '#0a0f16');
      cg.addColorStop(1, '#000');
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(camX, camY, camR, 0, Math.PI * 2); ctx.fill();
    } else if (f.notch === 'hole') {
      const hr = sw * 0.032;
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(w / 2, sy + shh * 0.022 + hr, hr, 0, Math.PI * 2); ctx.fill();
      const cg = ctx.createRadialGradient(w / 2 - hr * .25, sy + shh * 0.022 + hr * .75, hr * .1, w / 2, sy + shh * 0.022 + hr, hr * .8);
      cg.addColorStop(0, '#24344c');
      cg.addColorStop(1, '#000');
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(w / 2, sy + shh * 0.022 + hr, hr * .8, 0, Math.PI * 2); ctx.fill();
    }

    return { canvas: cv, cssW, cssH, pad };
  }

  /* ملاءمة صورة داخل مستطيل: cover / contain / fill */
  function drawFit(ctx, img, x, y, w, h, fit) {
    const iw = img.naturalWidth, ih = img.naturalHeight;
    if (fit === 'fill') { ctx.drawImage(img, x, y, w, h); return; }
    const s = fit === 'contain' ? Math.min(w / iw, h / ih) : Math.max(w / iw, h / ih);
    const dw = iw * s, dh = ih * s;
    if (fit === 'contain') {
      ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
    } else {
      const sw2 = w / s, sh2 = h / s;
      ctx.drawImage(img, (iw - sw2) / 2, (ih - sh2) / 2, sw2, sh2, x, y, w, h);
    }
  }

  /* ---------- الإسقاط المنظوري (يطابق CSS perspective) ----------
     CSS: transform: perspective(p) rotateX(ax) rotateY(ay)
     v' = P · Rx · Ry · v  — الإحداثيات حول مركز العنصر */
  function projectCorners(hw, hh, ax, ay, p) {
    const tX = rad(ax), tY = rad(ay);
    const cx = Math.cos(tX), sx = Math.sin(tX);
    const cy = Math.cos(tY), sy = Math.sin(tY);
    const pts = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map(([x, y]) => {
      // Ry
      const x1 = cy * x, z1 = -sy * x;
      // Rx
      const y2 = cx * y - sx * z1, z2 = sx * y + cx * z1;
      // منظور
      const w = 1 - z2 / p;
      return { x: x1 / w, y: y2 / w };
    });
    return pts;
  }

  /* حل مصفوفة Homography من 4 نقاط (مصدر → وجهة) */
  function computeH(src, dst) {
    const A = [], b = [];
    for (let i = 0; i < 4; i++) {
      const { x, y } = src[i], { x: u, y: v } = dst[i];
      A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.push(u);
      A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); b.push(v);
    }
    // إقصاء غاوسي
    for (let c = 0; c < 8; c++) {
      let p = c;
      for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
      [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
      const d = A[c][c] || 1e-12;
      for (let r = 0; r < 8; r++) {
        if (r === c) continue;
        const f = A[r][c] / d;
        for (let k = c; k < 8; k++) A[r][k] -= f * A[c][k];
        b[r] -= f * b[c];
      }
    }
    return b.map((v, i) => v / (A[i][i] || 1e-12));
  }
  const applyH = (h, x, y) => {
    const w = h[6] * x + h[7] * y + 1;
    return { x: (h[0] * x + h[1] * y + h[2]) / w, y: (h[3] * x + h[4] * y + h[5]) / w };
  };

  /* رسم الـ canvas المسطّح على السياق الحالي مع الإمالة ثلاثية الأبعاد */
  function drawTilted(ctx, flat, tiltX, tiltY, S) {
    const { canvas, cssW, cssH } = flat;
    const hw = cssW / 2, hh = cssH / 2;
    if (!tiltX && !tiltY) {
      ctx.drawImage(canvas, -hw, -hh, cssW, cssH);
      return;
    }
    const dst = projectCorners(hw, hh, tiltX, tiltY, 1200);
    const src = [{ x: -hw, y: -hh }, { x: hw, y: -hh }, { x: hw, y: hh }, { x: -hw, y: hh }];
    const H = computeH(src, dst);
    ctx.imageSmoothingQuality = 'high';

    const alongX = Math.abs(Math.sin(rad(tiltX))) >= Math.abs(Math.sin(rad(tiltY)));
    const dimCss = alongX ? cssH : cssW;
    const N = Math.max(40, Math.min(320, Math.round(dimCss * S / 2.5)));

    if (alongX) {
      for (let i = 0; i < N; i++) {
        const y0 = -hh + (cssH * i) / N, y1 = -hh + (cssH * (i + 1)) / N;
        const TL = applyH(H, -hw, y0), TR = applyH(H, hw, y0), BL = applyH(H, -hw, y1);
        const sh = y1 - y0;
        ctx.save();
        ctx.transform((TR.x - TL.x) / cssW, (TR.y - TL.y) / cssW,
                      (BL.x - TL.x) / sh, (BL.y - TL.y) / sh, TL.x, TL.y);
        const syp = ((y0 + hh) / cssH) * canvas.height;
        ctx.drawImage(canvas, 0, syp, canvas.width, Math.max(1, canvas.height / N + 1),
                      0, 0, cssW, sh + 0.4);
        ctx.restore();
      }
    } else {
      for (let i = 0; i < N; i++) {
        const x0 = -hw + (cssW * i) / N, x1 = -hw + (cssW * (i + 1)) / N;
        const TL = applyH(H, x0, -hh), TR = applyH(H, x1, -hh), BL = applyH(H, x0, hh);
        const sw = x1 - x0;
        ctx.save();
        ctx.transform((TR.x - TL.x) / sw, (TR.y - TL.y) / sw,
                      (BL.x - TL.x) / cssH, (BL.y - TL.y) / cssH, TL.x, TL.y);
        const sxp = ((x0 + hw) / cssW) * canvas.width;
        ctx.drawImage(canvas, sxp, 0, Math.max(1, canvas.width / N + 1), canvas.height,
                      0, 0, sw + 0.4, cssH);
        ctx.restore();
      }
    }
  }

  /* ---------- رسم النص ---------- */
  function drawText(ctx, layer, S) {
    const lines = String(layer.content || '').split('\n');
    const lhPx = layer.size * (layer.lh || 1.25);
    const totalH = lines.length * lhPx;
    ctx.font = `${layer.weight || 400} ${layer.size}px "${layer.font || 'Cairo'}", sans-serif`;
    try { ctx.letterSpacing = (layer.ls || 0) + 'px'; } catch (e) {}
    ctx.textBaseline = 'middle';

    // قياس الأسطر
    const widths = lines.map(t => ctx.measureText(t).width);
    const maxW = Math.max(1, ...widths);

    // خلفية النص (حبّة)
    if (layer.bgOn) {
      const padY = layer.size * 0.18, padX = layer.size * 0.42;
      roundedRect(ctx, -maxW / 2 - padX, -totalH / 2 - padY, maxW + padX * 2, totalH + padY * 2, layer.size * 0.42);
      ctx.fillStyle = layer.bgColor || '#111111';
      ctx.fill();
    }

    if (layer.shadow && layer.shadow.on) {
      ctx.shadowColor = `rgba(0,0,0,${layer.shadow.alpha ?? .5})`;
      ctx.shadowBlur = layer.size * 0.14 * S;
      ctx.shadowOffsetY = layer.size * 0.05 * S;
    }
    ctx.fillStyle = layer.color || '#111111';
    const align = layer.align || 'center';
    lines.forEach((t, i) => {
      const y = -totalH / 2 + lhPx * (i + 0.5);
      let x = 0;
      if (align === 'right') x = -maxW / 2;
      else if (align === 'left') x = maxW / 2;
      ctx.textAlign = align === 'center' ? 'center' : (align === 'right' ? 'right' : 'left');
      ctx.fillText(t, x, y);
    });
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    try { ctx.letterSpacing = '0px'; } catch (e) {}
  }

  /* ---------- رسم طبقة صورة ---------- */
  function drawImageLayer(ctx, layer, img, S) {
    const w = layer.iw, h = layer.ih;
    const sh = layer.shadow;
    ctx.save();
    if (sh && sh.on) {
      ctx.shadowColor = `rgba(0,0,0,${sh.alpha ?? .38})`;
      ctx.shadowBlur = (sh.blur ?? 50) * S;
      ctx.shadowOffsetY = (sh.y ?? 24) * S;
      roundedRect(ctx, -w / 2, -h / 2, w, h, layer.radius ?? 24);
      ctx.fillStyle = '#000';
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    }
    roundedRect(ctx, -w / 2, -h / 2, w, h, layer.radius ?? 24);
    ctx.clip();
    if (img) ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  /* ---------- رسم الخلفية ---------- */
  function drawBackground(ctx, c, bgImgEl) {
    const { w, h } = c, bg = c.bg;
    if (bg.type === 'gradient') {
      // مطابقة زاوية CSS linear-gradient
      const a = rad(bg.angle ?? 120);
      const dx = Math.sin(a), dy = -Math.cos(a);
      const half = (Math.abs(w * dx) + Math.abs(h * dy)) / 2;
      const g = ctx.createLinearGradient(w / 2 - dx * half, h / 2 - dy * half, w / 2 + dx * half, h / 2 + dy * half);
      g.addColorStop(0, bg.g1); g.addColorStop(1, bg.g2);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    } else if (bg.type === 'image' && bgImgEl && bgImgEl.complete && bgImgEl.naturalWidth) {
      ctx.fillStyle = '#0b0e13';
      ctx.fillRect(0, 0, w, h);
      drawFit(ctx, bgImgEl, 0, 0, w, h, bg.fit || 'cover');
    } else {
      ctx.fillStyle = bg.color || '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }
  }

  /* ---------- التصدير الكامل ----------
     getImg(hash) → HTMLImageElement|null , flatProvider(layer,S) → flat */
  function exportAll(state, getImg, flatProvider, S) {
    const { w, h } = state.canvas;
    const cv = document.createElement('canvas');
    cv.width = Math.round(w * S);
    cv.height = Math.round(h * S);
    const ctx = cv.getContext('2d');
    ctx.setTransform(S, 0, 0, S, 0, 0);

    drawBackground(ctx, state.canvas, state.canvas.bg.imageHash ? getImg(state.canvas.bg.imageHash) : null);

    for (const layer of state.layers) {
      if (layer.hidden) continue;
      ctx.save();
      ctx.globalAlpha = layer.opacity ?? 1;
      ctx.translate(layer.x, layer.y);
      ctx.rotate(rad(layer.rotation || 0));
      ctx.scale(layer.scale || 1, layer.scale || 1);

      if (layer.type === 'device') {
        const flat = flatProvider(layer, S);
        drawTilted(ctx, flat, layer.tiltX || 0, layer.tiltY || 0, S);
      } else if (layer.type === 'text') {
        drawText(ctx, layer, S);
      } else if (layer.type === 'image') {
        drawImageLayer(ctx, layer, getImg(layer.imageHash), S);
      }
      ctx.restore();
    }
    return cv;
  }

  return { drawDeviceFlat, drawTilted, drawText, drawImageLayer, drawBackground, drawFit, exportAll,
           roundedRect, lighten, darken, withAlpha, FRAMES, frameOf, rad };
})();
