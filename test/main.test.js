// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPointerPosition, initApp } from '../src/main.js';
import { FIREWORK } from '../src/config.js';

function mockCtx() {
  return {
    fillStyle: '',
    strokeStyle: '',
    lineWidth: 0,
    setTransform: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    stroke: vi.fn(),
    fill: vi.fn(),
  };
}

/** Build the control DOM the app expects and return the elements. */
function buildDom() {
  document.body.innerHTML = `
    <canvas id="canvas"></canvas>
    <select id="mode">
      <option value="ripple">Ripples</option>
      <option value="trail">Flow Trail</option>
      <option value="fireworks">Fireworks</option>
    </select>
    <input type="range" id="hue" min="0" max="360" value="200" />
    <input type="range" id="size" min="4" max="60" value="18" />
    <button id="clearBtn">Clear</button>
    <button id="saveBtn">Save PNG</button>
  `;
  const canvas = document.getElementById('canvas');
  canvas.getContext = vi.fn(() => mockCtx());
  canvas.getBoundingClientRect = () => ({
    left: 0,
    top: 0,
    width: 800,
    height: 600,
  });
  return {
    canvas,
    modeSelect: document.getElementById('mode'),
    hueSlider: document.getElementById('hue'),
    sizeSlider: document.getElementById('size'),
    clearBtn: document.getElementById('clearBtn'),
    saveBtn: document.getElementById('saveBtn'),
  };
}

describe('getPointerPosition', () => {
  const canvas = {
    getBoundingClientRect: () => ({ left: 10, top: 20 }),
  };

  it('reads mouse coordinates relative to the canvas', () => {
    expect(getPointerPosition(canvas, { clientX: 60, clientY: 70 })).toEqual({
      x: 50,
      y: 50,
    });
  });

  it('prefers the first touch when present', () => {
    const e = { touches: [{ clientX: 110, clientY: 120 }] };
    expect(getPointerPosition(canvas, e)).toEqual({ x: 100, y: 100 });
  });
});

describe('initApp', () => {
  let raf;

  beforeEach(() => {
    // Stop the animation loop from actually iterating.
    raf = vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(1);
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('boots with the control values as initial state', () => {
    const dom = buildDom();
    const { simulation, destroy } = initApp(dom);
    expect(simulation.mode).toBe('ripple');
    expect(simulation.hue).toBe(200);
    expect(simulation.brushSize).toBe(18);
    destroy();
  });

  it('emits on canvas mousedown', () => {
    const dom = buildDom();
    const { simulation, destroy } = initApp(dom);
    dom.canvas.dispatchEvent(
      new MouseEvent('mousedown', { clientX: 100, clientY: 100 }),
    );
    expect(simulation.count).toBe(1); // one ripple
    destroy();
  });

  it('reflects control changes into the simulation', () => {
    const dom = buildDom();
    const { simulation, destroy } = initApp(dom);

    dom.modeSelect.value = 'fireworks';
    dom.modeSelect.dispatchEvent(new Event('change'));
    dom.hueSlider.value = '120';
    dom.hueSlider.dispatchEvent(new Event('input'));
    dom.sizeSlider.value = '40';
    dom.sizeSlider.dispatchEvent(new Event('input'));

    expect(simulation.mode).toBe('fireworks');
    expect(simulation.hue).toBe(120);
    expect(simulation.brushSize).toBe(40);

    dom.canvas.dispatchEvent(
      new MouseEvent('mousedown', { clientX: 10, clientY: 10 }),
    );
    expect(simulation.count).toBe(FIREWORK.count);
    destroy();
  });

  it('clears the simulation when Clear is clicked', () => {
    const dom = buildDom();
    const { simulation, destroy } = initApp(dom);
    dom.canvas.dispatchEvent(
      new MouseEvent('mousedown', { clientX: 10, clientY: 10 }),
    );
    expect(simulation.count).toBeGreaterThan(0);
    dom.clearBtn.click();
    expect(simulation.count).toBe(0);
    destroy();
  });

  it('registers an animation frame on boot', () => {
    const dom = buildDom();
    const { destroy } = initApp(dom);
    expect(raf).toHaveBeenCalled();
    destroy();
  });
});
