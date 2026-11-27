// Entry point for the standalone note pages in /notes.
import './styles/reset.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/notes.css';

import { initTheme } from './modules/theme.js';
import { inject } from '@vercel/analytics';

inject();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
