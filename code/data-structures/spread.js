let números = [ "uno", "dos", "tres" ]
let más_números = [ "cero", ...números ]
let otros_números = [ ...números, 4 ]

console.log( números ) // [ "uno", "dos", "tres" ]
console.log( más_números ) // [ "cero", "uno", "dos", "tres" ]
console.log.log( otros_números ) // [ "uno", "dos", "tres", 4 ]
