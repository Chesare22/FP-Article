let map = ( fun, values ) => {
  let mapped = []
  for ( let index = 0; index < values.length; index++ ) {
    let value = values[index]
    mapped = [ ...mapped, fun( value ) ]
  }
  return mapped
}

let double = number => number * 2

let numbers = [ 1, 2, 3, 4, 5 ]
let numbers_doubled = map( double, numbers )

console.log( numbers_doubled ) // [ 2, 4, 6, 8, 10 ]
