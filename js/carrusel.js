const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('activo');
  index = (index + 1) % slides.length;
  slides[index].classList.add('activo');
}, 4000);

document.getElementById('iniciarBtn').addEventListener('click', () => {
  document.getElementById('musicaFondo').pause();
  window.location.href = 'index.html';
});

// Modulo que reproduce musica de fondo 
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('musicaFondo');

  // Reproduce al primer clic en cualquier parte del documento
  document.body.addEventListener('click', () => {
    audio.play();
  }, { once: true });
});