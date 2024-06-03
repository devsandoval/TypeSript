"use strict";
let precioPasaje = 730;
let pasajes = 1;
let pasajesMensuales = 1;
let textoAdicional = ("Descuento Aplicado!");
console.log("**Precios de Pasajes**");
while (pasajesMensuales < 31) {
    while (pasajes < 6) {
        if (pasajes == 5) {
            precioPasaje = (precioPasaje * 0.95);
            console.log(`Viaje ${pasajesMensuales}: $${precioPasaje} ${textoAdicional} `);
        }
        else {
            console.log(`Viaje ${pasajesMensuales}: $${precioPasaje}`);
        }
        pasajes = pasajes + 1;
        pasajesMensuales = pasajesMensuales + 1;
    }
    pasajes = 1;
}
