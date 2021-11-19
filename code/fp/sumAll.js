let sum = a => b =>
  a + b

let multiply = a => b =>
  a * b

let always = val => _ =>
  val

let apply = val => fn =>
  fn( val )

let flip = fn => a => b =>
  fn( b )( a )

let if_then_else = predicate => success => failure => val =>
  predicate( val )
    ? success( val )
    : failure( val )

let is_empty = ( { length } ) =>
  length === 0

let reduce = fun => values => initial => {
  let [ current, ...next_values ] = values

  if ( is_empty( values ) ) {
    return initial
  } else {
    let next_initial = fun( initial )( current )
    return reduce( fun )( next_values )( next_initial )
  }
}

let reduce1 = fn => ( [ initial, ...values ] ) =>
  reduce( fn )( values )( initial )

let map = fun => values => {
  let [ head, ...tail ] = values
  return (
    is_empty( values )
      ? []
      : [ fun( head ), ...map( fun )( tail ) ] )
}

let map_imperative = fun => values => {
  let mapped = []
  for ( let index = 0; index < values.length; index++ ) {
    const value = values[index]
    mapped.push( fun( value ) )
  }
  return mapped
}


let pipe =
  reduce( apply )

let sum_array =
  reduce( sum )

let sum_array1 =
  reduce1( sum )

let safe_sum_array1 =
  if_then_else( is_empty )( always( 0 ) )( sum_array1 )

let sum_array1_v2 =
  flip( reduce( sum ) )( 0 )

let first = ( [ a ] ) =>
  a

let first_recursive =
  reduce1( always )


let list =
  [ 1, 2, 3, 4, 5, 6 ]

let process =
  pipe( [
    sum( 2 ),
    multiply( 7 ),
  ] )

console.log( sum_array( list )( 0 ) ) // 21
console.log( sum_array1( list ) ) // 21
console.log( sum_array1_v2( list ) ) // 21
console.log( safe_sum_array1( list ) ) // 21
console.log( sum_array( [] )( 0 ) ) // 0
console.log( sum_array1( [] ) ) // undefined
console.log( safe_sum_array1( [] ) ) // 0
console.log( sum_array1_v2( [] ) ) // 0

console.log( process( 8 ) ) // 70
console.log( first( list ) ) // 1
console.log( first_recursive( list ) ) // 1

console.log( // [ 21, 28, 35, 42, 49, 56 ]
  map( process )( list ) )

console.log( // [ 21, 28, 35, 42, 49, 56 ]
  map_imperative( process )( list ) )
