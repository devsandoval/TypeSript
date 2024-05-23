"use strict";
let nu = 7;
let restonu = nu % 2;
let pregunta = restonu == 0;
console.log(pregunta);
if (pregunta) {
    console.log(`Numero ${nu} es par`);
}
else {
    console.log(`Numero ${nu} es impar`);
}
let x = 1;
let y = 2;
let z = 3;
if (x > y) {
    if (x > z) {
        console.log(x);
    }
    else {
        console.log(z);
    }
}
else {
    if (y > z) {
        console.log(y);
    }
    else {
        console.log(z);
    }
}
let mayor = y;
if (y > mayor) {
    mayor = y;
}
if (z > mayor) {
    mayor = z;
}
console.log(mayor);
let res;
res = (x > y) ? x : y;
