import { cargarFichas } from './cargarJSON.js';
import { renderFicha } from './renderFicha.js';

console.log('✅ main.js ejecutado');
// Estado del sistema
let fichas = [];
let fichaActual = null;

// Inicialización completa
document.addEventListener('DOMContentLoaded', async () => {
  fichas = await cargarFichas();
  console.log('Sistema iniciado y fichas cargadas');

  // Evento principal dentro del DOM ya cargado
  const btn = document.getElementById('btnCantarFicha');
  btn.addEventListener('click', () => {
    if (!Array.isArray(fichas) || fichas.length === 0) {
      console.log('No quedan fichas por cantar o no se cargaron correctamente');
      return;
    }

   // fichaActual = fichas.shift(); // Extrae la siguiente ficha
    
    const input = document.getElementById('inputNumeroFicha');
    const numeroIngresado = parseInt(input.value,10);
    fichaActual = fichas.find(f => f.id === numeroIngresado);
    if(!fichaActual){
      console.log(`❌ Ficha con número ${numeroIngresado} no encontrada`);
      return;
    }
    renderFicha(fichaActual);     // Proyección visual
    console.log(`🎤 Ficha cantada: ${fichaActual.nombre}`);
  });
});