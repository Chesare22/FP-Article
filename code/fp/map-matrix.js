let square = number => number * number

let square_matrix = map( map( square ) )

let numbers = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
]

let numbers_squared = square_matrix( numbers )

console.log( numbers_squared ) /* [
                                    [ 1, 4, 9 ],
                                    [ 16, 25, 36 ],
                                    [ 49, 64, 81 ],
                                  ] */
