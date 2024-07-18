//edad:: num[] -> num[]
//recibe un arreglo de edades de perros y devuelve un arreglo con las edades humanas equivalentes
//ejemplo: edad ([7, 14, 21, 28]) devuelve [61.4, 72.6, 79.0, 83.8] aproximadamente
function edad(edadperro) {
    var i;
    var edadhumana = 0;
    var salida = [];
    for (i = 0; i < edadperro.length; i++) {
        edadhumana = 16 * Math.log(edadperro[i]) + 31;
        salida.push(edadhumana);
    }
    console.log("Edad de Humano: ", salida);
    return (salida);
}
var NombrePerro = ["Sebastian", "Cesar", "Luis", "Washington"];
var EdadPerro = [7, 14, 21, 1];
var EdadHumana = [];
var mayor = 0;
var menor = 99999999999;
var i = 0;
var imenor = 0;
var imayor = 0;
EdadHumana = edad(EdadPerro);
for (i = 0; i < NombrePerro.length; i++) {
    if (EdadHumana[i] > mayor) {
        mayor = EdadHumana[i];
        imayor = i;
    }
    if (EdadHumana[i] < menor) {
        menor = EdadHumana[i];
        imenor = i;
    }
    if (EdadHumana[i] > 40) {
        console.log(NombrePerro[i], "  ", EdadPerro[i]);
    }
}
console.log("Más joven: ", NombrePerro[imenor], " con ", EdadPerro[imenor]);
console.log("Más anciano: ", NombrePerro[imayor], " con ", EdadPerro[imayor]);
