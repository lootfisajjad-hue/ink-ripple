const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const modeSelect = document.getElementById('mode');
const hueSlider = document.getElementById('hue');
const sizeSlider = document.getElementById('size');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

let width, height, dpr;
function resize() {
  dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#0b0c10';
  ctx.fillRect(0, 0, width, height);
}
window.addEventListener('resize', resize);
resize();

let particles = [];
let ripples = [];
let pointer = { x: width / 2, y: height / 2, down: false, lastX: 0, lastY: 0 };

function baseHue() {
  return Number(hueSlider.value);
}
function brushSize() {
  return Number(sizeSlider.value);
}

// ---- Ripple mode ----
function spawnRipple(x, y) {
  ripples.push({
    x, y,
    r: 2,
    maxR: brushSize() * 4 + Math.random() * 40,
    hue: (baseHue() + Math.random() * 60 - 30 + 360) % 360,
    alpha: 0.9,
  });
}

function drawRipples() {
  ripples.forEach(r => {
    r.r += 2.4;
    r.alpha -= 0.012;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${r.hue}, 90%, 65%, ${Math.max(r.alpha, 0)})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  });
  ripples = ripples.filter(r => r.alpha > 0 && r.r < r.maxR + 60);
}

// ---- Flow trail mode ----
function spawnTrailParticles(x, y, vx, vy) {
  const count = 3;
  for (let i = 0; i < count; i++) {
    particles.push({
      x, y,
      vx: vx * 0.2 + (Math.random() - 0.5) * 1.5,
      vy: vy * 0.2 + (Math.random() - 0.5) * 1.5,
      life: 1,
      size: brushSize() * (0.3 + Math.random() * 0.7),
      hue: (baseHue() + Math.random() * 50 - 25 + 360) % 360,
      kind: 'trail',
    });
  }
}

// ---- Fireworks mode ----
function spawnFirework(x, y) {
  const count = 40;
  const speedBase = 2 + Math.random() * 3;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.2;
    const speed = speedBase * (0.5 + Math.random() * 0.7);
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: brushSize() * 0.3 + Math.random() * 3,
      hue: (baseHue() + Math.random() * 80 - 40 + 360) % 360,
      kind: 'firework',
      gravity: 0.03,
    });
  }
}

function drawParticles() {
  particles.forEach(p => {
    if (p.kind === 'firework') {
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.vy *= 0.99;
    } else {
      p.vx *= 0.94;
      p.vy *= 0.94;
    }
    p.x += p.vx;
    p.y += p.vy;
    p.life -= p.kind === 'firework' ? 0.014 : 0.02;

    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(p.size * p.life, 0.5), 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${Math.max(p.life, 0)})`;
    ctx.fill();
  });
  particles = particles.filter(p => p.life > 0);
}

// ---- Main loop ----
function fadeCanvas() {
  ctx.fillStyle = 'rgba(11, 12, 16, 0.12)';
  ctx.fillRect(0, 0, width, height);
}

function loop() {
  fadeCanvas();
  const mode = modeSelect.value;
  if (mode === 'ripple') drawRipples();
  else drawParticles();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// ---- Input handling ----
function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches && e.touches[0]) {
    return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
  }
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function handleDown(e) {
  pointer.down = true;
  const pos = getPos(e);
  pointer.x = pointer.lastX = pos.x;
  pointer.y = pointer.lastY = pos.y;
  act(pos.x, pos.y, 0, 0);
}

function handleMove(e) {
  const pos = getPos(e);
  const vx = pos.x - pointer.lastX;
  const vy = pos.y - pointer.lastY;
  if (pointer.down) {
    act(pos.x, pos.y, vx, vy);
  }
  pointer.lastX = pos.x;
  pointer.lastY = pos.y;
}

function handleUp() {
  pointer.down = false;
}

function act(x, y, vx, vy) {
  const mode = modeSelect.value;
  if (mode === 'ripple') spawnRipple(x, y);
  else if (mode === 'trail') spawnTrailParticles(x, y, vx, vy);
  else if (mode === 'fireworks') spawnFirework(x, y);
}

canvas.addEventListener('mousedown', handleDown);
canvas.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleUp);

canvas.addEventListener('touchstart', e => { e.preventDefault(); handleDown(e); }, { passive: false });
canvas.addEventListener('touchmove', e => { e.preventDefault(); handleMove(e); }, { passive: false });
canvas.addEventListener('touchend', handleUp);

clearBtn.addEventListener('click', () => {
  particles = [];
  ripples = [];
  ctx.fillStyle = '#0b0c10';
  ctx.fillRect(0, 0, width, height);
});

saveBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = `ink-ripple-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});
