import './styles/reset.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/components.css';

import { renderPortfolio } from './modules/renderer.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initBackground } from './modules/background.js';
import { initSpaceshipCursor } from './modules/spaceship.js';
import { initTheme } from './modules/theme.js';
import { inject } from '@vercel/analytics';

inject();

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  initBackground();
  initSpaceshipCursor();
  initTheme();
  initNavigation();
  initScrollReveal();
});
