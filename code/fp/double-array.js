let multiply = a => b => a * b

let double_array = map( multiply( 2 ) )

let numbers = [ 1, 2, 3, 4, 5 ]
let numbers_doubled = double_array( numbers )

console.log( numbers_doubled ) // [ 2, 4, 6, 8, 10 ]
