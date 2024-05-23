"use strict";
let peso = 20;
let altura = 1.70;
let imc = peso / (altura ** 2);
if (imc <= 18.5) {
    console.log("Bajo Peso");
}
else if (imc <= 18.6 && imc >= 24.9) {
    console.log("Peso normal");
}
else if (imc <= 29.9 && imc >= 25) {
    console.log("Sobre peso");
}
else {
    console.log("obesidad");
}
let mes = 2;
let year = 1990;
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("31 DIAS");
}
else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("30 DIAS");
}
else if (mes == 2) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        console.log("29 dias");
    }
    else {
        console.log("28 dias");
    }
}
const jugada = "tijeras";
let ganador = "piedra";
switch (jugada) {
    case "piedra":
        if (jugada == ganador) {
            ganador = "empate";
        }
        else {
            ganador = "papel";
        }
        break;
    case "papel":
        if (jugada == ganador) {
            ganador = "empate";
        }
        else {
            ganador = "tijeras";
        }
        break;
    case "tijeras":
        if (jugada == ganador) {
            ganador = "empate";
        }
        else {
            ganador = "piedra";
        }
        break;
    default:
        console.log("jugada invalida");
}
if (ganador == "empate") {
    console.log(`El jugador eligio ${jugada} y el resultado es empate`);
}
else {
    console.log(`El jugador eligio ${jugada} y el ganador es ${ganador}`);
}
let numero_a = 12;
let numero_b = 9;
let numero_c = 14;
if ((numero_a < (numero_b + numero_c)) || (numero_b < (numero_a + numero_c)) || (numero_c < (numero_a + numero_b))) {
    if ((numero_a == numero_b) && (numero_a == numero_c) && (numero_b == numero_c)) {
        console.log("Es un triangulo Equilátero");
    }
    else if (numero_a == numero_b || numero_a == numero_c || numero_c == numero_b) {
        console.log("Es un triangulo Isóseles");
    }
    else if ((numero_a != numero_b) && (numero_a != numero_c) && (numero_b != numero_c)) {
        console.log("Es un triangulo Escaleno");
    }
}
else {
    console.log("no es un triangulo");
}
