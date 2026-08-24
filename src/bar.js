// bar.js — شريط العمل السفلي: إضافة، طبقات قابلة للترتيب بالسحب، تحديد/إخفاء/قفل/حذف
import { icon } from './icons.js';
import { esc, assets } from './state.js';

export function renderBar(ctx) {
  const ws = ctx.ws();
  const chips = document.getElementById('chips');
  const left = document.getElementById('barLeft');
  const right = document.getElementById('barRight');

  left.innerHTML = `
    <button class="btn primary" id="barAddImg" title="إضافة صورة (I)">${icon('image')} صورة</button>
    <button class="btn" id="barAddTxt" title="إضافة نص (T)">${icon('type')} نص</button>`;
  right.innerHTML = `<span class="layercount">${icon('layers')} ${ws.elements.length} طبقة · الأمام أولاً</span>`;

  if (!ws.elements.length) {
    chips.innerHTML = `<span class="chipsis">الطبقات ستظهر هنا — اسحب شريط أي طبقة لإعادة ترتيبها (نص فوق صورة أو العكس)</span>`;
  } else {
    chips.innerHTML = ws.elements.map((el, i) => {
      const a = el.assetId ? assets.get(el.assetId) : null;
      const thumb = el.type === 'image' && a && a.thumb
        ? `<img class="thumb" src="${a.thumb}" alt="">`
        : `<span class="thumb tmark" style="font-family:'${esc(el.font || 'Cairo')}',sans-serif">T</span>`;
      return `<div class="chip ${el.id === ctx.selectedId ? 'sel' : ''} ${el.visible ? '' : 'hid'}" draggable="true" data-id="${el.id}" data-i="${i}" title="${esc(el.name)}">
        <span class="grip">${icon('grip', 14)}</span>
        ${thumb}
        <span class="cname">${esc(el.name)}</span>
        <button class="cb" data-act="eye" title="إظهار/إخفاء">${icon(el.visible ? 'eye' : 'eyeOff', 14)}</button>
        <button class="cb ${el.locked ? 'on' : ''}" data-act="lock" title="قفل/فتح">${icon(el.locked ? 'lock' : 'unlock', 14)}</button>
        <button class="cb" data-act="del" title="حذف">${icon('trash', 14)}</button>
      </div>`;
    }).join('');
  }

  left.querySelector('#barAddImg').onclick = () => ctx.pickImages();
  left.querySelector('#barAddTxt').onclick = () => ctx.addText();

  chips.querySelectorAll('.chip').forEach(chip => {
    const id = chip.dataset.id;
    chip.addEventListener('click', e => {
      const act = e.target.closest('.cb')?.dataset.act;
      const el = ws.elements.find(x => x.id === id);
      if (!el) return;
      if (act === 'eye') { el.visible = !el.visible; ctx.touch(el, true); }
      else if (act === 'lock') { el.locked = !el.locked; ctx.touch(el, true); }
      else if (act === 'del') { ctx.removeEl(id); return; }
      else ctx.select(id);
    });
    chip.addEventListener('dblclick', e => {
      if (e.target.closest('.cb')) return;
      ctx.renameEl(id);
    });
    /* سحب لإعادة الترتيب */
    chip.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', JSON.stringify({ from: +chip.dataset.i }));
      e.dataTransfer.effectAllowed = 'move';
      chip.classList.add('dragging');
    });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
    chip.addEventListener('dragover', e => { e.preventDefault(); chip.classList.add('dropover'); });
    chip.addEventListener('dragleave', () => chip.classList.remove('dropover'));
    chip.addEventListener('drop', e => {
      e.preventDefault(); chip.classList.remove('dropover');
      try {
        const { from } = JSON.parse(e.dataTransfer.getData('text/plain'));
        ctx.moveLayer(ws.elements[from]?.id, +chip.dataset.i, 'index');
      } catch (err) { }
    });
  });
}
