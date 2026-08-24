// gizmo.js — مقابض التحكم المباشر فوق العنصر (مثل After Effects):
// تحريك، تكبير من الزوايا، دوران، إمالة — كلها من الواجهة دون أرقام
import * as THREE from 'three';
import { evalProp } from './anim.js';

const H = 12; // حجم المقبض

export class Gizmo {
  constructor(stageEl, ctx) {
    this.ctx = ctx;
    this.stageEl = stageEl;
    this.elId = null;
    this.visible = false;
    this.center = [0, 0];
    this.rect = null;

    const root = document.createElement('div');
    root.id = 'gizmo';
    root.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:5;direction:ltr;overflow:hidden;';
    root.innerHTML = `<svg id="gzSvg" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible"></svg>
      <div id="gzLabel" class="gzlabel"></div>`;
    stageEl.appendChild(root);
    this.root = root;
    this.svg = root.querySelector('#gzSvg');
    this.label = root.querySelector('#gzLabel');

    this.poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    this.poly.setAttribute('fill', 'none');
    this.poly.setAttribute('stroke-width', '1.5');
    this.poly.setAttribute('stroke-dasharray', '5 4');
    this.svg.appendChild(this.poly);

    this.handles = {};
    const mk = (cls, cur, type) => {
      const d = document.createElement('div');
      d.className = 'gzh ' + cls;
      d.style.cursor = cur;
      root.appendChild(d);
      this.handles[type] = this.handles[type] || [];
      this.handles[type].push(d);
      return d;
    };
    this.h = {};
    this.h.nw = mk('c', 'nwse-resize', 'scale');
    this.h.ne = mk('c', 'nesw-resize', 'scale');
    this.h.sw = mk('c', 'nesw-resize', 'scale');
    this.h.se = mk('c', 'nwse-resize', 'scale');
    this.h.rot = mk('r', 'grab', 'rot');
    this.h.ml = mk('sy', 'ew-resize', 'tiltY');
    this.h.mr = mk('sy', 'ew-resize', 'tiltY');
    this.h.mt = mk('sx', 'ns-resize', 'tiltX');
    this.h.mb = mk('sx', 'ns-resize', 'tiltX');

    Object.entries(this.h).forEach(([k, d]) => this.bindHandle(k, d));
  }

  hide() {
    this.visible = false;
    this.root.style.display = 'none';
    this.elId = null;
  }

  _cur(prop) { return evalProp(this._el, prop, this.ctx.stage.time, this.ctx.ws()); }

  bindHandle(name, d) {
    d.addEventListener('pointerdown', e => {
      e.stopPropagation();
      e.preventDefault();
      const el = this._el;
      if (!el || el.locked) return;
      const ctx = this.ctx;
      d.setPointerCapture(e.pointerId);
      const [cx, cy] = this.center;
      const st = {
        scale: this._cur('scale'),
        rotZ: this._cur('rotZ'),
        rotY: this._cur('rotY'),
        rotX: this._cur('rotX')
      };
      const d0 = Math.hypot(e.clientX - cx, e.clientY - cy) || 1;
      const a0 = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
      const x0 = e.clientX, y0 = e.clientY;
      const live = (prop, v) => ctx.setProp(el, prop, Math.round(v * 1000) / 1000, true);
      const move = ev => {
        const dx = ev.clientX - x0, dy = ev.clientY - y0;
        if (d === this.h.nw || d === this.h.ne || d === this.h.sw || d === this.h.se) {
          const dd = Math.hypot(ev.clientX - cx, ev.clientY - cy) || 1;
          live('scale', Math.max(0.05, Math.min(4, st.scale * dd / d0)));
        } else if (d === this.h.rot) {
          const a = Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180 / Math.PI;
          live('rotZ', st.rotZ + (a - a0));
        } else if (d === this.h.ml || d === this.h.mr) {
          live('rotY', st.rotY + dx * 0.4);
        } else {
          live('rotX', st.rotX + dy * 0.4);
        }
      };
      const up = ev => {
        d.removeEventListener('pointermove', move);
        d.removeEventListener('pointerup', up);
        d.removeEventListener('pointercancel', up);
        ctx.touch(el, true);
        ctx.refreshPanel();
      };
      d.addEventListener('pointermove', move);
      d.addEventListener('pointerup', up);
      d.addEventListener('pointercancel', up);
    });
  }

  /* يُحدَّث كل إطار: يرسم محيط البطاقة الحقيقي (مع الانحناء) والمقابض فوقه */
  update(ws) {
    const el = ws.elements.find(x => x.id === this.ctx.selectedId);
    const stage = this.ctx.stage;
    if (!el || !el.visible || el.locked || stage.time === undefined || this.ctx.isPlaying?.()) { this.hide(); return; }
    const rec = stage.meshes.get(el.id);
    if (!rec || !rec.mesh.visible) { this.hide(); return; }
    this._el = el;
    this.elId = el.id;
    this.root.style.display = '';
    const canvas = stage.canvas;
    const r = canvas.getBoundingClientRect();
    const sr = this.stageEl.getBoundingClientRect();
    const ox = r.left - sr.left, oy = r.top - sr.top;
    const mesh = rec.mesh;
    const pos = mesh.geometry.attributes.position;
    const seg = Math.round(Math.sqrt(pos.count)) - 1;

    const ring = [];
    for (let c = 0; c <= seg; c++) ring.push(c);                       // الصف الأعلى
    for (let rr = 1; rr <= seg; rr++) ring.push(rr * (seg + 1) + seg);  // العمود الأيمن
    for (let c = seg - 1; c >= 0; c--) ring.push(seg * (seg + 1) + c);  // الصف الأسفل
    for (let rr = seg - 1; rr >= 1; rr--) ring.push(rr * (seg + 1));    // العمود الأيسر

    const v = new THREE.Vector3();
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    const pts = [];
    mesh.updateWorldMatrix(true, false);
    for (const idx of ring) {
      v.fromBufferAttribute(pos, idx).applyMatrix4(mesh.matrixWorld).project(stage.camera);
      const x = ox + (v.x * 0.5 + 0.5) * r.width;
      const y = oy + (1 - (v.y * 0.5 + 0.5)) * r.height;
      pts.push(x.toFixed(1) + ',' + y.toFixed(1));
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
    this.poly.setAttribute('points', pts.join(' '));
    this.rect = { minX, minY, maxX, maxY };

    const dark = document.documentElement.dataset.theme === 'dark';
    this.poly.setAttribute('stroke', dark ? '#ffffff' : '#0b0b0c');

    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
    this.center = [cx, cy];
    const place = (d, x, y) => { d.style.left = (x - H / 2) + 'px'; d.style.top = (y - H / 2) + 'px'; };
    place(this.h.nw, minX, minY); place(this.h.ne, maxX, minY);
    place(this.h.sw, minX, maxY); place(this.h.se, maxX, maxY);
    place(this.h.ml, minX, cy); place(this.h.mr, maxX, cy);
    place(this.h.mt, cx, minY); place(this.h.mb, cx, maxY);
    place(this.h.rot, cx, minY - 30);
    this.label.style.left = Math.max(4, cx - 40) + 'px';
    this.label.style.top = Math.max(2, minY - 30) + 'px';
    this.label.textContent = el.name;
    this.label.style.display = minY < 34 ? 'none' : '';
  }
}
