/*
Inferior a 18.5 = Bajo Peso
Entre 18.6 y 24.9 = Peso Normal
Entre 25 y 29.9 = Sobrepeso
Sobre 30 = Obesidad
*/

let peso: number = 20
let altura: number = 1.70

let imc: number = peso / (altura ** 2)

if (imc <= 18.5) {
    console.log("Bajo Peso")
} else if (imc <= 18.6 && imc >= 24.9) {
    console.log("Peso normal")
} else if (imc <= 29.9 && imc >= 25) {
    console.log("Sobre peso")
} else {
    console.log("obesidad")
}

/*
Escriba un programa, tal que dado un número (cualquiera) correspondiente a un mes y otro número (cualquiera)
correspondiente a un año y devuelva la cantidad de días que hay en ese mes. Recuerde que en un año bisiesto, febrero tiene 29 días.
*/

let mes: number = 2
let year: number = 1990

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("31 DIAS")
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("30 DIAS")
} else if (mes == 2) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        console.log("29 dias")
    } else {
        console.log("28 dias")
    }
}

// Escriba un programa que entregue la jugada ganadora del cachipún, dada una entrada válida.
// Las entradas se reciben en formato texto: “piedra”, “tijera” o “papel”.
// Cualquier otro mensaje de entrada debiese indicar que la jugada es inválida.

const jugada: string = "tijeras"
let ganador: string = "piedra"
switch (jugada) {
    case "piedra":
        if (jugada == ganador) {
            ganador = "empate"
        } else {
            ganador = "papel"
        }
        break
    case "papel":
        if (jugada == ganador) {
            ganador = "empate"
        } else {
            ganador = "tijeras"
        }
        break
    case "tijeras":
        if (jugada == ganador) {
            ganador = "empate"
        } else {
            ganador = "piedra"
        }
        break
    default:
        console.log("jugada invalida")
}
if (ganador == "empate") {
    console.log(`El jugador eligio ${jugada} y el resultado es empate`)
} else {
    console.log(`El jugador eligio ${jugada} y el ganador es ${ganador}`)
}

/*
Tres números positivos definen un triángulo si satisfacen la llamada desigualdad triangular;
esto es, si la medida de cada lado es menor que la suma de los otros dos.
Por ejemplo: si tenemos los números a = 3, b = 5 y c = 1, estos NO forman un triángulo dado que b es mayor a “(a + c)”.

 Dependiendo de las medidas de los lados del triángulo, este es de tipo:
● Equilátero: si todos los lados son iguales.
● Isósceles: si solo dos lados son iguales.
● Escaleno: si todos los lados son diferentes.

Escriba un programa tal que, dados los valores de tres variables, muestre en pantalla el tipo de triángulo que forman.
Si no forman un triángulo, muestre en pantalla el mensaje “No forman un triángulo”.
*/

let numero_a: number = 3
let numero_b: number = 3
let numero_c: number = 1

if ((numero_a < (numero_b + numero_c)) && (numero_b < (numero_a + numero_c)) && (numero_c < (numero_a + numero_b))) {
    if ((numero_a == numero_b) && (numero_a == numero_c) && (numero_b == numero_c)) {
        console.log("Es un triangulo Equilátero")
    } else if (numero_a == numero_b || numero_a == numero_c || numero_c == numero_b) {
        console.log("Es un triangulo Isóseles")
    } else if ((numero_a != numero_b) && (numero_a != numero_c) && (numero_b != numero_c )){
        console.log("Es un triangulo Escaleno")
    }

} else {
    console.log("no es un triangulo")
}