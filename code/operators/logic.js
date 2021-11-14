console.log( !true ) // false
console.log( true && false ) // false
console.log( true && !false ) // true
console.log( 6 < 10 && 3 > 1 ) // true
console.log( true || false ) // true
console.log( 7 + 3 === 10 || 20 > 25 ) // true

let verdadero = 2 * 2 * 2 === 8
let falso = "soldado" !== "sol" + "dado"

console.log( verdadero && falso ) // false
console.log( verdadero || falso ) // true
