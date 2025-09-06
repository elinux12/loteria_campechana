export function mostrarModalError(mensaje, tipo= "error"){
  const modal  = document.getElementById('modal-aviso');
  modal.classList.remove('oculto',"warning","error");
  modal.classList.add(tipo); // 'warning'o 'error'
  modal.querySelector(".modal-mensaje").textContent = mensaje;
  modal.querySelector(".modal-icono").textContent = tipo === "error" ? "X" : "⚠️"; 
}

export function cerrarModal(){
  document.getElementById('modal-aviso').classList.add("oculto");
}

window.cerrarModal= cerrarModal;