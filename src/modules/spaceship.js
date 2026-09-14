/* Custom cursor with code-bracket companion and trail */

export function initSpaceshipCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursorDot = document.createElement('div');
  cursorDot.id = 'custom-cursor';
  cursorDot.innerHTML = `
    <div class="cursor-dot-inner"></div>
    <div class="cursor-ring-outer"></div>
  `;
  document.body.appendChild(cursorDot);

  const companion = document.createElement('div');
  companion.id = 'cursor-companion';
  companion.innerHTML = `
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" class="companion-svg">
      <g class="thruster-flames">
        <path d="M 20 36 C 20 42 24 45 24 45 C 24 45 28 42 28 36 Z" fill="url(#thruster-blue)" class="flame-core"/>
        <path d="M 21 34 C 21 39 24 42 24 42 C 24 42 27 39 27 34 Z" fill="#FFFFFF" class="flame-inner"/>
      </g>
      <path d="M 12 14 L 8 28 L 14 24 Z" fill="#3b82f6" opacity="0.9"/>
      <path d="M 36 14 L 40 28 L 34 24 Z" fill="#60a5fa" opacity="0.9"/>
      <rect x="14" y="12" width="20" height="22" rx="3" fill="#111827" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="24" y="26" text-anchor="middle" fill="#60a5fa" font-family="monospace" font-size="11" font-weight="bold">&lt;/&gt;</text>
      <circle cx="24" cy="10" r="2" fill="#93c5fd"/>
      <defs>
        <linearGradient id="thruster-blue" x1="24" y1="34" x2="24" y2="45" gradientUnits="userSpaceOnUse">
          <stop stop-color="#60a5fa" stop-opacity="0.9"/>
          <stop offset="0.6" stop-color="#3b82f6" stop-opacity="0.7"/>
          <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  `;
  document.body.appendChild(companion);

  const TRAIL_COUNT = 6;
  const trailDots = [];
  for (let i = 0; i < TRAIL_COUNT; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    const size = 5 - i * 0.6;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    document.body.appendChild(dot);
    trailDots.push({ el: dot, x: -100, y: -100 });
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let hasUserMovedMouse = false;
  let shipX = mouseX;
  let shipY = mouseY;
  let shipAngle = 0;
  let isMoving = false;
  let moveTimeout = null;
  const trailPositions = Array(TRAIL_COUNT).fill(null).map(() => ({ x: mouseX, y: mouseY }));

  window.addEventListener('mousemove', (e) => {
    hasUserMovedMouse = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    isMoving = true;
    companion.classList.add('companion-thrusting');

    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      isMoving = false;
      companion.classList.remove('companion-thrusting');
    }, 250);
  });

  function animate() {
    const targetX = mouseX + (isMoving ? 20 : 0);
    const targetY = mouseY + (isMoving ? 20 : 0);

    shipX += (targetX - shipX) * 0.045;
    shipY += (targetY - shipY) * 0.045;

    const moveDx = mouseX - shipX;
    const moveDy = mouseY - shipY;
    if (Math.hypot(moveDx, moveDy) > 2) {
      shipAngle = Math.atan2(moveDy, moveDx) * (180 / Math.PI) + 90;
    }

    const floatOffset = isMoving ? 0 : Math.sin(Date.now() / 360) * 5;
    companion.style.transform = `translate3d(${shipX}px, ${shipY + floatOffset}px, 0) rotate(${shipAngle}deg)`;

    trailPositions.unshift({ x: mouseX, y: mouseY });
    trailPositions.length = TRAIL_COUNT;

    trailDots.forEach((dot, i) => {
      const pos = trailPositions[i + 1] || trailPositions[trailPositions.length - 1];
      if (!pos) return;
      const lag = 0.15 + i * 0.08;
      dot.x += (pos.x - dot.x) * lag;
      dot.y += (pos.y - dot.y) * lag;
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const baseOpacity = isLight ? 0.7 : 0.5;
      const opacity = Math.max(0, baseOpacity - i * 0.1);
      dot.el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
      dot.el.style.opacity = isMoving ? opacity : opacity * (isLight ? 0.45 : 0.3);
    });

    requestAnimationFrame(animate);
  }

  animate();

  const interactiveTargets = 'a, button, .exp-card, .project-featured, .project-card, .btn-primary, .btn-secondary, .social-link';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveTargets)) {
      companion.classList.add('companion-hover');
      cursorDot.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveTargets)) {
      companion.classList.remove('companion-hover');
      cursorDot.classList.remove('cursor-hover');
    }
  });
}
