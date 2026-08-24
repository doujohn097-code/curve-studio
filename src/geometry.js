// geometry.js — بناء سطح البطاقة المنحني (انحناء أفقي/عمودي، موجة، التواء)
import * as THREE from 'three';

const D = Math.PI / 180;
const clamp = (v, m) => Math.max(-m, Math.min(m, v));

export function cardKey(w, h, p) {
  return [w.toFixed(2), h.toFixed(2), p.bendX, p.bendY, p.twist, p.waveAmp, p.waveCount].join('|');
}

export function buildCardGeometry(w, h, p) {
  const geo = new THREE.PlaneGeometry(w, h, 110, 110);
  deformCard(geo, w, h, p);
  return geo;
}

export function deformCard(geo, w, h, p) {
  const pos = geo.attributes.position;
  const bX = clamp(p.bendX || 0, 175) * D;
  const bY = clamp(p.bendY || 0, 175) * D;
  const tw = clamp(p.twist || 0, 360) * D;
  const wa = clamp(p.waveAmp || 0, 60);
  const wn = p.waveCount || 1;
  const Rx = bX !== 0 ? w / bX : 0;
  const Ry = bY !== 0 ? h / bY : 0;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = 0;
    if (wa) z += wa * Math.sin((x / w) * Math.PI * 2 * wn);
    if (Ry) { const f = y / Ry; y = Ry * Math.sin(f); z += Ry * (1 - Math.cos(f)); }
    if (Rx) { const f = x / Rx; x = Rx * Math.sin(f); z += Rx * (1 - Math.cos(f)); }
    if (tw) { const a = tw * (y / h); const c = Math.cos(a), s = Math.sin(a); const nx = x * c + z * s; z = -x * s + z * c; x = nx; }
    pos.setXYZ(i, x, y, z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}
