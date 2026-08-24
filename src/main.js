// main.js — الإقلاع، الربط، الإيماءات (فأرة/لمس/كيبورد)، الحفظ التلقائي
import * as THREE from 'three';
import { Stage } from './scene.js';
import { initUI } from './ui.js';
import { initTimeline } from './timeline.js';
import { Gizmo } from './gizmo.js';
import { ANIM_PROPS, upsertKey, evalProp } from './anim.js';
import {
  state, activeWs, assets, addAsset, storage, history, serialize,
  makeWorkspace, defaultTextElement, defaultImageElement, uid, esc
} from './state.js';
import { bgStyle } from './textures.js';
import { icon } from './icons.js';

/* ============ الإقلاع ============ */
const canvas = document.getElementById('gl');
const stageEl = document.getElementById('stage');
const frameEl = document.getElementById('frame');
const fileInput = document.getElementById('fileInput');
const stage = new Stage(canvas, stageEl);

const loaded = storage.load();
if (!loaded) {
  const ws = makeWorkspace('مشروعي الأول');
  state.workspaces = [ws];
  state.activeId = ws.id;
}
state.workspaces.forEach(w => history.touch(w));

let selectedId = null;
let replaceTarget = null;

let timeline = null, gizmo = null;

/* كتابة خاصية (مع دعم المفاتيح التلقائية للمخطط الزمني) */
function setProp(el, prop, v, live = false) {
  const ws = ctx.ws();
  const hasKeys = !!(el.anim && el.anim.props && el.anim.props[prop] && el.anim.props[prop].k.length);
  if ((hasKeys || (timeline && timeline.autoKey)) && ANIM_PROPS.has(prop)) {
    upsertKey(el, prop, Math.round((timeline ? timeline.time : 0) * 30) / 30, v);
  } else {
    el[prop] = v;
  }
  if (!live) { /* الالتزام يتم من المستدعي عبر touch */ }
}
const curVal = (el, prop) => evalProp(el, prop, stage.time, ctx.ws());

const ctx = {
  state, ws: activeWs, get selectedId() { return selectedId; },
  stage, select, touch, addText, pickImages, removeEl, duplicateEl, moveLayer, renameEl,
  newWorkspace, deleteWorkspace, renameWorkspace, switchWorkspace, setWorkspaceSize, setBg,
  undo, redo, doExport, setTool, setTheme, applyTool, applyFrame, fitView,
  replaceImage, importProject, exportProject,
  refreshPanel: () => ui.refreshPanel(),
  setProp, curVal,
  refreshDock: () => { if (timeline) timeline.refresh(); },
  isPlaying: () => !!(timeline && timeline.playing),
  exportVideo,
  scheduleSavePub: () => scheduleSave(),
  get timeline() { return timeline; }
};

const ui = initUI(ctx);
function refreshDockAll() { if (timeline) timeline.refresh(); ui.updateEmpty(); }
window.__ctx = ctx; // للتنقيح

