// Build-time pre-rendering.
//
// The page is filled in by src/modules/renderer.js in the browser, so the raw
// index.html used to ship with empty <section> tags. Crawlers and link-preview
// bots that don't run JavaScript saw no content.
//
// At build time we run the same renderer in Node against a minimal stand-in for
// `document` (the renderer only ever calls querySelector(...).innerHTML = ...),
// then write each section's HTML into index.html. The browser still re-renders
// on load, producing identical markup, so there is a single source of truth.

import { pathToFileURL } from 'node:url';
import path from 'node:path';

// Selector the renderer uses -> the tag in index.html that receives the HTML.
const TARGETS = {
  '#hero': '<section id="hero">',
  '#about': '<section id="about">',
  '#experience': '<section id="experience">',
  '#projects': '<section id="projects">',
  '#skills': '<section id="skills">',
  '#ai-lab': '<section id="ai-lab">',
  '#notes': '<section id="notes">',
  '#exploring': '<section id="exploring">',
  '#achievements': '<section id="achievements">',
  '#contact': '<section id="contact">',
  'footer .footer-inner': '<div class="container footer-inner">'
};

export function prerenderSections() {
  return {
    name: 'prerender-sections',
    apply: 'build',
    async transformIndexHtml(html, ctx) {
      // Only the home page has these sections.
      if (!ctx.filename.endsWith(`${path.sep}index.html`) || ctx.filename.includes(`${path.sep}notes${path.sep}`)) {
        return html;
      }

      const rendered = {};
      const previousDocument = globalThis.document;
      globalThis.document = {
        querySelector: (selector) => (rendered[selector] ??= { innerHTML: '' })
      };

      try {
        const rendererUrl = pathToFileURL(path.resolve('src/modules/renderer.js')).href;
        const { renderPortfolio } = await import(rendererUrl);
        renderPortfolio();
      } finally {
        globalThis.document = previousDocument;
      }

      for (const [selector, openTag] of Object.entries(TARGETS)) {
        const content = rendered[selector]?.innerHTML;
        if (!content) throw new Error(`prerender: renderer produced nothing for ${selector}`);
        if (!html.includes(openTag)) throw new Error(`prerender: ${openTag} not found in index.html`);
        html = html.replace(openTag, openTag + content);
      }
      return html;
    }
  };
}
