//edad:: num[] -> num[]
//recibe un arreglo de edades de perros y devuelve un arreglo con las edades humanas equivalentes
//ejemplo: edad ([7, 14, 21, 28]) devuelve [61.4, 72.6, 79.0, 83.8] aproximadamente

function edad (edadperro: number[]) : number [] {

    let i: number;
    let edadhumana: number = 0;
    let salida: number[] = [];

    for (i=0; i<edadperro.length; i++) {
        edadhumana=16*Math.log(edadperro[i])+31;
        salida.push (edadhumana);
    }

    console.log ("Edad de Humano: ", salida);
    return (salida);
}

let NombrePerro: string [] = ["Sebastian", "Cesar", "Luis", "Washington"];
let EdadPerro: number [] = [7, 14, 21, 1];
let EdadHumana: number [] = [];
let mayor: number = 0;
let menor: number = 99999999999;

let i: number=0;
let imenor: number=0;
let imayor: number=0;


EdadHumana=edad(EdadPerro);

for (i=0; i<NombrePerro.length; i++){
    if (EdadHumana[i]>mayor){
        mayor=EdadHumana[i];
        imayor=i}
    if (EdadHumana[i]<menor){
        menor=EdadHumana[i];
        imenor=i;}
    if (EdadHumana[i]>40){
        console.log (NombrePerro[i],"  ", EdadPerro[i]);}
}

console.log ("Más joven: ", NombrePerro[imenor], " con ", EdadPerro[imenor]);
console.log ("Más anciano: ", NombrePerro[imayor], " con ", EdadPerro[imayor]);

