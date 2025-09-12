import { cargarFichas } from './cargarJSON.js';
import { renderFicha } from './renderFicha.js';
import {mostrarModalError} from './mostrarModalError.js';
import {cerrarModal} from './mostrarModalError.js';

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
      mostrarModalError("Fuera de rango", "warning"); 
      
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
    //Verificar si la ficha ya existe en la cola
    const yaExiste = Array.from(cola.children).some(el => el.textContent === String(fichaActual.id));
    if(!yaExiste){
    const fichaElemento = document.createElement('div');
    fichaElemento.textContent = fichaActual.id;
    fichaElemento.classList.add('ficha-cola');
    cola.appendChild(fichaElemento);
    //scroll automatico
    cola.scrollTop = cola.scrollHeight;
    } else {
      console.log(`⚠️ Ficha ${fichaActual.id} ya está en la COLA. No se duplica.`);
    }
    
    
  });
  //FIN BLOQUE DE CODIGO DEL BOTON CANTAR LOTERIA
  
  //CANTAR modal-victoria
    const btnVerificarVictoria = document.getElementById("btnVerificarVictoria");
    console.log("cargue boton");
    btnVerificarVictoria.addEventListener('click',()=>{
      const modalVictoria = document.getElementById('modalVictoria');
      console.log("cargue modal");
      modalVictoria.classList.add('activo');
      modalVictoria.classList.remove('oculto');
      
      //CIerre automatico tras 3 segundos
      setTimeout(()=>{
        modalVictoria.classList.add('oculto');
      },4000);
    });
    
  
});