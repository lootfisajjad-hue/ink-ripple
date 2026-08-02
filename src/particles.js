/**
 * Particle modes: flow trails and fireworks.
 *
 * Both produce particles that share a common shape and stepping routine but
 * differ in how they are spawned and how they decelerate. Everything here is
 * pure and RNG-injected for deterministic testing.
 */

import { TRAIL, FIREWORK } from './config.js';
import { jitterHue } from './color.js';

/**
 * @typedef {Object} Particle
 * @property {number} x
 * @property {number} y
 * @property {number} vx
 * @property {number} vy
 * @property {number} life - 1 at birth, drops toward 0.
 * @property {number} size
 * @property {number} hue
 * @property {'trail' | 'firework'} kind
 * @property {number} [gravity] - only present on fireworks.
 */

/**
 * Spawn a small burst of trail particles that inherit some pointer velocity.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} vx - pointer velocity x.
 * @param {number} vy - pointer velocity y.
 * @param {number} baseHue
 * @param {number} brushSize
 * @param {() => number} rng
 * @returns {Particle[]}
 */
export function createTrailParticles(x, y, vx, vy, baseHue, brushSize, rng) {
  const out = [];
  for (let i = 0; i < TRAIL.countPerEmit; i++) {
    out.push({
      x,
      y,
      vx: vx * TRAIL.velocityInherit + (rng() - 0.5) * TRAIL.velocityJitter,
      vy: vy * TRAIL.velocityInherit + (rng() - 0.5) * TRAIL.velocityJitter,
      life: 1,
      size: brushSize * (TRAIL.sizeMinFactor + rng() * TRAIL.sizeJitterFactor),
      hue: jitterHue(baseHue, TRAIL.hueJitter, rng),
      kind: 'trail',
    });
  }
  return out;
}

/**
 * Spawn a radial burst of firework particles subject to gravity.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} baseHue
 * @param {number} brushSize
 * @param {() => number} rng
 * @returns {Particle[]}
 */
export function createFirework(x, y, baseHue, brushSize, rng) {
  const out = [];
  const speedBase = FIREWORK.speedBase + rng() * FIREWORK.speedJitter;
  for (let i = 0; i < FIREWORK.count; i++) {
    const angle =
      (Math.PI * 2 * i) / FIREWORK.count + rng() * FIREWORK.angleJitter;
    const speed =
      speedBase *
      (FIREWORK.speedMinFactor + rng() * FIREWORK.speedJitterFactor);
    out.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: brushSize * FIREWORK.sizeBaseFactor + rng() * FIREWORK.sizeJitter,
      hue: jitterHue(baseHue, FIREWORK.hueJitter, rng),
      kind: 'firework',
      gravity: FIREWORK.gravity,
    });
  }
  return out;
}

/**
 * Advance a single particle by one frame (mutates and returns it).
 * @param {Particle} p
 * @returns {Particle}
 */
export function stepParticle(p) {
  if (p.kind === 'firework') {
    p.vy += p.gravity;
    p.vx *= FIREWORK.drag;
    p.vy *= FIREWORK.drag;
    p.life -= FIREWORK.fadePerFrame;
  } else {
    p.vx *= TRAIL.drag;
    p.vy *= TRAIL.drag;
    p.life -= TRAIL.fadePerFrame;
  }
  p.x += p.vx;
  p.y += p.vy;
  return p;
}

/**
 * The visual radius of a particle at its current life.
 * @param {Particle} p
 * @returns {number}
 */
export function particleRadius(p) {
  return Math.max(p.size * p.life, 0.5);
}

/**
 * True while a particle still has life left.
 * @param {Particle} p
 * @returns {boolean}
 */
export function isParticleAlive(p) {
  return p.life > 0;
}

/**
 * Advance every particle one frame and drop the dead ones.
 * @param {Particle[]} particles
 * @returns {Particle[]} the surviving particles.
 */
export function stepParticles(particles) {
  return particles.map(stepParticle).filter(isParticleAlive);
}
