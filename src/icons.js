// icons.js — أيقونات SVG بأسلوب أحادي بسيط (أبيض/أسود)
function svg(inner, size = 18, fill = false) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}
const P = {
  logo: '<path d="M4 6c5.5-3 10.5 3 16 0v12c-5.5 3-10.5-3-16 0z"/><path d="M4 6v12M20 6v12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15.5l-4.5-4.5L6 21.5"/>',
  type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
  trash: '<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/>',
  eye: '<path d="M1 12s4-7.5 11-7.5S23 12 23 12s-4 7.5-11 7.5S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M2 12s4-7.5 11-7.5c2 0 3.8.7 5.3 1.7M22 12s-4 7.5-11 7.5c-2 0-3.8-.7-5.3-1.7M3 3l18 18"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.9-.9"/>',
  undo: '<path d="M3 7v6h6M21 17a9 9 0 0 0-15-6.7L3 13"/>',
  redo: '<path d="M21 7v6h-6M3 17a9 9 0 0 1 15-6.7L21 13"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  help: '<circle cx="12" cy="12" r="9.5"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4M12 17.5h.01"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  grip: '<circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/>',
  close: '<path d="M18 6L6 18M6 6l12 12"/>',
  fit: '<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  rotate: '<path d="M23 4v6h-6M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/>',
  move: '<path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  down: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  board: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/>',
  orbit: '<circle cx="12" cy="12" r="3.5"/><path d="M20.6 8.6c1 3.6-2.4 8-8.6 10.6S1.4 20.9 2.7 17.3"/><path d="M23 4v6h-6"/>',
  layers: '<path d="M12 2l10 5.5L12 13 2 7.5z"/><path d="M2 12.5L12 18l10-5.5M2 17.5L12 23l10-5.5"/>',
  front: '<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/>',
  back: '<path d="M3 12l9 5 9-5"/><path d="M12 2l9 5-9 5-9-5z"/>',
  dragfile: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  palette: '<circle cx="12" cy="12" r="9.5"/><circle cx="8.5" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="15.5" cy="10" r="1.2"/><path d="M12 21.5c-2-1.5-1.5-4.5 1.5-4.5 1 0 2-.8 2-1.8"/>'
};
export function icon(name, size) { return svg(P[name] || P.help, size); }
export const iconNames = P;
