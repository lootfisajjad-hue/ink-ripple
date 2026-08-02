import { defineConfig } from 'vite';

export default defineConfig({
  // The app is deployed to a subpath on GitHub Pages; relative base keeps the
  // built asset URLs correct regardless of where it is hosted.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  test: {
    environment: 'node',
    include: ['test/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.js'],
      // main.js is exercised by the jsdom integration test but is mostly DOM
      // glue; the pure modules are what we hold to a high bar.
      exclude: ['src/main.js'],
    },
  },
});