/* ============ عمليات العناصر ============ */
function select(id) {
  selectedId = id;
  stage.setSelection(id);
  if (timeline) timeline.refresh();
  ui.refreshPanel();
}
function touch(el, commit) {
  if (commit) {
    history.commit(ctx.ws());
    scheduleSave();
    if (timeline) timeline.refresh();
    ui.updateUndoRedo();
  }
}
function addText() {
  const ws = ctx.ws();
  const n = ws.elements.filter(e => e.type === 'text').length + 1;
  const el = defaultTextElement(n);
  if (ws.elements.length) el.y = 30;
  ws.elements.unshift(el);
  history.commit(ws);
  select(el.id);
  scheduleSave(); if (ui.refreshAll) ui.refreshAll();
  ui.updateEmpty();
  ui.toast('أُضيف نص — عدّله من لوحة الخصائص');
  if (window.innerWidth < 900) document.body.classList.add('panel-open');
}
function pickImages() { replaceTarget = null; fileInput.value = ''; fileInput.click(); }
function addImageFiles(files) {
  const ws = ctx.ws();
  const imgs = [...files].filter(f => f.type && f.type.startsWith('image/'));
  if (!imgs.length) return;
  let added = 0, lastEl = null;
  imgs.forEach((f, i) => {
    const rd = new FileReader();
    rd.onload = () => {
      const assetId = addAsset(rd.result);
      const n = ws.elements.filter(e => e.type === 'image').length + 1;
      const el = defaultImageElement(assetId, n);
      if (i > 0) { el.x = (i % 3 - 1) * 26; el.y = (Math.floor(i / 3) % 3 - 1) * 22; }
      ws.elements.unshift(el);
      lastEl = el; added++;
      if (added === imgs.length) {
        history.commit(ws);
        select(lastEl.id);
        scheduleSave(); refreshDockAll();
        ui.toast('أُضيفت الصورة — اسحبها أو اضغط عليها لتعديلها');
        if (window.innerWidth < 900) document.body.classList.add('panel-open');
      }
    };
    rd.readAsDataURL(f);
  });
}
function removeEl(id) {
  const ws = ctx.ws();
  const i = ws.elements.findIndex(e => e.id === id);
  if (i < 0) return;
  ws.elements.splice(i, 1);
  if (selectedId === id) select(null);
  history.commit(ws);
  scheduleSave(); refreshDockAll();
  ui.toast('حُذف العنصر — Ctrl+Z للتراجع');
}
function duplicateEl(id) {
  const ws = ctx.ws();
  const i = ws.elements.findIndex(e => e.id === id);
  if (i < 0) return;
  const copy = JSON.parse(JSON.stringify(ws.elements[i]));
  copy.id = uid('t'); copy.name = copy.name + ' (نسخة)';
  copy.x = (copy.x || 0) + 8; copy.y = (copy.y || 0) - 8;
  ws.elements.splice(i, 0, copy);
  history.commit(ws);
  select(copy.id);
  scheduleSave(); refreshDockAll();
}
function moveLayer(id, target, mode) {
  const ws = ctx.ws();
  const i = ws.elements.findIndex(e => e.id === id);
  if (i < 0) return;
  let to = i;
  if (mode === 'index' && typeof target === 'number') to = target;
  else if (target === 'front') to = 0;
  else if (target === 'back') to = ws.elements.length - 1;
  else if (typeof target === 'number') to = target;
  to = Math.max(0, Math.min(ws.elements.length - 1, to));
  const [el] = ws.elements.splice(i, 1);
  ws.elements.splice(to, 0, el);
  history.commit(ws);
  scheduleSave(); refreshDockAll();
}
function renameEl(id) {
  const ws = ctx.ws();
  const el = ws.elements.find(e => e.id === id);
  if (!el) return;
  ui.promptModal('إعادة تسمية العنصر', 'الاسم', el.name, v => { el.name = v; history.commit(ws); scheduleSave(); refreshDockAll(); });
}
function replaceImage(id) { replaceTarget = id; fileInput.value = ''; fileInput.click(); }

fileInput.addEventListener('change', () => {
  if (replaceTarget) {
    const f = fileInput.files && fileInput.files[0];
    if (f) {
      const rd = new FileReader();
      rd.onload = () => {
        const ws = ctx.ws();
        const el = ws.elements.find(e => e.id === replaceTarget);
        if (el) { el.assetId = addAsset(rd.result); history.commit(ws); scheduleSave(); refreshDockAll(); ui.toast('تم استبدال الصورة'); }
      };
      rd.readAsDataURL(f);
    }
    replaceTarget = null;
  } else addImageFiles(fileInput.files || []);
});

