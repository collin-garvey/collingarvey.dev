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
    this.radius = 2;
    this.ctx = ctx;
    this.canvas = canvas;
    this.status = 'idle';
  }

  getStatus() {
    return this.status;
  }

  animate() {
    if (this.status === 'idle') {
      this.status = 'busy';

      const timeline = gsap.timeline({repeat: 0});
      timeline.to(this, {
        x: this.x + Math.floor(Math.random() * 20),
        duration: 0.3,
      });
      timeline.to(this, {
        y: this.y - Math.floor(Math.random() * 20),
        duration: 0.3,
      });
      timeline.to(this, {
        x: this.x,
        duration: 0.3,
      });
      timeline
        .to(this, {
          y: this.y,
          duration: 0.3,
        })
        .then(() => (this.status = 'idle'));
    }
  }

  draw() {
    this.ctx.globalAlpha = Math.abs(
      1 - (this.x + this.canvas.clientWidth / 2) / this.canvas.clientWidth,
    );
    // console.log(this.x / (this.canvas.clientWidth / 2));
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
