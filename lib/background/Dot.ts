import gsap from 'gsap';

class Dot {
  x: number;
  y: number;
  radius: number;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  status: 'idle' | 'busy';

  constructor(
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) {
    this.x = x;
    this.y = y;
    this.radius = 3;
    this.ctx = ctx;
    this.canvas = canvas;
    this.status = 'idle';
  }

  getStatus() {
    return this.status;
  }

  animate() {
    // Don't let a new animation start until the current one has concluded
    if (this.status === 'idle') {
      this.status = 'busy';

      const timeline = gsap.timeline({repeat: 0});
      timeline.to(this, {
        x: this.x + gsap.utils.random([-15, 15, 1]),
        duration: 0.3,
        ease: 'power4.out',
      });
      timeline.to(this, {
        y: this.y + gsap.utils.random([-15, 15, 1]),
        duration: 0.3,
        ease: 'power4.out',
      });
      timeline.to(this, {
        x: this.x,
        duration: 0.3,
        ease: 'power4.out',
      });
      timeline
        .to(this, {
          y: this.y,
          duration: 0.3,
          ease: 'power4.out',
        })
        .then(() => (this.status = 'idle'));
    }
  }

  draw() {
    // Fade this dot if it's near the center of the page
    this.ctx.globalAlpha = Math.abs(
      1 - (this.x + this.canvas.clientWidth / 2) / this.canvas.clientWidth,
    );

    this.ctx.fillStyle = '#f25f4c';

    this.ctx.fillRect(
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2,
    );
  }
}

export default Dot;
