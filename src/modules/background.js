/* Stardust particle canvas with mouse repulsion — full effect in both themes */

export function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = -1000, mouseY = -1000;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 640;
  function getParticleCount() {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    if (isMobile) return light ? 100 : 85;
    return light ? 200 : 165;
  }

  let particleCount = getParticleCount();

  const darkColors = [
    { r: 234, g: 234, b: 234, baseAlpha: 0.24 },
    { r: 59, g: 130, b: 246, baseAlpha: 0.22 },
    { r: 96, g: 165, b: 250, baseAlpha: 0.22 },
    { r: 37, g: 99, b: 235, baseAlpha: 0.18 },
    { r: 147, g: 197, b: 253, baseAlpha: 0.18 }
  ];

  const lightColors = [
    { r: 37, g: 99, b: 235, baseAlpha: 0.55 },
    { r: 59, g: 130, b: 246, baseAlpha: 0.5 },
    { r: 29, g: 78, b: 216, baseAlpha: 0.45 },
    { r: 96, g: 165, b: 250, baseAlpha: 0.42 },
    { r: 147, g: 197, b: 253, baseAlpha: 0.38 }
  ];

  function isLight() {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }

  function getColors() {
    return isLight() ? lightColors : darkColors;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  class StardustParticle {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      const light = isLight();
      this.size = light ? Math.random() * 2.4 + 0.8 : Math.random() * 2.0 + 0.6;
      this.vx = (Math.random() - 0.5) * (light ? 0.2 : 0.16);
      this.vy = (Math.random() - 0.5) * (light ? 0.2 : 0.16);
      this.colorObj = getColors()[Math.floor(Math.random() * getColors().length)];
      this.twinkleSpeed = Math.random() * 0.03 + 0.01;
      this.twinkleAngle = Math.random() * Math.PI * 2;
    }

    update() {
      if (isReducedMotion) return;

      this.x += this.vx;
      this.y += this.vy;
      this.twinkleAngle += this.twinkleSpeed;

      if (this.x < 0) this.x = window.innerWidth;
      if (this.x > window.innerWidth) this.x = 0;
      if (this.y < 0) this.y = window.innerHeight;
      if (this.y > window.innerHeight) this.y = 0;

      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140) {
        const force = (140 - dist) / 140;
        this.x -= (dx / dist) * force * 0.6;
        this.y -= (dy / dist) * force * 0.6;
      }
    }

    draw() {
      const light = isLight();
      const twinkle = light
        ? 0.55 + Math.sin(this.twinkleAngle) * 0.45
        : 0.6 + Math.sin(this.twinkleAngle) * 0.4;
      const currentAlpha = this.colorObj.baseAlpha * twinkle;
      const { r, g, b } = this.colorObj;

      if (light) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.18})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new StardustParticle());
    }
  }

  initParticles();

  const themeObserver = new MutationObserver(() => {
    particleCount = getParticleCount();
    initParticles();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  function drawBase() {
    if (isLight()) {
      const grad = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      grad.addColorStop(0, '#dce6f5');
      grad.addColorStop(0.4, '#e8eef6');
      grad.addColorStop(0.7, '#f0f5fc');
      grad.addColorStop(1, '#f5f8fc');
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = '#06080f';
    }
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function drawGlow() {
    const cx = window.innerWidth * 0.65;
    const cy = window.innerHeight * 0.35;
    const radius = Math.max(window.innerWidth, window.innerHeight) * 0.5;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);

    if (isLight()) {
      grad.addColorStop(0, 'rgba(37, 99, 235, 0.38)');
      grad.addColorStop(0.35, 'rgba(59, 130, 246, 0.18)');
      grad.addColorStop(0.7, 'rgba(96, 165, 250, 0.08)');
      grad.addColorStop(1, 'rgba(232, 238, 246, 0)');
    } else {
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      grad.addColorStop(0.4, 'rgba(37, 99, 235, 0.03)');
      grad.addColorStop(1, 'rgba(6, 8, 15, 0)');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Second glow near hero left side for balance
    const cx2 = window.innerWidth * 0.2;
    const cy2 = window.innerHeight * 0.6;
    const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, radius * 0.6);
    if (isLight()) {
      grad2.addColorStop(0, 'rgba(59, 130, 246, 0.22)');
      grad2.addColorStop(1, 'rgba(232, 238, 246, 0)');
    } else {
      grad2.addColorStop(0, 'rgba(37, 99, 235, 0.06)');
      grad2.addColorStop(1, 'rgba(6, 8, 15, 0)');
    }
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function loop() {
    drawBase();
    drawGlow();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  loop();
}
