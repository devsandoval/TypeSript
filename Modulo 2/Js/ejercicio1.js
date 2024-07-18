"use strict";
const numero = 9;
const resultadoFactorial = factorial(numero);
function factorial(n) {
    if (n === 0)
        return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(`El factorial de ${numero} es ${resultadoFactorial}`);
