import Dot from './Dot';

const init = (rootId: string) => {
  const canvas = <HTMLCanvasElement>document.getElementById(rootId);
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;

  let dots = [];

  const ctx = canvas.getContext('2d');

  function populateParticles() {
    dots = [];
    const particleSpacing = 200;
    const particleSlots = [
      Math.floor(width / particleSpacing),
      Math.floor(height / particleSpacing),
    ];
    const margin = 60; // Don't start at x0 and y0
    let x = 0;
    let y = 0;

    // Create a particle grid
    for (let ii = 0; ii <= particleSlots[0]; ii++) {
      for (let jj = 0; jj <= particleSlots[1]; jj++) {
        x = ii * particleSpacing + margin;
        y = jj * particleSpacing + margin;
        dots.push(new Dot(x, y, ctx, canvas));
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Create a low chance the particle will animate, so it doesn't look crazy
    for (let i = 0; i < dots.length; i++) {
      let randomChance = Math.random() * 10000;
      dots[i].draw();
      if (randomChance < 2 && dots[i].getStatus() === 'idle') {
        dots[i].animate();
      }
    }

    window.requestAnimationFrame(render);
  }

  function onResize() {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;

    if (window.devicePixelRatio > 1) {
      canvas.width = document.documentElement.clientWidth * 2;
      canvas.height = document.documentElement.clientHeight * 2;
      ctx.scale(2, 2);
    } else {
      canvas.width = width;
      canvas.height = height;
    }
    populateParticles();
  }

  window.addEventListener('resize', onResize);
  onResize();
  render();
};

export default init;
