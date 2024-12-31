const animatedBg = document.querySelector('.animated-bg');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const x = (clientX / window.innerWidth) * 100;
  const y = (clientY / window.innerHeight) * 100;

  animatedBg.style.backgroundPosition = `${x}% ${y}%`;
});
