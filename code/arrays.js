let arreglo = [ "a", "b", "c" ]
console.log( arreglo[0] ) // "a"
console.log( arreglo[1] ) // "b"

// La siguiente instrucción no reasigna la variable arreglo,
// sino que cambia qué valor guarda el arreglo en el índice 2

arreglo[2] = "mutación"
console.log( arreglo ) // [ "a", "b", "mutación" ]
