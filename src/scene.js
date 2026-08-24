// scene.js — مشهد Three.js: بطاقات منحنية، تحديد، التقاط، تصدير PNG
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { cardKey, buildCardGeometry } from './geometry.js';
import { textureKey, renderImageCard, renderTextCard, imageWorldSize, TEX_Q, bumpFonts } from './textures.js';

export class Stage {
  constructor(canvas, container) {
    this.canvas = canvas; this.container = container;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.5, 6000);
    this.camera.position.set(0, 0, 210);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.85;
    this.controls.minDistance = 30;
    this.controls.maxDistance = 900;
    this.controls.screenSpacePanning = true;
    this.controls.autoRotateSpeed = 2.2;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.meshes = new Map(); // id -> {mesh, geoKey, texKey, w, h}
    this.selectedId = null;
    this.helper = null;
    this.quality = 1;
    this.stageW = 1; this.stageH = 1;
    this.raycaster = new THREE.Raycaster();
    this._dark = false;
  }

  worldSizeOf(ws) { const s = 100 / Math.max(ws.w, ws.h); return { w: ws.w * s, h: ws.h * s }; }

  resize(w, h) {
    this.stageW = w; this.stageH = h;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  fit(ws) {
    const { w, h } = this.worldSizeOf(ws);
    const halfH = Math.max(h / 2, w / (2 * this.camera.aspect));
    const dist = (halfH / Math.tan((this.camera.fov / 2) * Math.PI / 180)) * 1.22;
    this.camera.position.set(0, 0, dist);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setTheme(dark) {
    this._dark = dark;
    if (this.helper) this.helper.material.color.set(dark ? 0xffffff : 0x0b0b0c);
  }

  setSelection(id) {
    this.selectedId = id;
    if (!id) { if (this.helper) this.helper.visible = false; return; }
    const rec = this.meshes.get(id);
    if (!rec) { if (this.helper) this.helper.visible = false; return; }
    if (!this.helper) {
      this.helper = new THREE.BoxHelper(rec.mesh, this._dark ? 0xffffff : 0x0b0b0c);
      this.scene.add(this.helper);
    } else {
      this.helper.setFromObject(rec.mesh);
    }
    this.helper.material.transparent = true;
    this.helper.material.opacity = 0.9;
    this.helper.visible = true;
  }

  raycast(ws, clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const nd = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(nd, this.camera);
    const objs = [];
    for (const el of ws.elements) {
      if (!el.visible) continue;
      const rec = this.meshes.get(el.id);
      if (rec) rec.mesh.userData.elId = el.id, objs.push(rec.mesh);
    }
    const hits = this.raycaster.intersectObjects(objs, false);
    for (const h of hits) {
      const el = ws.elements.find(e => e.id === h.object.userData.elId);
      if (el && !el.locked) return el;
    }
    return null;
  }

  planePoint(clientX, clientY, z = 0) {
    const r = this.canvas.getBoundingClientRect();
    const nd = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(nd, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -z);
    const out = new THREE.Vector3();
    return this.raycaster.ray.intersectPlane(plane, out) ? out : null;
  }

  _dispose(rec) {
    rec.mesh.geometry.dispose();
    if (rec.mesh.material.map) rec.mesh.material.map.dispose();
    rec.mesh.material.dispose();
    this.group.remove(rec.mesh);
  }

  syncAll(ws) {
    if (!ws) return;
    const alive = new Set(ws.elements.map(e => e.id));
    for (const [id, rec] of [...this.meshes]) {
      if (!alive.has(id)) { this._dispose(rec); this.meshes.delete(id); }
    }
    ws.elements.forEach((el, i) => this.syncElement(ws, el, i));
  }

  syncElement(ws, el, i) {
    let rec = this.meshes.get(el.id);
    if (!rec) {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.02, side: THREE.DoubleSide })
      );
      mesh.userData.elId = el.id;
      rec = { mesh, geoKey: '', texKey: '', w: 1, h: 1 };
      this.meshes.set(el.id, rec);
      this.group.add(mesh);
    }
    const tk = textureKey(el, this.quality);
    if (rec.texKey !== tk) {
      const q = TEX_Q * this.quality;
      const out = el.type === 'image'
        ? renderImageCard(el, ...(() => { const s = imageWorldSize(el); return [s.w, s.h]; })(), q)
        : renderTextCard(el, q);
      if (rec.mesh.material.map) rec.mesh.material.map.dispose();
      const tex = new THREE.CanvasTexture(out.canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy ? this.renderer.capabilities.getMaxAnisotropy() : 1);
      rec.mesh.material.map = tex;
      rec.mesh.material.needsUpdate = true;
      rec.w = out.worldW; rec.h = out.worldH;
      rec.texKey = tk;
    }
    const gk = cardKey(rec.w, rec.h, el);
    if (rec.geoKey !== gk) {
      rec.mesh.geometry.dispose();
      rec.mesh.geometry = buildCardGeometry(rec.w, rec.h, el);
      rec.geoKey = gk;
    }
    const m = rec.mesh;
    const n = ws.elements.length;
    const zBase = (n - 1 - i) * 8;
    m.position.set(el.x, el.y, zBase + el.z * 10);
    m.rotation.set(el.rotX * Math.PI / 180, el.rotY * Math.PI / 180, el.rotZ * Math.PI / 180);
    m.scale.setScalar(Math.max(0.03, el.scale));
    m.material.opacity = el.opacity;
    m.visible = el.visible;
    m.renderOrder = i;
    if (this.selectedId === el.id && this.helper && this.helper.visible) this.helper.setFromObject(m);
  }

  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  /* تصدير PNG بدقة بيئة العمل */
  exportPNG(ws) {
    const prevQ = this.quality;
    this.quality = Math.max(1.6, Math.min(2.6, (Math.max(ws.w, ws.h) / 1600)));
    this.syncAll(ws);
    const pr = this.renderer.getPixelRatio();
    const cw = this.stageW, ch = this.stageH, aspect = this.camera.aspect;
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(ws.w, ws.h, false);
    this.camera.aspect = ws.w / ws.h;
    this.camera.updateProjectionMatrix();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    const out = document.createElement('canvas');
    out.width = ws.w; out.height = ws.h;
    const ctx = out.getContext('2d');
    if (ws.bg.type === 'color') { ctx.fillStyle = ws.bg.color; ctx.fillRect(0, 0, ws.w, ws.h); }
    else if (ws.bg.type === 'gradient') {
      const a = ((ws.bg.angle || 135) - 90) * Math.PI / 180;
      const cx = ws.w / 2, cy = ws.h / 2, len = Math.abs(ws.w * Math.cos(a)) + Math.abs(ws.h * Math.sin(a));
      const g = ctx.createLinearGradient(cx - Math.cos(a) * len / 2, cy - Math.sin(a) * len / 2, cx + Math.cos(a) * len / 2, cy + Math.sin(a) * len / 2);
      g.addColorStop(0, ws.bg.from); g.addColorStop(1, ws.bg.to);
      ctx.fillStyle = g; ctx.fillRect(0, 0, ws.w, ws.h);
    }
    ctx.drawImage(this.renderer.domElement, 0, 0, ws.w, ws.h);

    this.quality = prevQ;
    this.renderer.setPixelRatio(pr);
    this.resize(cw, ch);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.syncAll(ws);
    return out.toDataURL('image/png');
  }
}

export { bumpFonts };
