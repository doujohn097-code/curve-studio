// ui.js — الهيكل العام: الترويسة، شريط الأدوات، النوافذ، التنبيهات، الثيم الأبيض/الأسود
import { icon } from './icons.js';
import { esc, state, history, storage } from './state.js';
import { renderBar } from './bar.js';
import { renderPanel } from './panel.js';

const SIZE_PRESETS = [
  ['1080x1080', 'مربع 1080×1080'],
  ['1080x1350', 'بورتريه 1080×1350'],
  ['1080x1920', 'ستوري / ريلز 1080×1920'],
  ['1920x1080', 'عريض 1920×1080'],
  ['1170x2532', 'هاتف 1170×2532'],
  ['1200x628', 'غلاف 1200×628']
];

export function initUI(ctx) {
  const $ = s => document.querySelector(s);
  const topbar = $('#topbar'), toolrail = $('#toolrail'), stage = $('#stage');

  /* ---------------- الترويسة ---------------- */
  topbar.innerHTML = `
    <div class="brand">${icon('logo', 22)}<div class="bt"><b>استوديو الانحناء</b><span>CURVE STUDIO · 3D</span></div></div>
    <div class="hgroup" id="hWs">
      <select id="wsSelect" title="بيئات العمل"></select>
      <button class="btn icon" id="wsNew" title="بيئة عمل جديدة">${icon('plus')}</button>
      <button class="btn icon" id="wsRename" title="إعادة تسمية">${icon('pen')}</button>
      <button class="btn icon" id="wsDelete" title="حذف بيئة العمل">${icon('trash')}</button>
    </div>
    <div class="hgroup">
      <button class="btn" id="boardBtn">${icon('board')} اللوحة</button>
    </div>
    <div class="hspacer"></div>
    <div class="hgroup">
      <button class="btn icon" id="undoBtn" title="تراجع (Ctrl+Z)">${icon('undo')}</button>
      <button class="btn icon" id="redoBtn" title="إعادة (Ctrl+Shift+Z)">${icon('redo')}</button>
      <button class="btn icon" id="ioBtn" title="نسخة احتياطية / استيراد">${icon('check')}</button>
      <button class="btn icon" id="themeBtn" title="الوضع الليلي/النهاري">${icon('moon')}</button>
      <button class="btn icon" id="helpBtn" title="المساعدة والاختصارات (H)">${icon('help')}</button>
      <button class="btn primary" id="exportBtn">${icon('download')} حفظ الصورة</button>
    </div>`;

  toolrail.innerHTML = `
    <button class="tool" id="toolMove" title="تحريك/تحرير العناصر (M)">${icon('move')}</button>
    <button class="tool" id="toolOrbit" title="عرض ودوران 360° (M)">${icon('orbit')}</button>
    <div class="tsep"></div>
    <button class="tool" id="fitBtn" title="ملاءمة العرض (0)">${icon('fit')}</button>
    <button class="tool" id="rotBtn" title="دوران تلقائي">${icon('rotate')}</button>
    <button class="tool" id="gridBtn" title="شبكة (G)">${icon('grid')}</button>`;

  /* ---------------- لوحة إعدادات اللوحة ---------------- */
  const board = document.createElement('div');
  board.id = 'boardPop';
  board.className = 'pop hidden';
  topbar.appendChild(board);

  function renderBoard() {
    const ws = ctx.ws();
    const cur = `${ws.w}x${ws.h}`;
    const isPreset = SIZE_PRESETS.some(p => p[0] === cur);
    board.innerHTML = `
      <div class="popsec"><b>حجم بيئة العمل</b>
        ${row('المقاسات', `<select id="bpSize">${SIZE_PRESETS.map(p => `<option value="${p[0]}" ${p[0] === cur ? 'selected' : ''}>${p[1]}</option>`).join('')}<option value="custom" ${isPreset ? '' : 'selected'}>مخصص…</option></select>`)}
        ${row('مخصص', `<div class="pair"><input type="number" id="bpW" min="256" max="4096" step="1" value="${ws.w}" class="num"><span class="unit">×</span><input type="number" id="bpH" min="256" max="4096" step="1" value="${ws.h}" class="num"><button class="btn mini" id="bpApply">تطبيق</button></div>`)}
      </div>
      <div class="popsec"><b>خلفية بيئة العمل</b>
        ${row('النوع', `<select id="bpType"><option value="color" ${ws.bg.type === 'color' ? 'selected' : ''}>لون</option><option value="gradient" ${ws.bg.type === 'gradient' ? 'selected' : ''}>تدرّج</option><option value="transparent" ${ws.bg.type === 'transparent' ? 'selected' : ''}>شفافة (PNG)</option></select>`)}
        <div id="bpColorRow">${row('اللون', `<input type="color" id="bpColor" value="${ws.bg.color}">`)}</div>
        <div id="bpGradRow" class="${ws.bg.type === 'gradient' ? '' : 'hidden'}">
          ${row('من', `<input type="color" id="bpFrom" value="${ws.bg.from}">`)}
          ${row('إلى', `<input type="color" id="bpTo" value="${ws.bg.to}">`)}
          ${row('الزاوية', `<div class="pair"><input type="range" id="bpAngle" min="0" max="360" value="${ws.bg.angle}"><span class="unit">${ws.bg.angle}°</span></div>`)}
        </div>
      </div>`;
    board.querySelector('#bpSize').onchange = e => {
      if (e.target.value !== 'custom') { const [w, h] = e.target.value.split('x').map(Number); ctx.setWorkspaceSize(w, h); }
    };
    board.querySelector('#bpApply').onclick = () => {
      const w = clampI(+board.querySelector('#bpW').value), h = clampI(+board.querySelector('#bpH').value);
      ctx.setWorkspaceSize(w, h);
    };
    board.querySelector('#bpType').onchange = e => { ctx.setBg({ type: e.target.value }); renderBoard(); };
    board.querySelector('#bpColor')?.addEventListener('input', e => ctx.setBg({ color: e.target.value, type: 'color' }));
    board.querySelector('#bpFrom')?.addEventListener('input', e => ctx.setBg({ from: e.target.value, type: 'gradient' }));
    board.querySelector('#bpTo')?.addEventListener('input', e => ctx.setBg({ to: e.target.value, type: 'gradient' }));
    board.querySelector('#bpAngle')?.addEventListener('input', e => { ctx.setBg({ angle: +e.target.value, type: 'gradient' }); board.querySelector('#bpAngle').parentElement.querySelector('.unit').textContent = e.target.value + '°'; });
  }
  const clampI = v => Math.max(256, Math.min(4096, Math.round(v) || 1080));

  $('#boardBtn').onclick = e => { e.stopPropagation(); renderBoard(); board.classList.toggle('hidden'); };
  board.addEventListener('click', e => e.stopPropagation());

  /* ---------------- أزرار الترويسة ---------------- */
  $('#wsSelect').onchange = e => ctx.switchWorkspace(e.target.value);
  $('#wsNew').onclick = () => ctx.newWorkspace();
  $('#wsRename').onclick = () => ctx.renameWorkspace();
  $('#wsDelete').onclick = () => ctx.deleteWorkspace();
  $('#undoBtn').onclick = () => ctx.undo();
  $('#redoBtn').onclick = () => ctx.redo();
  $('#exportBtn').onclick = () => ctx.doExport();
  $('#helpBtn').onclick = () => openHelp();
  $('#ioBtn').onclick = () => openIO();
  $('#themeBtn').onclick = () => ctx.setTheme(state.ui.theme === 'dark' ? 'light' : 'dark');

  /* ---------------- شريط الأدوات ---------------- */
  $('#toolMove').onclick = () => ctx.setTool('move');
  $('#toolOrbit').onclick = () => ctx.setTool('orbit');
  $('#fitBtn').onclick = () => ctx.fitView();
  $('#rotBtn').onclick = () => { state.ui.autoRotate = !state.ui.autoRotate; refreshTool(); ctx.applyTool(); };
  $('#gridBtn').onclick = () => { state.ui.grid = !state.ui.grid; refreshTool(); ctx.applyFrame(); };

  function refreshTool() {
    $('#toolMove').classList.toggle('on', state.ui.tool === 'move');
    $('#toolOrbit').classList.toggle('on', state.ui.tool === 'orbit');
    $('#rotBtn').classList.toggle('on', !!state.ui.autoRotate);
    $('#gridBtn').classList.toggle('on', !!state.ui.grid);
    const hint = $('#hint');
    hint.innerHTML = state.ui.tool === 'move'
      ? `اسحب العنصر لتحريكه · اسحب الخلفية للدوران 360° · العجلة للتقريب · إصبعان على العنصر للتكبير والتدوير`
      : `وضع العرض 360° — اسحب في أي مكان للدوران الحر، والعجلة للتقريب`;
  }

  /* ---------------- الحالة الفارغة ---------------- */
  function updateEmpty() {
    const ws = ctx.ws();
    const empty = $('#empty');
    if (ws.elements.length) { empty.classList.add('hidden'); return; }
    empty.classList.remove('hidden');
    empty.innerHTML = `
      <div class="emptybox">
        <div class="eico">${icon('dragfile', 40)}</div>
        <b>ابدأ بإضافة صورتك أو نصك</b>
        <p>ستظهر صورتك كبطاقة/شاشة منحنية قابلة للدوران 360°</p>
        <div class="ebtns">
          <button class="btn primary" id="eImg">${icon('image')} اختر صورة</button>
          <button class="btn" id="eTxt">${icon('type')} أضف نصاً</button>
        </div>
        <p class="mini-h">أو أفلت ملف صورة هنا · أو الصق صورة بـ Ctrl+V</p>
      </div>`;
    empty.querySelector('#eImg').onclick = () => ctx.pickImages();
    empty.querySelector('#eTxt').onclick = () => ctx.addText();
  }

  /* ---------------- نوافذ ---------------- */
  const modals = $('#modals');
  function closeModal() { modals.innerHTML = ''; modals.classList.remove('show'); }
  function modal({ title, body, buttons = [], wide = false }) {
    modals.innerHTML = `<div class="mbox ${wide ? 'wide' : ''}">
      <div class="mhead"><b>${title}</b><button class="btn icon" id="mClose">${icon('close')}</button></div>
      <div class="mbody">${body}</div>
      <div class="mfoot" id="mFoot"></div></div>`;
    modals.classList.add('show');
    const foot = $('#mFoot');
    buttons.forEach((b, i) => {
      const el = document.createElement('button');
      el.className = 'btn ' + (b.primary ? 'primary' : '') + (b.danger ? 'danger' : '');
      el.innerHTML = b.label;
      el.onclick = () => b.onClick ? b.onClick(closeModal) : closeModal();
      foot.appendChild(el);
    });
    $('#mClose').onclick = closeModal;
    return closeModal;
  }
  modals.addEventListener('click', e => { if (e.target === modals) closeModal(); });

  function confirmModal(title, body, onOk) {
    modal({
      title, body,
      buttons: [{ label: 'إلغاء' }, { label: 'نعم، متابعة', primary: true, onClick: c => { c(); onOk(); } }]
    });
  }
  function promptModal(title, label, value, onOk) {
    modal({
      title,
      body: `<div class="row"><label>${label}</label><div class="ctl"><input class="txt" id="pmIn" value="${esc(value)}" maxlength="60"></div></div>`,
      buttons: [{ label: 'إلغاء' }, { label: 'تطبيق', primary: true, onClick: c => { const v = $('#pmIn').value.trim(); c(); if (v) onOk(v); } }]
    });
    setTimeout(() => { const i = $('#pmIn'); i?.focus(); i?.select(); }, 30);
  }

  function openHelp() {
    const k = (a, b) => `<tr><td><kbd>${a}</kbd></td><td>${b}</td></tr>`;
    modal({
      title: 'المساعدة والاختصارات', wide: true,
      body: `
      <div class="help">
        <div><b>الفأرة</b><ul>
          <li>اسحب عنصراً محدداً لتحريكه داخل المشهد.</li>
          <li>اسحب الخلفية الفارغة للدوران 360° حول العمل.</li>
          <li>عجلة الفأرة: تقريب/تبعيد. Ctrl + عجلة فوق عنصر محدد: تكبيره.</li>
          <li>ضغطة على عنصر تحدده وتُظهر خصائصه، وعلى شريطه في الأسفل كذلك.</li>
        </ul></div>
        <div><b>اللمس (الهاتف)</b><ul>
          <li>إصبع واحد على العنصر: تحريك · على الخلفية: دوران.</li>
          <li>إصبعان على العنصر المحدد: تكبير + تدوير.</li>
          <li>إصبعان على الخلفية: تقريب وتحريك الكاميرا.</li>
        </ul></div>
        <div><b>لوحة المفاتيح</b><table>
          ${k('Ctrl+Z', 'تراجع')}${k('Ctrl+Shift+Z / Ctrl+Y', 'إعادة')}${k('Ctrl+D', 'تكرار العنصر')}${k('Ctrl+S', 'حفظ الصورة PNG')}${k('Delete', 'حذف المحدد')}
          ${k('الأسهم', 'تحريك دقيق (Shift = أسرع)')}${k('Q / E', 'تدوير حول محور Z')}${k('W / S', 'إمالة حول X')}${k('A / D', 'إمالة حول Y')}
          ${k('+ / −', 'تكبير/تصغير المحدد')}${k('0', 'ملاءمة العرض')}${k('T', 'نص جديد')}${k('I', 'صورة جديدة')}${k('M', 'تبديل وضع التحرير/العرض')}${k('G', 'الشبكة')}${k('Esc', 'إلغاء التحديد')}${k('H', 'هذه النافذة')}
        </table></div>
        <div><b>الطبقات</b><ul>
          <li>الشريط السفلي يعرض الطبقات: الأمام أولاً.</li>
          <li>اسحب شريط الطبقة أفقياً لإعادة الترتيب — ضع نصاً فوق صورة أو العكس.</li>
          <li>الزر 👁 للإخفاء، 🔒 للقفل، 🗑 للحذف، وضغطة مزدوجة لإعادة التسمية.</li>
        </ul></div>
        <div><b>بيئات العمل</b><ul>
          <li>من الأعلى: إنشاء/تسمية/حذف بيئات عمل متعددة، وتغيير الحجم والخلفية من زر «اللوحة».</li>
          <li>كل شيء يُحفظ تلقائياً في المتصفح.</li>
        </ul></div>
      </div>`,
      buttons: [{ label: 'فهمت', primary: true }]
    });
  }

  function openIO() {
    modal({
      title: 'نسخة احتياطية للمشروع',
      body: `<p>صدّر كل بيئات العمل (مع الصور) في ملف JSON واحد، أو استورد ملفاً سابقاً.</p>
      <p class="mini-h">ملاحظة: الصور الكبيرة تُضمَّن داخل الملف فقد يكبر حجمه.</p>`,
      buttons: [
        { label: 'استيراد ملف…', onClick: c => { c(); ctx.importProject(); } },
        { label: 'تصدير ملف JSON', primary: true, onClick: c => { c(); ctx.exportProject(); } }
      ]
    });
  }

  function openExport(url, w, h) {
    const name = (ctx.ws().name || 'design') + '-' + w + 'x' + h + '.png';
    modal({
      title: 'معاينة الحفظ — ' + w + '×' + h, wide: true,
      body: `<div class="exwrap"><img src="${url}" alt="معاينة"></div>
        <p class="mini-h">إن لم يبدأ التنزيل تلقائياً: اضغط زر التنزيل، أو انقر بزر الفأرة الأيمن على المعاينة واختر «حفظ الصورة باسم».</p>`,
      buttons: [
        { label: 'إغلاق' },
        {
          label: 'تنزيل PNG', primary: true, onClick: () => {
            try {
              const a = document.createElement('a');
              a.href = url; a.download = name;
              document.body.appendChild(a); a.click(); a.remove();
            } catch (e) { }
          }
        }
      ]
    });
  }

  /* ---------------- التنبيهات ---------------- */
  function toast(msg, ms = 2600) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = msg;
    $('#toasts').appendChild(t);
    setTimeout(() => t.classList.add('out'), ms - 400);
    setTimeout(() => t.remove(), ms);
  }

  /* ---------------- التحديث ---------------- */
  function refreshHeader() {
    const sel = $('#wsSelect');
    sel.innerHTML = state.workspaces.map(w => `<option value="${w.id}" ${w.id === state.activeId ? 'selected' : ''}>${esc(w.name)} · ${w.w}×${w.h}</option>`).join('');
    $('#themeBtn').innerHTML = icon(state.ui.theme === 'dark' ? 'sun' : 'moon');
    updateUndoRedo();
  }
  function updateUndoRedo() {
    const ws = ctx.ws();
    $('#undoBtn').disabled = !history.canUndo(ws);
    $('#redoBtn').disabled = !history.canRedo(ws);
  }
  function refreshAll() { refreshHeader(); renderBar(ctx); renderPanel(ctx); updateEmpty(); refreshTool(); }

  return {
    refreshAll, refreshHeader, refreshBar: () => { renderBar(ctx); updateEmpty(); updateUndoRedo(); },
    refreshPanel: () => { renderPanel(ctx); }, updateEmpty, updateUndoRedo, refreshTool,
    toast, modal, confirmModal, promptModal, openHelp, openExport, closeModal,
    get boardOpen() { return !board.classList.contains('hidden'); },
    closeBoard() { board.classList.add('hidden'); },
    renderBoard
  };
}

const row = (label, inner) => `<div class="row"><label>${label}</label><div class="ctl">${inner}</div></div>`;