/* ============ بيئات العمل ============ */
function newWorkspace() {
  const ws = makeWorkspace('مشروع ' + (state.workspaces.length + 1));
  state.workspaces.push(ws);
  state.activeId = ws.id;
  history.touch(ws);
  select(null);
  ui.refreshAll();
  applyFrame(); fitView();
  scheduleSave();
  ui.toast('أُنشئت بيئة عمل جديدة');
}
function renameWorkspace() {
  const ws = ctx.ws();
  ui.promptModal('إعادة تسمية بيئة العمل', 'الاسم', ws.name, v => {
    ws.name = v; history.commit(ws); scheduleSave(); ui.refreshHeader();
  });
}
function deleteWorkspace() {
  const ws = ctx.ws();
  ui.confirmModal('حذف بيئة العمل', `سيتم حذف «${esc(ws.name)}» بكل عناصرها. هل أنت متأكد؟`, () => {
    const i = state.workspaces.findIndex(w => w.id === ws.id);
    if (i >= 0) state.workspaces.splice(i, 1);
    if (!state.workspaces.length) { const w = makeWorkspace('مشروعي الأول'); state.workspaces = [w]; }
    state.activeId = state.workspaces[Math.min(i, state.workspaces.length - 1)].id;
    history.touch(ctx.ws());
    select(null);
    ui.refreshAll(); applyFrame(); fitView(); scheduleSave();
  });
}
function switchWorkspace(id) {
  state.activeId = id;
  history.touch(ctx.ws());
  select(null);
  ui.refreshAll(); applyFrame(); fitView();
  scheduleSave();
}
function setWorkspaceSize(w, h) {
  const ws = ctx.ws();
  ws.w = w; ws.h = h;
  history.commit(ws);
  ui.refreshHeader(); applyFrame(); fitView(); scheduleSave();
  ui.closeBoard();
}
function setBg(patch) {
  const ws = ctx.ws();
  Object.assign(ws.bg, patch);
  history.commit(ws); applyFrame(); scheduleSave();
}

/* ============ تراجع/إعادة ============ */
function undo() {
  const ws = ctx.ws();
  if (history.undo(ws)) { if (!ws.elements.some(e => e.id === selectedId)) select(null); else stage.setSelection(selectedId); ui.refreshAll(); applyFrame(); scheduleSave(); }
}
function redo() {
  const ws = ctx.ws();
  if (history.redo(ws)) { if (!ws.elements.some(e => e.id === selectedId)) select(null); else stage.setSelection(selectedId); ui.refreshAll(); applyFrame(); scheduleSave(); }
}

/* ============ التصدير ============ */
function doExport() {
  try {
    const url = stage.exportPNG(ctx.ws());
    ui.openExport(url, ctx.ws().w, ctx.ws().h);
    scheduleSave();
  } catch (e) {
    ui.toast('تعذر التصدير: ' + e.message);
  }
}
function exportProject() {
  const used = {};
  for (const w of state.workspaces) for (const el of w.elements) if (el.assetId && assets.has(el.assetId)) used[el.assetId] = assets.get(el.assetId).src;
  const data = { app: 'curve-studio', v: 1, activeId: state.activeId, workspaces: state.workspaces.map(w => JSON.parse(serialize(w))), assets: used };
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'curve-studio-project.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  ui.toast('صُدّر ملف المشروع');
}
function importProject() {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'application/json,.json';
  inp.onchange = () => {
    const f = inp.files && inp.files[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const d = JSON.parse(rd.result);
        if (!d || !Array.isArray(d.workspaces)) throw new Error('ملف غير صالح');
        for (const [oldId, src] of Object.entries(d.assets || {})) {
          if (assets.has(oldId)) continue;
          const newId = addAsset(src);
          const rec = assets.get(newId);
          assets.delete(newId);
          rec.id = oldId;
          assets.set(oldId, rec);
        }
        state.workspaces = d.workspaces;
        state.activeId = d.activeId || state.workspaces[0].id;
        state.workspaces.forEach(w => history.touch(w));
        select(null);
        ui.refreshAll(); applyFrame(); fitView(); scheduleSave();
        ui.toast('استُورد المشروع بنجاح');
      } catch (e) { ui.toast('فشل الاستيراد: ' + e.message); }
    };
    rd.readAsText(f);
  };
  inp.click();
}


