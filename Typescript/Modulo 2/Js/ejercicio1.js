"use strict";
const numero = 9;
const resultadoFactorial = factorial(numero);
function factorial(n) {
    if (n == 0)
        return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(`El factorial de ${numero} es ${resultadoFactorial}`);
let peso = 70;
let altura = 1.61;
let imcResultado = imc(altura, peso);
function imc(al, pe) {
    let resultado = "error";
    let valorImc = 0;
    if (al == 0 || pe == 0) {
        resultado = "error";
    }
    else {
        valorImc = pe / (al ** 2);
    }
    switch (true) {
        case (valorImc <= 18.5):
            resultado = "Bajo Peso";
            break;
        case (valorImc >= 18.6 && valorImc <= 24.9):
            resultado = "Peso Normal";
            break;
        case (valorImc >= 25 && valorImc <= 29.9):
            resultado = "Sobrepeso";
            break;
        case (valorImc >= 30):
            resultado = "Obesidad";
            break;
        default:
            resultado = "error";
            break;
    }
    return resultado;
}
console.log(`Para su peso :${peso} kilos y su altura :${altura} metros su IMC es = "${imcResultado}"`);
