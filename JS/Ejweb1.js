"use strict";
function procesarNumeros(numeros) {
    for (const numero of numeros) {
        if (numero === 42) {
            break;
        }
        console.log(numero);
    }
}
const numerosDeEntrada = [10, 25, 42, 50, 60];
procesarNumeros(numerosDeEntrada);