/* ============ تصدير فيديو WebM (بمعدل 30 إطاراً/ث وبزمن حقيقي) ============ */
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function exportVideo() {
  const ws = ctx.ws();
  if (!('MediaRecorder' in window) || !HTMLCanvasElement.prototype.captureStream) {
    ui.toast('المتصفح لا يدعم تصدير الفيديو — استخدم حفظ الصورة PNG');
    return;
  }
  const W = ws.w, H = ws.h;
  const comp = document.createElement('canvas');
  comp.width = W; comp.height = H;
  const c2 = comp.getContext('2d');
  const canReq = typeof comp.captureStream === 'function';
  const stream = comp.captureStream(canReq ? 0 : 30);
  const track = stream.getVideoTracks()[0];
  let mime = 'video/webm;codecs=vp9';
  if (!MediaRecorder.isTypeSupported(mime)) mime = 'video/webm';
  if (!MediaRecorder.isTypeSupported(mime)) { ui.toast('المتصفح لا يدعم WebM'); return; }
  const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 12000000 });
  const chunks = [];
  rec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
  const done = new Promise(r => { rec.onstop = r; });

  const prevSel = selectedId;
  select(null);
  const wasPlaying = timeline.playing;
  timeline.setPlaying(false);
  const prevTime = timeline.time;

  const pr = stage.renderer.getPixelRatio();
  const camA = stage.camera.aspect;
  stage.renderer.setPixelRatio(1);
  stage.renderer.setSize(W, H, false);
  stage.camera.aspect = W / H;
  stage.camera.updateProjectionMatrix();

  const fillBg = () => {
    if (ws.bg.type === 'color') c2.fillStyle = ws.bg.color;
    else if (ws.bg.type === 'gradient') {
      const a = ((ws.bg.angle || 135) - 90) * Math.PI / 180;
      const cx = W / 2, cy = H / 2, len = Math.abs(W * Math.cos(a)) + Math.abs(H * Math.sin(a));
      const g = c2.createLinearGradient(cx - Math.cos(a) * len / 2, cy - Math.sin(a) * len / 2, cx + Math.cos(a) * len / 2, cy + Math.sin(a) * len / 2);
      g.addColorStop(0, ws.bg.from); g.addColorStop(1, ws.bg.to);
      c2.fillStyle = g;
    } else c2.fillStyle = '#ffffff';
    c2.fillRect(0, 0, W, H);
  };

  const fps = 30, dt = 1 / fps;
  const dur = ws.duration;
  const toastEl = ui.toast('⏺ جاري تصدير الفيديو… 0%', (dur + 4) * 1000);

  rec.start(250);
  const t0 = performance.now();
  let f = 0;
  try {
    for (; f / fps <= dur + 1e-6; f++) {
      const t = Math.min(f * dt, dur);
      stage.time = t;
      stage.syncAll(ws);
      stage.render();
      fillBg();
      c2.drawImage(stage.renderer.domElement, 0, 0, W, H);
      if (canReq && track.requestFrame) track.requestFrame();
      if (toastEl && f % 10 === 0) toastEl.textContent = '⏺ جاري تصدير الفيديو… ' + Math.round(t / dur * 100) + '%';
      const target = t0 + ((f + 1) * 1000 / fps);
      await sleep(Math.max(0, target - performance.now()));
    }
  } catch (err) {
    ui.toast('خطأ أثناء التصدير: ' + err.message);
  }
  rec.stop();
  await done;

  stage.renderer.setPixelRatio(pr);
  stage.resize(stage.stageW, stage.stageH);
  stage.camera.aspect = camA;
  stage.camera.updateProjectionMatrix();
  timeline.setTime(prevTime);
  if (wasPlaying) timeline.setPlaying(true);
  if (prevSel) select(prevSel);
  if (toastEl) toastEl.remove();

  const blob = new Blob(chunks, { type: mime });
  const url = URL.createObjectURL(blob);
  const name = (ws.name || 'design') + '-' + W + 'x' + H + '.webm';
  ui.modal({
    title: 'الفيديو جاهز — ' + (blob.size / 1048576).toFixed(1) + 'MB', wide: true,
    body: `<div class="exwrap"><video src="${url}" controls style="max-width:100%;max-height:46dvh;border-radius:8px;background:#000"></video>
      <p class="mini-h">صيغة WebM (${W}×${H} · ${dur.toFixed(1)}ث · 30fps) — تعمل في كل المتصفحات والمواقع، ويمكن تحويلها MP4 بأي أداة.</p></div>`,
    buttons: [
      { label: 'إغلاق', onClick: c => { c(); URL.revokeObjectURL(url); } },
      { label: 'تنزيل الفيديو', primary: true, onClick: () => { const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); } }
    ]
  });
}

