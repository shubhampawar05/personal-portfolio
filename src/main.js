/* Application Entry Point */
import './styles/reset.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';

import { renderPortfolio } from './modules/renderer.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initBackground } from './modules/background.js';
import { initSpaceshipCursor } from './modules/spaceship.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render DOM structure from content data
  renderPortfolio();

  // 2. Initialize atmospheric background particle canvas
  initBackground();

  // 3. Initialize custom gray cursor and spaceship companion
  initSpaceshipCursor();

  // 4. Initialize navigation state and scroll observers
  initNavigation();

  // 5. Initialize scroll reveal entrance animations
  initScrollReveal();
});
