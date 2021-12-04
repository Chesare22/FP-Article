let map = fun => values => {
  let mapped = []
  for ( let index = 0; index < values.length; index++ ) {
    let value = values[index]
    mapped = [ ...mapped, fun( value ) ]
  }
  return mapped
}

let triple = number => number * 3

let numbers = [ 1, 2, 3, 4, 5 ]
let numbers_tripled = map( triple )( numbers )

console.log( numbers_tripled ) // [ 3, 6, 9, 12, 15 ]