/* ============ الأدوات والثيم والإطار ============ */
function setTool(t) { state.ui.tool = t; ui.refreshTool(); }
function applyTool() {
  stage.controls.autoRotate = !!state.ui.autoRotate;
}
function setTheme(t) {
  state.ui.theme = t;
  document.documentElement.dataset.theme = t;
  stage.setTheme(t === 'dark');
  ui.refreshHeader();
  scheduleSave();
}
function fitView() { stage.fit(ctx.ws()); }
function applyFrame() {
  const ws = ctx.ws();
  const b = bgStyle(ws.bg);
  frameEl.classList.toggle('checker', b.transparent);
  frameEl.style.background = b.transparent ? '' : b.css;
  frameEl.classList.toggle('dots', !!state.ui.grid);
  updateFrameSize();
}
function updateFrameSize() {
  const r = stageEl.getBoundingClientRect();
  const pad = 26;
  const aw = Math.max(80, r.width - pad * 2), ah = Math.max(80, r.height - pad * 2);
  const ar = ctx.ws().w / ctx.ws().h;
  let w = aw, h = aw / ar;
  if (h > ah) { h = ah; w = ah * ar; }
  frameEl.style.width = w + 'px';
  frameEl.style.height = h + 'px';
}

/* ============ الحفظ التلقائي ============ */
let saveT = null;
function scheduleSave() {
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    if (!storage.save()) console.warn('تعذر الحفظ المحلي (وضع معاينة مقيد؟) — استخدم "نسخة احتياطية" للتصدير');
  }, 700);
}

/* ============ المؤشرات: سحب/تحديد/قرص/دوران ============ */
const pointers = new Map(); // id -> {x,y}
let dragEl = null, dragOff = new THREE.Vector3(), dragMoved = false, downAt = null;
let pinch0 = null; // {dist, ang, scale, rotZ}

function hitEl(cx, cy) { return stage.raycast(ctx.ws(), cx, cy); }

stageEl.addEventListener('pointerdown', e => {
  if (e.target !== canvas) return; // مقابض Gizmo والأزرار تدير نفسها
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  downAt = { x: e.clientX, y: e.clientY, t: Date.now() };
  dragMoved = false;

  if (pointers.size === 2) {
    const [p1, p2] = [...pointers.values()];
    const el = ctx.ws().elements.find(x => x.id === selectedId);
    if (state.ui.tool === 'move' && el && !el.locked && el.visible) {
      e.stopPropagation();
      try { stageEl.setPointerCapture(e.pointerId); } catch (err) { }
      dragEl = null;
      pinch0 = {
        dist: Math.hypot(p2.x - p1.x, p2.y - p1.y),
        ang: Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI,
        scale: el.scale, rotZ: el.rotZ
      };
      return;
    }
    dragEl = null;
    return;
  }
  if (pointers.size > 2) return;

  const el = state.ui.tool === 'move' ? hitEl(e.clientX, e.clientY) : null;
  if (el) {
    e.stopPropagation(); // نمنع OrbitControls من بدء الدوران
    try { stageEl.setPointerCapture(e.pointerId); } catch (err) { }
    select(el.id);
    const zWorld = stage.meshes.get(el.id) ? stage.meshes.get(el.id).mesh.position.z : 0;
    const pt = stage.planePoint(e.clientX, e.clientY, zWorld);
    if (pt) dragOff.set(curVal(el, 'x') - pt.x, curVal(el, 'y') - pt.y, 0);
    dragEl = el;
  } else {
    dragEl = null;
  }
}, true);

stageEl.addEventListener('pointermove', e => {
  if (!pointers.has(e.pointerId)) {
    // مؤشر حر: تغيير شكل المؤشر فوق العناصر
    if (state.ui.tool === 'move' && !pointers.size && hitEl(e.clientX, e.clientY)) canvas.style.cursor = 'grab';
    else if (!pointers.size) canvas.style.cursor = '';
    return;
  }
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 3) dragMoved = true;

  if (pinch0 && pointers.size === 2) {
    e.stopPropagation();
    const [p1, p2] = [...pointers.values()];
    const el = ctx.ws().elements.find(x => x.id === selectedId);
    if (!el) return;
    const d = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const a = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    setProp(el, 'scale', Math.max(0.05, Math.min(4, pinch0.scale * (d / pinch0.dist))), true);
    setProp(el, 'rotZ', Math.round((pinch0.rotZ + (a - pinch0.ang)) * 10) / 10, true);
    return;
  }
  if (dragEl && pointers.size === 1) {
    e.stopPropagation();
    const zWorld = stage.meshes.get(dragEl.id) ? stage.meshes.get(dragEl.id).mesh.position.z : 0;
    const pt = stage.planePoint(e.clientX, e.clientY, zWorld);
    if (pt) {
      setProp(dragEl, 'x', Math.round((pt.x + dragOff.x) * 10) / 10, true);
      setProp(dragEl, 'y', Math.round((pt.y + dragOff.y) * 10) / 10, true);
    }
  }
}, true);

