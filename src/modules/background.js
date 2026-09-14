/* Radial glow background with subtle particles */

export function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const count = window.innerWidth < 640 ? 40 : 80;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.3 + 0.05;
      this.vx = (Math.random() - 0.5) * 0.1;
      this.vy = (Math.random() - 0.5) * 0.1;
    }
    update() {
      if (isReducedMotion) return;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) particles.push(new Particle());

  function drawGlow() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const cx = window.innerWidth * 0.65;
    const cy = window.innerHeight * 0.35;

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(window.innerWidth, window.innerHeight) * 0.5);
    if (isLight) {
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      grad.addColorStop(1, 'rgba(248, 250, 252, 0)');
    } else {
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      grad.addColorStop(0.4, 'rgba(37, 99, 235, 0.04)');
      grad.addColorStop(1, 'rgba(6, 8, 15, 0)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function loop() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawGlow();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  loop();
}
