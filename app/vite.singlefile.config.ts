import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { fileURLToPath, URL } from 'node:url';

/**
 * Single-file build: inlines all JS/CSS into one index.html for easy sharing /
 * quick testing in a sandboxed page. No PWA/service worker (not needed and not
 * allowed in a sandboxed embed); the app is otherwise identical and works fully
 * offline with the Mock AI provider + Web Speech.
 */
export default defineConfig({
  base: './',
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    sourcemap: false,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 10_000,
  },
});
