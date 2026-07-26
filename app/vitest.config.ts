import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

/**
 * Separate Vitest config (avoids the dual-Vite type clash with the PWA plugin).
 * JSX/TSX is handled by esbuild via the tsconfig `jsx: react-jsx` setting, so no
 * React plugin is needed for tests.
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['e2e/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/domain/**/*.ts', 'src/infra/**/*.ts', 'src/app/**/*.ts'],
    },
  },
});
