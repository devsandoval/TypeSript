let nu: number = 7

let restonu: number = nu % 2
let pregunta: boolean = restonu == 0

console.log(pregunta)

if (pregunta) {
    console.log(`Numero ${nu} es par`)
} else {
    console.log(`Numero ${nu} es impar`)
}

let x: number = 1
let y: number = 2
let z: number = 3

if (x > y) {
    if (x > z) {
        console.log(x)
    } else {
        console.log(z)
    }
} else {
    if (y > z) {
        console.log(y)
    } else {
        console.log(z)
    }
}

let mayor: number = y

if (y > mayor) {
    mayor = y
}
if (z > mayor) {
    mayor = z
}
console.log(mayor)

let res: number
res = (x > y) ? x : y //si se cumple la condicion x>y con la pregunta ? devuelve x sino devuelve y

