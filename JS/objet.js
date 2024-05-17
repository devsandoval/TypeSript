"use strict";
var Talla;
(function (Talla) {
    Talla["Chica"] = "S";
    Talla["Mediana"] = "M";
    Talla["Grande"] = "L";
    Talla["ExtraGrande"] = "XL";
})(Talla || (Talla = {}));
let persona = {
    id: 1,
    nombre: "Juan",
    talla: Talla.Grande,
    direccion: {
        numero: 123,
        calle: "Calle Principal",
        pais: "México"
    }
};
let persona2 = {
    id: 2,
    nombre: "Cesar",
    talla: Talla.Mediana,
    direccion: {
        numero: 21,
        calle: "General Jofre",
        pais: "Chile"
    }
};
console.log(persona);
console.log(persona2);
