/**
 * Browser entry point. Wires the DOM controls and pointer input to a
 * {@link Simulation} and drives a {@link CanvasRenderer} on each animation
 * frame.
 *
 * The heavy lifting lives in the pure modules; this file is deliberately thin
 * and is the only place that touches `window`, `document`, and the canvas.
 */

import './style.css';
import { Simulation } from './simulation.js';
import { CanvasRenderer } from './renderer.js';
import { DEFAULTS } from './config.js';

/**
 * Read the current pointer position from a mouse or touch event, relative to
 * the canvas.
 * @param {HTMLCanvasElement} canvas
 * @param {MouseEvent | TouchEvent} e
 * @returns {{ x: number, y: number }}
 */
export function getPointerPosition(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  const touch = /** @type {TouchEvent} */ (e).touches?.[0];
  if (touch) {
    return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  }
  const me = /** @type {MouseEvent} */ (e);
  return { x: me.clientX - rect.left, y: me.clientY - rect.top };
}

/**
 * Boot the app against a given canvas and control set.
 *
 * @param {Object} deps
 * @param {HTMLCanvasElement} deps.canvas
 * @param {HTMLSelectElement} deps.modeSelect
 * @param {HTMLInputElement} deps.hueSlider
 * @param {HTMLInputElement} deps.sizeSlider
 * @param {HTMLButtonElement} deps.clearBtn
 * @param {HTMLButtonElement} deps.saveBtn
 * @param {Window} [deps.win]
 * @returns {{ simulation: Simulation, renderer: CanvasRenderer, destroy: () => void }}
 */
export function initApp({
  canvas,
  modeSelect,
  hueSlider,
  sizeSlider,
  clearBtn,
  saveBtn,
  win = window,
}) {
  const ctx = canvas.getContext('2d');
  const simulation = new Simulation({
    mode: modeSelect.value || DEFAULTS.mode,
    hue: Number(hueSlider.value),
    brushSize: Number(sizeSlider.value),
  });
  const renderer = new CanvasRenderer(ctx);

  const pointer = { lastX: 0, lastY: 0, down: false };

  function resize() {
    const dpr = win.devicePixelRatio || 1;
    const width = win.innerWidth;
    const height = win.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    renderer.setSize(width, height);
    renderer.fillBackground();
  }

  function pointerDown(e) {
    pointer.down = true;
    const { x, y } = getPointerPosition(canvas, e);
    pointer.lastX = x;
    pointer.lastY = y;
    simulation.emit(x, y, 0, 0);
  }

  function pointerMove(e) {
    const { x, y } = getPointerPosition(canvas, e);
    const vx = x - pointer.lastX;
    const vy = y - pointer.lastY;
    if (pointer.down) {
      simulation.emit(x, y, vx, vy);
    }
    pointer.lastX = x;
    pointer.lastY = y;
  }

  function pointerUp() {
    pointer.down = false;
  }

  // --- DOM wiring ---
  modeSelect.addEventListener('change', () =>
    simulation.setMode(modeSelect.value),
  );
  hueSlider.addEventListener('input', () =>
    simulation.setHue(Number(hueSlider.value)),
  );
  sizeSlider.addEventListener('input', () =>
    simulation.setBrushSize(Number(sizeSlider.value)),
  );

  clearBtn.addEventListener('click', () => {
    simulation.clear();
    renderer.fillBackground();
  });

  saveBtn.addEventListener('click', () => {
    const link = win.document.createElement('a');
    link.download = `ink-ripple-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  canvas.addEventListener('mousedown', pointerDown);
  canvas.addEventListener('mousemove', pointerMove);
  win.addEventListener('mouseup', pointerUp);
  canvas.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      pointerDown(e);
    },
    { passive: false },
  );
  canvas.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      pointerMove(e);
    },
    { passive: false },
  );
  canvas.addEventListener('touchend', pointerUp);
  win.addEventListener('resize', resize);

  resize();

  let frame = 0;
  function loop() {
    simulation.step();
    renderer.render(simulation);
    frame = win.requestAnimationFrame(loop);
  }
  frame = win.requestAnimationFrame(loop);

  return {
    simulation,
    renderer,
    destroy() {
      win.cancelAnimationFrame(frame);
      win.removeEventListener('resize', resize);
      win.removeEventListener('mouseup', pointerUp);
    },
  };
}

/**
 * Auto-boot when loaded in a real browser with the expected markup present.
 */
export function bootstrap(doc = document) {
  const canvas = doc.getElementById('canvas');
  if (!canvas) return null;
  return initApp({
    canvas,
    modeSelect: doc.getElementById('mode'),
    hueSlider: doc.getElementById('hue'),
    sizeSlider: doc.getElementById('size'),
    clearBtn: doc.getElementById('clearBtn'),
    saveBtn: doc.getElementById('saveBtn'),
  });
}

// Only auto-start in a browser environment, never under a test runner.
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  bootstrap();
}
