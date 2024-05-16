"use strict";
const numeros = [1, 2, 63, 88, 2, 98, 77, 1201];
const resultado = sumarPares(numeros);
function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero;
        }
    }
    return suma;
}
console.log(`La suma de los numeros pares es ${resultado}`);
