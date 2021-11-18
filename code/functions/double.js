function doble( número ) {
  let resultado = número * 2
  console.log( resultado )
  return resultado
}

doble( 34 ) // 68
doble( 8 ) // 16
let cuatro = doble( 2 ) // 4
console.log( cuatro ) // 4

doble() // NaN