function endPointer(e) {
  const wasPinch = !!pinch0;
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch0 = null;
  if (dragEl) {
    e.stopPropagation();
    if (dragMoved) { history.commit(ctx.ws()); scheduleSave(); ui.refreshPanel(); }
    dragEl = null;
    return;
  }
  if (wasPinch) { history.commit(ctx.ws()); scheduleSave(); ui.refreshPanel(); return; }
  // نقرة قصيرة بدون سحب: تحديد/إلغاء
  if (downAt && !dragMoved && Date.now() - downAt.t < 450 && e.button === 0) {
    const el = hitEl(e.clientX, e.clientY);
    if (el) select(el.id);
    else if (!e.target.closest('.chip')) { /* إلغاء التحديد عند النقر على الفراغ */ if (state.ui.tool === 'move') select(null); }
  }
  downAt = null;
}
stageEl.addEventListener('pointerup', endPointer, true);
stageEl.addEventListener('pointercancel', endPointer, true);

canvas.addEventListener('dblclick', e => {
  const el = hitEl(e.clientX, e.clientY);
  if (el && el.type === 'text') {
    select(el.id);
    const ta = document.querySelector('#panel textarea');
    if (ta) { ta.focus(); if (window.innerWidth < 900) document.body.classList.add('panel-open'); }
  }
});

stageEl.addEventListener('wheel', e => {
  const el = ctx.ws().elements.find(x => x.id === selectedId);
  if (e.ctrlKey && el && state.ui.tool === 'move') {
    e.preventDefault(); e.stopPropagation();
    setProp(el, 'scale', Math.max(0.05, Math.min(4, curVal(el, 'scale') * (e.deltaY < 0 ? 1.07 : 0.93))));
    history.commit(ctx.ws()); scheduleSave(); ui.refreshPanel();
  }
}, { passive: false, capture: true });

/* سحب وإفلات ملفات الصور + اللصق */
['dragover', 'drop'].forEach(ev => stageEl.addEventListener(ev, e => {
  e.preventDefault();
  if (ev === 'drop' && e.dataTransfer?.files?.length) addImageFiles(e.dataTransfer.files);
}));
document.addEventListener('paste', e => {
  const items = e.clipboardData?.items;
  if (!items) return;
  const files = [];
  for (const it of items) if (it.type && it.type.startsWith('image/')) { const f = it.getAsFile(); if (f) files.push(f); }
  if (files.length) addImageFiles(files);
});

/* زر فتح لوحة الخصائص على الشاشات الصغيرة */
{
  const b = document.createElement('button');
  b.id = 'panelToggle';
  b.className = 'btn icon';
  b.title = 'خصائص العنصر';
  b.innerHTML = icon('sliders');
  b.onclick = () => document.body.classList.toggle('panel-open');
  stageEl.appendChild(b);
}

