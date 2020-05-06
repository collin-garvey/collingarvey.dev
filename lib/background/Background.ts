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
    const particleSlotsX = Math.floor(width / particleSpacing);
    const particleSlotsY = Math.floor(height / particleSpacing);
    const margin = 60;
    let x = 0;
    let y = 0;

    for (let ii = 0; ii <= particleSlotsX; ii++) {
      for (let jj = 0; jj <= particleSlotsY; jj++) {
        x = ii * particleSpacing + margin;
        y = jj * particleSpacing + margin;
        dots.push(new Dot(x, y, ctx, canvas));
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

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
  // populateParticles();
  render();
};

export default init;
