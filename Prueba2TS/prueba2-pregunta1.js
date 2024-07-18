//Pregunta 1.a
//acceso:: string , number -> boolean
//recibe un string que indica una credencial y un número que indica un horario y devuelve un boolean indicando si la credencial corresponde al horario
//ejemplo:  acceso (Estandar, 2000) devuelve false
//          acceso (Plata, 1400) devuelve true
function acceso(credencial, hora) {
    var salida = false;
    if (credencial == "Estandar") {
        if ((hora >= 100 && hora <= 1200)) {
            salida = true;
        }
        console.log("Estandar: ", salida);
        return (salida);
    }
    if (credencial == "Plata") {
        if ((hora >= 800 && hora <= 1500)) {
            salida = true;
        }
        console.log("Plata: ", salida);
        return (salida);
    }
    if (credencial == "Oro") {
        if ((hora >= 800 && hora <= 1800)) {
            salida = true;
        }
        console.log("Oro: ", salida);
        return (salida);
    }
    if (credencial == "Platino") {
        salida = true;
        console.log("Platino: ", salida);
        return (salida);
    }
    console.log("Credencial: ", credencial, " no es válida");
    salida = false;
    return (salida);
}
// Test
console.assert(acceso("Estandar", 1000) == true);
console.assert(acceso("Estandar", 1300) == false);
console.assert(acceso("Estandar", 1300) == true);
console.assert(acceso("Oro", 1700) == true);
console.assert(acceso("Plata", 1200) == true);
console.assert(acceso("Platino", 1200) == true);
console.assert(acceso("Plata2", 1200) == false);
// Lo habiamos hecho con IF / ELSE pero se nos iba al final y encontraba que no era "Platino", por lo que indicaba
// "Credencial no es valida", siendo que si era valida (por ejemplo "Estandar").
//Pregunta 1.b
var T = ["Oro", "Plata", "Estandar", "Platino"];
var i = 0;
var horaactual = 1330;
var suma = 0;
for (i = 0; i < T.length; i++) {
    if (acceso(T[i], horaactual)) {
        suma = suma + 1;
    }
}
console.log("La cantidad de personas que entraron son: ", suma);
