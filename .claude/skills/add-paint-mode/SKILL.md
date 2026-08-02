---
name: add-paint-mode
description: Step-by-step recipe for adding a new paint mode (brush effect) to the Ink Ripple canvas toy — for example a new particle behaviour like sparks, smoke, confetti, or a new stroke style. Use this whenever the task is to add, design, or wire up a new drawing/paint/brush mode, effect, or tool in the Ink Ripple project. Follows the repo's pure-simulation conventions so the new mode ships with config, wiring, UI, and tests.
---

# Adding a new paint mode to Ink Ripple

Ink Ripple's architecture is built around **modes**. A mode is a named brush
effect (`ripple`, `trail`, `fireworks`) that decides what gets spawned when the
user paints. Adding one is a well-trodden path — follow these steps in order and
the new mode will be pure, tested, and wired into the UI.

Read the `ink-ripple-dev` skill first if you are not already familiar with the
architecture and the "keep physics pure / inject the RNG / constants in config"
rules. They apply to every step below.

Use `sparks` as the running example (a short-lived, gravity-free upward burst).
Substitute your mode name throughout.

## 1. Add tuning constants — `src/config.js`

Add the mode's name to `MODES` and a constants block. Never hard-code these
numbers in logic later.

```js
export const MODES = ['ripple', 'trail', 'fireworks', 'sparks'];

export const SPARKS = {
  count: 16,
  speedBase: 1.5,
  speedJitter: 2,
  drag: 0.9,
  fadePerFrame: 0.03,
  sizeBase: 2,
  sizeJitter: 2,
  hueJitter: 40,
  saturation: 95,
  lightness: 70,
};
```

## 2. Write the pure spawn/step logic

If the mode is **particle-based**, add a `createSparks(x, y, baseHue, brushSize, rng)`
factory to `src/particles.js` that returns an array of particles. Reuse the
shared `Particle` shape and the existing `stepParticle` if the motion fits
(trail-style drag vs firework-style gravity); if it needs new motion, extend
`stepParticle` by branching on `p.kind`.

If the mode is **ring-based** like ripples, mirror `src/ripples.js` instead
(a `create*` + `step*` pair) or add a new sibling module.

Rules: take an `rng` argument, read numbers only from your config block, return
plain data, and set a distinct `kind` on particles so `stepParticle` and the
renderer can tell them apart.

## 3. Emit from the Simulation — `src/simulation.js`

Add a branch to `Simulation.emit()`:

```js
} else if (this.mode === 'sparks') {
  this.particles.push(
    ...createSparks(x, y, this.hue, this.brushSize, this.rng),
  );
}
```

Import your factory at the top of the file. Ripple-style modes push to
`this.ripples`; particle-style modes push to `this.particles`.

## 4. Render it — `src/renderer.js`

`CanvasRenderer.render()` currently draws ripples for `'ripple'` and particles
for everything else. If your mode uses particles with the standard shape, it is
already covered. If it needs bespoke drawing, add a `draw*` method and a branch
in `render()`. Remember: the renderer only reads state and calls `ctx`
methods — it never mutates the simulation.

## 5. Wire the UI — `index.html`

Add an `<option>` to the mode `<select>`:

```html
<option value="sparks">Sparks</option>
```

The value **must** exactly match the string added to `MODES` and used in
`emit()`. No JS change is needed in `main.js` — it reads the select value
generically.

## 6. Test it — `test/`

Add assertions covering the new mode:

- In `test/particles.test.js` (or a new file): seed `mulberry32(1)`, call your
  factory, and assert the particle count, `kind`, starting `life === 1`, and any
  motion invariants. Use `rng = () => 0.5` to zero out symmetric jitter for exact
  checks.
- In `test/simulation.test.js`: set the mode and assert `emit()` produces the
  expected number of objects, and that `setMode('sparks')` does **not** throw
  (it is now a valid mode).
- Keep pure modules at 100% coverage.

## 7. Verify the full gate

```bash
npm run lint && npm run coverage && npm run build
```

## 8. Update docs

Add the new mode to the **Controls** list in `README.md` and note it in
`PROGRESS.md`.

## Checklist

- [ ] Name added to `MODES` in `config.js` + a constants block
- [ ] Pure `create*` (and `step*` if needed) logic, RNG-injected
- [ ] `Simulation.emit()` branch + import
- [ ] Rendering handled (default particle path or a new `draw*`)
- [ ] `<option>` added to `index.html` with the exact mode value
- [ ] Tests for the factory and the simulation branch
- [ ] `lint`, `coverage`, `build` all green
- [ ] README + PROGRESS updated
