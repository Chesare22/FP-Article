let sumar = ( a, b ) => a + b
let doble = número => número * 2
let cuadrado = número => número * número
let primero = ( [ head ] ) => head

/* Al usar corchetes no hay return implícito, por lo que el
   valor de retorno de esta función siempre será undefined. */
let escribir_doble = número => {
  let resultado = doble( número )
  console.log( resultado )
  resultado
}

console.log( sumar( 3, 4 ) ) // 7
console.log( doble( 21 ) ) // 42
console.log( cuadrado( 5 ) ) // 25
console.log( primero( [ 44, true, "hola" ] ) ) // 44

let ocho = escribir_doble( 4 ) // 8
console.log( ocho ) // undefined
