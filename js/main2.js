import { cargarFichas } from './cargarJSON.js';
import { renderFicha } from './renderFicha.js';

let fichas = [];
let fichaActual = null;

document.addEventListener('DOMContentLoaded', async () => {
  fichas = await cargarFichas();

  const btn = document.getElementById('btnCantarFicha');
  btn.addEventListener('click', () => {
    const input = document.getElementById('inputNumeroFicha');
    const numeroIngresado = parseInt(input.value, 10);

    fichaActual = fichas.find(f => f.id === numeroIngresado);
    if (!fichaActual) {
      console.log(`❌ Ficha con número ${numeroIngresado} no encontrada`);
      return;
    }

    // Activar el modal ceremonial
    const modal = document.getElementById('modalFicha');
    const nombreModal = modal.querySelector('.nombre-ficha-modal');
    const imagenModal = modal.querySelector('.imagen-ficha-modal');

    nombreModal.textContent = fichaActual.nombre;
    imagenModal.src = `./img/${fichaActual.imagen}`;
    modal.classList.remove('oculto');

    // Ocultar automáticamente después de 2 segundos
    setTimeout(() => {
      modal.classList.add('oculto');
    }, 2000);

    // Renderizar ficha en pantalla principal
    renderFicha(fichaActual);
    
    //ficha a la cola
    // Agregar ficha cantada a la cola
    
    const cola = document.getElementById('colaFichas');
    const fichaElemento = document.createElement('div');
    fichaElemento.textContent = fichaActual.id;
    fichaElemento.classList.add('ficha-cola');
    cola.appendChild(fichaElemento);
  });
});