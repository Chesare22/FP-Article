let memoize = fun => {
  let cache = []
  return value => {
    if ( cache[value] === undefined ) {
      cache[value] = fun( value )
    }
    return cache[value]
  }
}

let track_time = fun => args => {
  let initial_time = new Date()
  let result = fun( args )
  return {
    result,
    time: new Date() - initial_time,
  }
}

let expensive_computation = n => {
  let x = 1, y = 1
  for ( let i = 1; i <= n; i++ ) {
    x += i % 2
    y += i % 3
  }
  return ( x * y ) / ( n + 1 )
}

let process = track_time( memoize( expensive_computation ) )

console.log( expensive_computation( 987654321 ) ) // 493827162
console.log( process( 987654321 ) ) /* { result: 493827162,
                                         time: 1299 } */
console.log( process( 987654321 ) ) /* { result: 493827162,
                                         time: 0 } */
console.log( process( 987654321 ) ) /* { result: 493827162,
                                         time: 0 } */
