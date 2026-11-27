import { defineConfig } from 'vite';
import { prerenderSections } from './scripts/prerender-plugin.js';

export default defineConfig({
  plugins: [prerenderSections()],
  base: './',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});

