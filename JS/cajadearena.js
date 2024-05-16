"use strict";
var Talla;
(function (Talla) {
    Talla["S"] = "S";
    Talla["M"] = "M";
    Talla["L"] = "L";
    Talla["XL"] = "XL";
})(Talla || (Talla = {}));
let persona = {
    id: 1,
    nombre: "Juan",
    talla: Talla.L,
    direccion: {
        numero: 123,
        calle: "Calle Principal",
        pais: "México"
    }
};
console.log(persona);
