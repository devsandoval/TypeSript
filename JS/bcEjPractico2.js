"use strict";
const nn = 4;
let factorial = 1;
if (nn < 0) {
    console.log("ERROR Solo numeros positivos");
}
else {
    for (let i = 1; i <= nn; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${nn} es: ${factorial}`);
}
let numeroDeTabla = 0;
let numeroMulti = 0;
for (let j = 0; j <= 12; j++) {
    for (let i = 0; i <= 10; i++) {
        numeroMulti = i * numeroDeTabla;
        console.log(`la multiplicacion de ${numeroDeTabla} X ${i} es ${numeroMulti}`);
    }
    numeroDeTabla += 1;
}
let numero = 49176463;
let contador = 0;
while (numero > 0) {
    numero = numero / 10;
    contador++;
    numero = numero - (numero % 1);
}
console.log(`La cantidad de dígitos es: ${contador}`);
