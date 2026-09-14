/* Background Module: Dense Cosmic Stardust Canvas */

export function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = -1000, mouseY = -1000;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 640;
  const particleCount = isMobile ? 85 : 165; // Increased density

  function resize() {
    canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
    canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 2);
    ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2));
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Emerald & Violet Stardust Palette
  const colors = [
    { r: 234, g: 234, b: 234, baseAlpha: 0.24 },
    { r: 16, g: 185, b: 129, baseAlpha: 0.22 },
    { r: 139, g: 92, b: 246, baseAlpha: 0.22 },
    { r: 52, g: 211, b: 153, baseAlpha: 0.18 },
    { r: 167, g: 139, b: 250, baseAlpha: 0.18 }
  ];

  class StardustParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 2.0 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.16;
      this.vy = (Math.random() - 0.5) * 0.16;
      this.colorObj = colors[Math.floor(Math.random() * colors.length)];
      this.twinkleSpeed = Math.random() * 0.025 + 0.008;
      this.twinkleAngle = Math.random() * Math.PI * 2;
    }

    update() {
      if (isReducedMotion) return;

      this.x += this.vx;
      this.y += this.vy;
      this.twinkleAngle += this.twinkleSpeed;

      // Wrap viewport boundaries
      if (this.x < 0) this.x = window.innerWidth;
      if (this.x > window.innerWidth) this.x = 0;
      if (this.y < 0) this.y = window.innerHeight;
      if (this.y > window.innerHeight) this.y = 0;

      // Mouse repulsion
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
      const currentAlpha = this.colorObj.baseAlpha * (0.6 + Math.sin(this.twinkleAngle) * 0.4);
      const { r, g, b } = this.colorObj;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new StardustParticle());
  }

  function loop() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(loop);
  }

  loop();
}
