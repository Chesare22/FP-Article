let colores = [ "rosa", "verde", "naranja", "azúl" ]
let dirección = {
  calle: 48,
  número: 324,
  cruzamientos: [ 11, 9 ],
  fraccionamiento: "Los Villanos",
}

let [ color1, color2, ...otros_colores ] = colores
let { número, fraccionamiento, ...calles } = dirección

console.log( otros_colores ) // [ "naranja", "azúl" ]
console.log( calles ) // { calle: 48, cruzamientos: [ 11, 9 ] }

let [ color3, color4, ...aún_más_colores ] = otros_colores

console.log( color3 ) // "naranja"
console.log( color4 ) // "azúl"
console.log( aún_más_colores ) // [ ]
