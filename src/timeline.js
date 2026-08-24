// timeline.js — المخطط الزمني السفلي بأسلوب After Effects:
// مفاتيح Animation، قص/تمديد الطبقات، السرعة، التشغيل، وتصدير الفيديو
import { icon } from './icons.js';
import { esc, history } from './state.js';
import { PROP_GROUPS, EASES, evalProp, upsertKey, delKeysAt, moveKeysAt, ensureAnim } from './anim.js';

const LCOL = 226;      // عرض عمود أسماء الطبقات
const ROWH = 30;       // ارتفاع الصف
const FPS = 30;
const snapT = t => Math.max(0, Math.round(t * FPS) / FPS);

export function initTimeline(ctx) {
  const dock = document.getElementById('dock');
  dock.innerHTML = `
    <div id="tlHead">
      <div class="tlgroup">
        <button class="tbtn" id="tlHome" title="البداية (Home)">⏮</button>
        <button class="tbtn big" id="tlPlay" title="تشغيل/إيقاف (مسافة)">▶</button>
        <button class="tbtn" id="tlEnd" title="النهاية (End)">⏭</button>
        <button class="tbtn" id="tlLoop" title="تكرار التشغيل">⟲</button>
      </div>
      <span class="tltime" id="tlTimeLbl">0.00 / 5.00s</span>
      <div class="tlgroup">
        <label class="tlbl">سرعة المعاينة</label>
        <select id="tlRate" class="tsel mini"><option value="0.25">0.25×</option><option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="1.5">1.5×</option><option value="2">2×</option></select>
      </div>
      <div class="tlgroup">
        <label class="tlbl">المدة</label>
        <input type="number" id="tlDur" class="tsel mini" min="1" max="60" step="0.5" value="5" style="width:56px"> ث
      </div>
      <div class="tlgroup">
        <button class="tbtn ${''}" id="tlAutoK" title="المفاتيح التلقائية: أي تعديل يُسجَّل مفتاحاً عند المؤشر الزمني">● مفاتيح تلقائية</button>
      </div>
      <div class="tlgroup">
        <select id="tlEase" class="tsel mini" disabled><option value="">تخفيف المفتاح…</option>${EASES.map(e => `<option value="${e[0]}">${e[1]}</option>`).join('')}</select>
        <button class="tbtn" id="tlDelKf" disabled title="حذف المفتاح المحدد (Del)">${icon('trash', 14)} مفتاح</button>
      </div>
      <div class="tlgroup">
        <label class="tlbl">تكبير</label>
        <input type="range" id="tlZoom" min="30" max="240" value="90" style="width:90px">
      </div>
      <div class="tlspacer"></div>
      <button class="btn" id="tlVideo" title="تصدير الفيديو WebM">${icon('download')} فيديو</button>
      <button class="tbtn" id="tlCollapse" title="طي/فتح المخطط">⌄</button>
    </div>
    <div id="tlBody"><div id="tlInner"><div id="playhead"><div class="ph-head"></div></div></div></div>`;

  const body = dock.querySelector('#tlBody');
  const inner = dock.querySelector('#tlInner');
  const ph = dock.querySelector('#playhead');
  const timeLbl = dock.querySelector('#tlTimeLbl');
  const playBtn = dock.querySelector('#tlPlay');
  const easeSel = dock.querySelector('#tlEase');
  const delKfBtn = dock.querySelector('#tlDelKf');

  let px = 90;                 // بكسل لكل ثانية
  let time = 0;
  let playing = false;
  let rate = 1;
  let loop = true;
  let autoKey = false;
  let selKf = null;            // {id, gid, t}
  const expanded = new Set();

  /* ================= بناء الواجهة ================= */
  function trackW() { return Math.min(9000, Math.max(300, ctx.ws().duration * px + 40)); }

  function refresh() {
    const ws = ctx.ws();
    const W = trackW();
    const rows = [];

    // مسطرة الوقت
    rows.push(`<div class="trow ruler" style="height:26px">
      <div class="lcol rcol"><span class="rlbl">الطبقات (${ws.elements.length}) · الأمام أولاً</span></div>
      <div class="track rtrack" style="width:${W}px"><canvas id="tlRuler" width="${W}" height="26"></canvas></div>
    </div>`);

    ws.elements.forEach((el, i) => {
      const a = el.anim;
      const isIn = a ? Math.max(0, a.in ?? 0) : 0;
      const out = a ? Math.min(ws.duration, a.out ?? ws.duration) : ws.duration;
      const speed = a?.speed ?? 1;
      const exp = expanded.has(el.id);
      const sel = el.id === ctx.selectedId;
      // مفاتيح مجمّعة لكل الخصائص
      const times = new Set();
      if (a) Object.values(a.props).forEach(pr => pr.k.forEach(k => times.add(Math.round(k.t * FPS) / FPS)));
      rows.push(`<div class="trow layer ${sel ? 'sel' : ''}" data-id="${el.id}" style="height:${ROWH}px">
        <div class="lcol">
          <button class="exp" data-id="${el.id}" title="عرض الخصائص">${exp ? '▾' : '▸'}</button>
          <span class="liic ${el.type}">${el.type === 'image' ? icon('image', 13) : 'T'}</span>
          <span class="lnm" title="${esc(el.name)}">${esc(el.name)}</span>
          <select class="tsel mini spd" data-id="${el.id}" title="سرعة الطبقة">${[0.25, 0.5, 1, 1.5, 2, 3].map(s => `<option value="${s}" ${s === speed ? 'selected' : ''}>${s}×</option>`).join('')}</select>
          <button class="cb eye" data-id="${el.id}">${icon(el.visible ? 'eye' : 'eyeOff', 13)}</button>
          <button class="cb lk ${el.locked ? 'on' : ''}" data-id="${el.id}">${icon(el.locked ? 'lock' : 'unlock', 13)}</button>
        </div>
        <div class="track" data-id="${el.id}" style="width:${W}px">
          <div class="lbar ${sel ? 'sel' : ''}" style="left:${isIn * px}px;width:${Math.max(4, (out - isIn) * px)}px" title="اسحب الأطراف للقص/التمديد · اسحب الوسط للإزاحة · نقرة مزدوجة للتصفير"></div>
          ${[...times].map(t => `<div class="kfmini" style="left:${t * px}px"></div>`).join('')}
        </div>
      </div>`);

      if (exp) PROP_GROUPS.forEach(g => {
        const kts = new Set();
        if (a) g.props.forEach(p => a.props[p]?.k.forEach(k => kts.add(Math.round(k.t * FPS) / FPS)));
        const has = kts.size > 0;
        rows.push(`<div class="trow prop ${sel ? 'sel' : ''}" data-id="${el.id}" data-gid="${g.id}" style="height:${ROWH}px">
          <div class="lcol pcol">
            <button class="ksw ${has ? 'on' : ''}" data-id="${el.id}" data-gid="${g.id}" title="مفاتيح هذه الخاصية (تشغيل/إيقاف)">◉</button>
            <button class="kadd" data-id="${el.id}" data-gid="${g.id}" title="إضافة مفتاح عند المؤشر">◆+</button>
            <span class="pnm">${g.n}</span>
          </div>
          <div class="track" data-id="${el.id}" data-gid="${g.id}" style="width:${W}px">
            <div class="kline"></div>
            ${[...kts].map(t => {
              let e = 'io';
              for (const p of g.props) {
                const kk = a && a.props[p] && a.props[p].k.find(k => Math.abs(k.t - t) < 1e-3);
                if (kk) { e = kk.e || 'io'; break; }
              }
              const isSel = selKf && selKf.id === el.id && selKf.gid === g.id && Math.abs(selKf.t - t) < 1e-3;
              return `<div class="kfd ${e === 'h' ? 'hold' : ''} ${isSel ? 'sel' : ''}" style="left:${t * px}px" data-t="${t}" data-id="${el.id}" data-gid="${g.id}" title="${t.toFixed(2)}s · ${e} — نقرة مزدوجة لتغيير التخفيف"></div>`;
            }).join('')}
          </div>
        </div>`);
      });
    });

    if (!ws.elements.length) {
      rows.push(`<div class="trow layer" style="height:${ROWH}px"><div class="lcol"><span class="chipsis">لا طبقات بعد — أضف صورة أو نصاً من الأعلى</span></div><div class="track" style="width:${W}px"></div></div>`);
    }

    inner.innerHTML = rows.join('') + '<div style="height:8px"></div>';
    inner.appendChild(ph);
    drawRuler();
    bindRows();
    updatePlayhead();
  }

  function drawRuler() {
    const c = document.getElementById('tlRuler');
    if (!c) return;
    const g = c.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const line = css.getPropertyValue('--line').trim() || '#e6e6e9';
    const mut = css.getPropertyValue('--mut').trim() || '#71717a';
    g.clearRect(0, 0, c.width, c.height);
    g.fillStyle = mut; g.font = '9px Cairo, sans-serif'; g.textBaseline = 'top';
    const dur = ctx.ws().duration;
    const steps = [0.1, 0.25, 0.5, 1, 2, 5, 10];
    const step = steps.find(s => s * px >= 55) || 10;
    for (let t = 0; t <= dur + 1e-6; t += step) {
      const x = Math.round(t * px) + 0.5;
      g.strokeStyle = line;
      g.beginPath(); g.moveTo(x, 8); g.lineTo(x, 26); g.stroke();
      g.fillText((Math.round(t * 10) / 10) + 's', x + 3, 4);
      for (let h = 1; h < (step >= 1 ? step / (step / 4) : 4); h++) {
        const xx = Math.round((t + step * h / (step >= 1 ? 4 : 4)) * px) + 0.5;
        if (xx < dur * px) { g.beginPath(); g.moveTo(xx, 17); g.lineTo(xx, 26); g.stroke(); }
      }
    }
  }

  /* ================= ربط الأحداث ================= */
  function bindRows() {
    const ws = ctx.ws();
    inner.querySelectorAll('.trow.layer').forEach(row => {
      const id = row.dataset.id;
      if (!id) return;
      row.addEventListener('click', e => {
        const t = e.target;
        if (t.closest('.exp')) { t.classList.contains('exp') && 0; }
        if (t.closest('.eye')) { const el = ws.elements.find(x => x.id === id); el.visible = !el.visible; ctx.touch(el, true); return; }
        if (t.closest('.lk')) { const el = ws.elements.find(x => x.id === id); el.locked = !el.locked; ctx.touch(el, true); return; }
        if (t.closest('.spd')) return;
        if (t.closest('.exp')) return;
        if (t.closest('.lbar') || t.closest('.kfd') || t.closest('.kfmini')) { ctx.select(id); return; }
        if (t.classList.contains('track')) { ctx.select(id); return; }
        ctx.select(id);
      });
      row.addEventListener('dblclick', e => {
        if (e.target.closest('.lnm')) ctx.renameEl(id);
      });
    });
    inner.querySelectorAll('.exp').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const id = b.dataset.id;
      expanded.has(id) ? expanded.delete(id) : expanded.add(id);
      refresh();
    }));
    inner.querySelectorAll('.spd').forEach(s => s.addEventListener('change', () => {
      const el = ws.elements.find(x => x.id === s.dataset.id);
      ensureAnim(el, ws.duration); el.anim.speed = parseFloat(s.value);
      ctx.touch(el, true);
    }));
    inner.querySelectorAll('.kadd').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const el = ws.elements.find(x => x.id === b.dataset.id);
      addKeyForGroup(el, b.dataset.gid);
    }));
    inner.querySelectorAll('.ksw').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const el = ws.elements.find(x => x.id === b.dataset.id);
      toggleStopwatch(el, b.dataset.gid);
    }));
    bindTracks();
    bindKeys();
    bindBars();
  }

  function bindTracks() {
    inner.querySelectorAll('.track').forEach(tr => {
      tr.addEventListener('pointerdown', e => {
        if (e.target !== tr && e.target.tagName !== 'CANVAS') return;
        e.preventDefault();
        scrub(e);
      });
    });
  }

  function scrub(e) {
    const ws = ctx.ws();
    if (playing) setPlaying(false);
    const move = ev => setTime(snapT((ev.clientX - trackLeft(ev.target)) / px));
    move(e);
    const el0 = e.target;
    el0.setPointerCapture(e.pointerId);
    el0.addEventListener('pointermove', move);
    const up = () => { el0.removeEventListener('pointermove', move); el0.removeEventListener('pointerup', up); };
    el0.addEventListener('pointerup', up);
  }

  function trackLeft(el) {
    let n = el;
    while (n && !n.classList?.contains('track')) n = n.parentElement;
    return n ? n.getBoundingClientRect().left : 0;
  }

  function bindKeys() {
    const ws = ctx.ws();
    inner.querySelectorAll('.kfd').forEach(kf => {
      kf.addEventListener('pointerdown', e => {
        e.preventDefault(); e.stopPropagation();
        const el = ws.elements.find(x => x.id === kf.dataset.id);
        const gid = kf.dataset.gid;
        const group = PROP_GROUPS.find(g => g.id === gid);
        let fromT = parseFloat(kf.dataset.t);
        const startX = e.clientX;
        let moved = false;
        selKf = { id: el.id, gid, t: fromT };
        inner.querySelectorAll('.kfd.sel').forEach(x => x.classList.remove('sel'));
        kf.classList.add('sel');
        kf.setPointerCapture(e.pointerId);
        const move = ev => {
          const dx = ev.clientX - startX;
          if (Math.abs(dx) > 2) moved = true;
          if (!moved) return;
          const tr = kf.parentElement.getBoundingClientRect();
          let nt = snapT(Math.max(0, Math.min(ws.duration, fromT + dx / px)));
          moveKeysAt(el, group.props, fromT, nt);
          if (selKf) selKf.t = nt;
          fromT = nt;
          refreshLight(kf, nt);
        };
        const up = () => {
          kf.removeEventListener('pointermove', move);
          kf.removeEventListener('pointerup', up);
          if (moved) ctx.touch(el, true);
          updateKfSel();
        };
        kf.addEventListener('pointermove', move);
        kf.addEventListener('pointerup', up);
        updateKfSel();
      });
      kf.addEventListener('dblclick', e => {
        e.stopPropagation();
        const el = ws.elements.find(x => x.id === kf.dataset.id);
        const group = PROP_GROUPS.find(g => g.id === kf.dataset.gid);
        const t = parseFloat(kf.dataset.t);
        const cur = group.props.map(p => el.anim?.props[p]?.k.find(k => Math.abs(k.t - t) < 1e-3)?.e).find(Boolean) || 'l';
        const order = ['l', 'io', 'i', 'o', 'h', 'b'];
        const next = order[(order.indexOf(cur) + 1) % order.length];
        group.props.forEach(p => el.anim?.props[p]?.k.forEach(k => { if (Math.abs(k.t - t) < 1e-3) k.e = next; }));
        ctx.touch(el, true);
        refresh();
      });
    });
    updateKfSel();
  }

  function refreshLight(kf, t) {
    kf.style.left = t * px + 'px';
    kf.dataset.t = t;
  }

  function bindBars() {
    const ws = ctx.ws();
    inner.querySelectorAll('.lbar').forEach(bar => {
      bar.addEventListener('pointerdown', e => {
        e.preventDefault(); e.stopPropagation();
        const el = ws.elements.find(x => x.id === bar.parentElement.dataset.id);
        if (!el) return;
        ensureAnim(el, ws.duration);
        const a = el.anim;
        const r = bar.getBoundingClientRect();
        const zone = e.clientX - r.left < 8 ? 'in' : (r.right - e.clientX < 8 ? 'out' : 'mid');
        const start = { x: e.clientX, in: a.in ?? 0, out: Math.min(a.out ?? ws.duration, ws.duration) };
        bar.setPointerCapture(e.pointerId);
        const move = ev => {
          const dt = (ev.clientX - start.x) / px;
          if (zone === 'in') a.in = snapT(Math.max(0, Math.min(start.out - 0.15, start.in + dt)));
          else if (zone === 'out') a.out = snapT(Math.max(start.in + 0.15, Math.min(ws.duration, start.out + dt)));
          else {
            const w = start.out - start.in;
            a.in = snapT(Math.max(0, Math.min(ws.duration - w, start.in + dt)));
            a.out = a.in + w;
          }
          bar.style.left = a.in * px + 'px';
          bar.style.width = Math.max(4, (a.out - a.in) * px) + 'px';
        };
        const up = () => {
          bar.removeEventListener('pointermove', move);
          bar.removeEventListener('pointerup', up);
          ctx.touch(el, true);
        };
        bar.addEventListener('pointermove', move);
        bar.addEventListener('pointerup', up);
      });
      bar.addEventListener('dblclick', e => {
        e.stopPropagation();
        const el = ws.elements.find(x => x.id === bar.parentElement.dataset.id);
        if (el?.anim) { el.anim.in = 0; el.anim.out = ws.duration; ctx.touch(el, true); }
      });
    });
  }

  /* ================= عمليات المفاتيح ================= */
  function addKeyForGroup(el, gid) {
    const ws = ctx.ws();
    const group = PROP_GROUPS.find(g => g.id === gid);
    group.props.forEach(p => upsertKey(el, p, snapT(time), evalProp(el, p, time, ws)));
    ctx.touch(el, true);
    if (!expanded.has(el.id)) { expanded.add(el.id); }
    refresh();
  }

  function toggleStopwatch(el, gid) {
    const ws = ctx.ws();
    const group = PROP_GROUPS.find(g => g.id === gid);
    const has = group.props.some(p => el.anim?.props[p]?.k.length);
    if (has) {
      // إيقاف: احفظ القيمة الحالية كقيمة أساسية واحذف المفاتيح
      group.props.forEach(p => {
        const v = evalProp(el, p, time, ws);
        if (el.anim?.props[p]?.k.length) el[p] = Math.round(v * 1000) / 1000;
        if (el.anim) el.anim.props[p] = { k: [] };
      });
    } else {
      group.props.forEach(p => upsertKey(el, p, snapT(time), evalProp(el, p, time, ws)));
    }
    ctx.touch(el, true);
    refresh();
  }

  function updateKfSel() {
    const anySel = !!selKf && !!inner.querySelector(`.kfd.sel`);
    easeSel.disabled = !anySel;
    delKfBtn.disabled = !anySel;
    if (anySel) {
      const ws = ctx.ws();
      const el = ws.elements.find(x => x.id === selKf.id);
      const group = PROP_GROUPS.find(g => g.id === selKf.gid);
      const cur = group.props.map(p => el?.anim?.props[p]?.k.find(k => Math.abs(k.t - selKf.t) < 1e-3)?.e).find(Boolean);
      if (cur) easeSel.value = cur;
    }
  }

  easeSel.addEventListener('change', () => {
    if (!selKf) return;
    const ws = ctx.ws();
    const el = ws.elements.find(x => x.id === selKf.id);
    const group = PROP_GROUPS.find(g => g.id === selKf.gid);
    group.props.forEach(p => el?.anim?.props[p]?.k.forEach(k => { if (Math.abs(k.t - selKf.t) < 1e-3) k.e = easeSel.value; }));
    ctx.touch(el, true);
    refresh();
  });

  delKfBtn.addEventListener('click', () => {
    if (!selKf) return;
    const ws = ctx.ws();
    const el = ws.elements.find(x => x.id === selKf.id);
    const group = PROP_GROUPS.find(g => g.id === selKf.gid);
    delKeysAt(el, group.props, selKf.t);
    selKf = null;
    ctx.touch(el, true);
    refresh();
  });

  /* ================= النقل (Transport) ================= */
  function setTime(t) {
    const dur = ctx.ws().duration;
    time = Math.max(0, Math.min(dur, t));
    ctx.stage.time = time;
    updatePlayhead();
  }
  function updatePlayhead() {
    ph.style.left = (LCOL + time * px) + 'px';
    timeLbl.textContent = time.toFixed(2) + ' / ' + ctx.ws().duration.toFixed(2) + 's';
    playBtn.textContent = playing ? '⏸' : '▶';
  }
  function setPlaying(p) {
    playing = p;
    if (p && time >= ctx.ws().duration - 1e-3) time = 0;
    updatePlayhead();
  }
  function tick(dt) {
    if (!playing) return;
    time += dt * rate;
    const dur = ctx.ws().duration;
    if (time >= dur) {
      if (loop) time = 0;
      else { time = dur; setPlaying(false); }
    }
    ctx.stage.time = time;
    ph.style.left = (LCOL + time * px) + 'px';
    timeLbl.textContent = time.toFixed(2) + ' / ' + dur.toFixed(2) + 's';
  }

  playBtn.addEventListener('click', () => setPlaying(!playing));
  dock.querySelector('#tlHome').onclick = () => { setPlaying(false); setTime(0); };
  dock.querySelector('#tlEnd').onclick = () => { setPlaying(false); setTime(ctx.ws().duration); };
  dock.querySelector('#tlLoop').onclick = e => {
    loop = !loop;
    e.currentTarget.classList.toggle('on', loop);
  };
  dock.querySelector('#tlLoop').classList.add('on');
  dock.querySelector('#tlRate').onchange = e => { rate = parseFloat(e.target.value); };
  dock.querySelector('#tlDur').onchange = e => {
    const ws = ctx.ws();
    ws.duration = Math.max(1, Math.min(60, parseFloat(e.target.value) || 5));
    ws.elements.forEach(el => { if (el.anim) { if (el.anim.out > ws.duration) el.anim.out = ws.duration; if (el.anim.in > ws.duration - 0.15) el.anim.in = Math.max(0, ws.duration - 0.15); } });
    history.commit(ws);
    setTime(Math.min(time, ws.duration));
    refresh();
    ctx.scheduleSavePub();
  };
  dock.querySelector('#tlAutoK').onclick = e => {
    autoKey = !autoKey;
    e.currentTarget.classList.toggle('on', autoKey);
  };
  dock.querySelector('#tlZoom').oninput = e => { px = parseFloat(e.target.value); refresh(); };
  dock.querySelector('#tlVideo').onclick = () => ctx.exportVideo();
  dock.querySelector('#tlCollapse').onclick = e => {
    dock.classList.toggle('collapsed');
    e.currentTarget.textContent = dock.classList.contains('collapsed') ? '⌃' : '⌄';
  };

  // اسحب رأس المؤشر الزمني
  ph.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (playing) setPlaying(false);
    ph.setPointerCapture(e.pointerId);
    const move = ev => setTime(snapT((ev.clientX - inner.getBoundingClientRect().left - LCOL) / px));
    const up = () => { ph.removeEventListener('pointermove', move); ph.removeEventListener('pointerup', up); };
    ph.addEventListener('pointermove', move);
    ph.addEventListener('pointerup', up);
  });

  refresh();

  return {
    refresh, setTime, setPlaying, tick, updatePlayhead,
    get time() { return time; },
    get playing() { return playing; },
    get autoKey() { return autoKey; },
    get px() { return px; },
    get selKf() { return selKf; },
    set selKf(v) { selKf = v; },
    expand(id) { expanded.add(id); refresh(); },
    deleteSelKf: () => delKfBtn.click()
  };
}
