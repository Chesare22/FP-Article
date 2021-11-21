let sandra = {
  nombre: "Sandra",
  apellido: "Mex",
  trabajo: "Doctora",
}

function nombre_completo( { nombre, apellido } ) {
  return nombre + " " + apellido
}

console.log( nombre_completo( sandra ) ) // "Sandra Mex"
