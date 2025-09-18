document.addEventListener('DOMContentLoaded', () => {
  console.log("Evento JS cargado correctamente");

  const boton = document.getElementById('btn-loteria-patron');
  const overlay = document.getElementById('overlay-patrones');
  const cerrar = document.querySelector('.cerrar-overlay');

  if (boton && overlay && cerrar) {
    boton.addEventListener('click', () => {
      overlay.classList.remove('oculto');
      // Refuerzo visual directo
  overlay.style.display = 'flex';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlay.style.zIndex = '10000';

      
    });

    cerrar.addEventListener('click', () => {
      overlay.classList.add('oculto');
      overlay.removeAttribute('style'); // Limpia estilos inline al cerrar
    });
  } else {
    console.warn("No se encontró uno de los elementos necesarios");
  }
});