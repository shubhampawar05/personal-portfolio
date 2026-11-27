import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { prerenderSections } from './scripts/prerender-plugin.js';

// Every notes/*.html file is its own page in the build.
const notePages = Object.fromEntries(
  readdirSync(resolve(__dirname, 'notes'))
    .filter((file) => file.endsWith('.html'))
    .map((file) => [`notes/${file.replace(/\.html$/, '')}`, resolve(__dirname, 'notes', file)])
);

export default defineConfig({
  plugins: [prerenderSections()],
  base: './',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...notePages,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
