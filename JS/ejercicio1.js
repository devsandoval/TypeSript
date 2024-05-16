"use strict";
const nombres = ["Mia", "Simona", "Oriona", "Rudya", "Leona"];
const letraA = acabanEnA(nombres);
if (letraA === true) {
    console.log("Todos los nombres finalizan con la letra A");
}
else {
    console.log("NO todos los nombres finalizan con la letra A");
}
function acabanEnA(palabras) {
    return palabras.every(palabra => palabra.endsWith("a"));
}
