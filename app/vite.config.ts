import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Olá Brasil — پرتغالی برای ما',
        short_name: 'Olá Brasil',
        description:
          'آموزش پرتغالی برزیلی برای فارسی‌زبانان، با مسیر ویژهٔ شهروندی برزیل.',
        lang: 'fa',
        dir: 'rtl',
        theme_color: '#0e7490',
        background_color: '#0b1120',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
