export async function cargarFichas(){
  console.log('cargarfIchas si se ejecuta');
  try{
    const res = await fetch('./json/fichas.json');
    if(!res.ok) throw new Error('Error al carga JSON: ${res.status}');
      const  fichas = await res.json();
      return fichas;
  }catch (error){
    console.error('Quiebre en carga de fichas:',error);
    return [];
  }
}