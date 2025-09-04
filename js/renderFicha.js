// 📦 renderFicha.js
export function renderFicha(ficha) {
  console.log('📍 Iniciando renderFicha');

  // 🧠 Validación de ficha
  if (!ficha || !ficha.imagen || !ficha.nombre) {
    console.error('❌ Ficha inválida:', ficha);
    return;
  }

  // 📌 Acceso al contenedor visual
  const contenedor = document.getElementById('fichaCantada');
  if (!contenedor) {
    console.error('❌ No se encontró el contenedor #fichaCantada');
    return;
  }

  // 🧹 Limpieza previa
  contenedor.innerHTML = '';

  try {
    // 🎯 Creación del div principal
    const fichaDiv = document.createElement('div');
    fichaDiv.classList.add('ficha-proyectada');
    console.log('✅ Div ficha-proyectada creado');

    // 🖼️ Imagen de la ficha
    const img = document.createElement('img');
    img.src = `./img/${ficha.imagen}`;
    img.alt = ficha.nombre;
    img.classList.add('ficha-img');

    // 🏷️ Nombre de la ficha
    const nombre = document.createElement('div');
    nombre.textContent = ficha.nombre;
    nombre.classList.add('ficha-nombre');

    // 🧩 Ensamblaje visual
    fichaDiv.appendChild(img);
    fichaDiv.appendChild(nombre);
    contenedor.appendChild(fichaDiv);

    console.log('✅ Ficha renderizada correctamente:', ficha.nombre);
  } catch (error) {
    console.error('❌ Error durante el renderizado de ficha:', error);
  }
}