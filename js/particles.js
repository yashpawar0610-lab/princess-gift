/**
 * Romantic Particle & Sparkle Canvas Engine
 * Floating hearts, champagne sparkles, fairy dust, and interactive click bursts
 */

class RomanticParticles {
  constructor() {
    this.canvas = document.getElementById('particleCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.burstParticles = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.maxParticles = window.innerWidth < 768 ? 28 : 55;
    this.colors = ['#f4d9b4', '#e2a7a1', '#fcd5ce', '#ffb5a7', '#ffcad4', '#ffffff'];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Generate initial ambient particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    // Interactive click bursts
    window.addEventListener('click', (e) => {
      // Don't burst if clicking directly on a button or modal interactive element to prevent distraction
      if (e.target.closest('button, input, a, .lightbox-content')) return;
      this.createBurst(e.clientX, e.clientY);
    });

    // Touch burst for mobile
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        if (e.target.closest('button, input, a, .lightbox-content')) return;
        this.createBurst(touch.clientX, touch.clientY, 8);
      }
    }, { passive: true });

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticle(randomY = false) {
    const isHeart = Math.random() > 0.45;
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 20,
      size: Math.random() * (isHeart ? 14 : 4) + 6,
      speedY: Math.random() * 0.8 + 0.35,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.5 + 0.2,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      isHeart: isHeart,
      sway: Math.random() * 2,
      swaySpeed: Math.random() * 0.01 + 0.005,
      swayOffset: Math.random() * Math.PI * 2
    };
  }

  createBurst(x, y, count = 16) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      this.burstParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: Math.random() * 14 + 8,
        gravity: 0.12,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 35,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        isHeart: Math.random() > 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15
      });
    }
  }

  triggerLoveShower() {
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        this.burstParticles.push({
          x: Math.random() * this.width,
          y: -20,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 3 + 2,
          size: Math.random() * 16 + 10,
          gravity: 0.05,
          opacity: 1,
          life: 0,
          maxLife: 100,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          isHeart: true,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.08
        });
      }, i * 60);
    }
  }

  drawHeart(x, y, size, color, opacity, rotation = 0) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.beginPath();
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = color;

    const scale = size / 30;
    this.ctx.scale(scale, scale);

    // Heart path formula
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(-15, -15, -30, 5, 0, 30);
    this.ctx.bezierCurveTo(30, 5, 15, -15, 0, 0);
    this.ctx.fill();

    this.ctx.restore();
  }

  drawSparkle(x, y, size, color, opacity) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = color;

    // 4-point star sparkle
    this.ctx.beginPath();
    this.ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(0, -size);
    this.ctx.lineTo(size * 0.2, -size * 0.2);
    this.ctx.lineTo(size, 0);
    this.ctx.lineTo(size * 0.2, size * 0.2);
    this.ctx.lineTo(0, size);
    this.ctx.lineTo(-size * 0.2, size * 0.2);
    this.ctx.lineTo(-size, 0);
    this.ctx.lineTo(-size * 0.2, -size * 0.2);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Ambient floating particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y -= p.speedY;
      p.x += p.speedX + Math.sin(p.swayOffset) * 0.35;
      p.swayOffset += p.swaySpeed;
      p.rotation += p.rotationSpeed;

      if (p.isHeart) {
        this.drawHeart(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
      } else {
        this.drawSparkle(p.x, p.y, p.size, p.color, p.opacity);
      }

      // Reset when particle goes above screen
      if (p.y < -30) {
        this.particles[i] = this.createParticle(false);
      }
    }

    // Burst particles
    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const bp = this.burstParticles[i];
      bp.x += bp.vx;
      bp.y += bp.vy;
      bp.vy += bp.gravity;
      bp.rotation += bp.rotSpeed;
      bp.life++;
      bp.opacity = Math.max(0, 1 - (bp.life / bp.maxLife));

      if (bp.isHeart) {
        this.drawHeart(bp.x, bp.y, bp.size, bp.color, bp.opacity, bp.rotation);
      } else {
        this.drawSparkle(bp.x, bp.y, bp.size, bp.color, bp.opacity);
      }

      if (bp.life >= bp.maxLife || bp.y > this.height + 50) {
        this.burstParticles.splice(i, 1);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.romanticParticles = new RomanticParticles();

  const showerBtn = document.getElementById('loveShowerBtn');
  if (showerBtn) {
    showerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.romanticParticles.triggerLoveShower();
    });
  }
});
