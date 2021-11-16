let números = [ 1, 2, 3, 4, 5 ]
for ( let índice = 0; índice < números.length; índice++ ) {
  let número = números[índice]
  console.log( número ) // 1, 2, 3, 4, 5
  números[índice] = número * número
}

console.log( números ) // [ 1, 4, 9, 16, 25 ]