/* ============ لوحة المفاتيح ============ */
document.addEventListener('keydown', e => {
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
  const ws = ctx.ws();
  const el = ws.elements.find(x => x.id === selectedId);
  const k = e.key;
  const mod = e.ctrlKey || e.metaKey;

  if (mod && k.toLowerCase() === 'z') {
    e.preventDefault();
    e.shiftKey ? redo() : undo(); return;
  }
  if (mod && k.toLowerCase() === 'y') { e.preventDefault(); redo(); return; }
  if (mod && k.toLowerCase() === 'd') { if (el) { e.preventDefault(); duplicateEl(el.id); } return; }
  if (mod && k.toLowerCase() === 's') { e.preventDefault(); doExport(); return; }

  if (k === 'Delete' || k === 'Backspace') { if (el) { e.preventDefault(); removeEl(el.id); } return; }
  if (k === 'Escape') { if (document.querySelector('#modals.show')) ui.closeModal(); else select(null); return; }
  if (k.toLowerCase() === 'h') { ui.openHelp(); return; }
  if (k.toLowerCase() === 'm') { setTool(state.ui.tool === 'move' ? 'orbit' : 'move'); return; }
  if (k.toLowerCase() === 'g') { state.ui.grid = !state.ui.grid; ui.refreshTool(); applyFrame(); return; }
  if (k === '0') { fitView(); return; }
  if (k.toLowerCase() === 't') { addText(); return; }
  if (k.toLowerCase() === 'i') { pickImages(); return; }

  if (k === ' ') { e.preventDefault(); timeline && timeline.setPlaying(!timeline.playing); return; }
  if (k === 'Home') { timeline && (timeline.setPlaying(false), timeline.setTime(0)); return; }
  if (k === 'End') { timeline && (timeline.setPlaying(false), timeline.setTime(ws.duration)); return; }
  if ((k === 'ArrowLeft' || k === 'ArrowRight') && !el && timeline) {
    e.preventDefault();
    timeline.setTime(timeline.time + (k === 'ArrowRight' ? 1 : -1) / 30);
    return;
  }
  if (k === 'Delete' && timeline && timeline.selKf) { timeline.deleteSelKf(); return; }
  if (!el) return;
  const sp = (prop, v) => setProp(el, prop, Math.round(v * 100) / 100);
  const step = e.shiftKey ? 8 : 1.5;
  if (k === 'ArrowLeft') { e.preventDefault(); sp('x', curVal(el, 'x') - step); }
  else if (k === 'ArrowRight') { e.preventDefault(); sp('x', curVal(el, 'x') + step); }
  else if (k === 'ArrowUp') { e.preventDefault(); sp('y', curVal(el, 'y') + step); }
  else if (k === 'ArrowDown') { e.preventDefault(); sp('y', curVal(el, 'y') - step); }
  else if (k.toLowerCase() === 'q') { sp('rotZ', curVal(el, 'rotZ') - 4); }
  else if (k.toLowerCase() === 'e') { sp('rotZ', curVal(el, 'rotZ') + 4); }
  else if (k.toLowerCase() === 'w') { sp('rotX', curVal(el, 'rotX') - 4); }
  else if (k.toLowerCase() === 's') { sp('rotX', curVal(el, 'rotX') + 4); }
  else if (k.toLowerCase() === 'a') { sp('rotY', curVal(el, 'rotY') - 4); }
  else if (k.toLowerCase() === 'd') { sp('rotY', curVal(el, 'rotY') + 4); }
  else if (k === '+' || k === '=') { sp('scale', Math.min(4, curVal(el, 'scale') * 1.06)); }
  else if (k === '-' || k === '_') { sp('scale', Math.max(0.05, curVal(el, 'scale') * 0.94)); }
  else if (k.toLowerCase() === 'r') { sp('rotX', 0); sp('rotY', 0); sp('rotZ', 0); }
  else return;
  history.commit(ws); scheduleSave();
});

/* ============ تغيير الحجم ============ */
const ro = new ResizeObserver(() => {
  const r = stageEl.getBoundingClientRect();
  stage.resize(Math.max(1, r.width), Math.max(1, r.height));
  updateFrameSize();
});
ro.observe(stageEl);

/* إغلاق قائمة اللوحة عند النقر خارجها */
document.addEventListener('click', () => { if (ui.boardOpen) ui.closeBoard(); });

/* ============ الحلقة الرئيسية ============ */
let lastT = performance.now();
function loop() {
  const now = performance.now();
  const dt = Math.min(0.1, (now - lastT) / 1000);
  lastT = now;
  if (timeline) timeline.tick(dt);
  stage.syncAll(ctx.ws());
  stage.render();
  if (gizmo) gizmo.update(ctx.ws());
  requestAnimationFrame(loop);
}

/* ============ تشغيل ============ */
document.documentElement.dataset.theme = state.ui.theme || 'light';
stage.setTheme((state.ui.theme || 'light') === 'dark');
timeline = initTimeline(ctx);
gizmo = new Gizmo(stageEl, ctx);
applyTool();
ui.refreshAll();
applyFrame();
stage.time = timeline.time;
{
  const r = stageEl.getBoundingClientRect();
  stage.resize(Math.max(1, r.width), Math.max(1, r.height));
}
fitView();
loop();
scheduleSave();

ui.toast('مرحباً بك في استوديو الانحناء ✦ أضف صورتك لتبدأ', 3600);
