/*
La empresa RawInput S.A. desea hacer una segmentación de sus clientes según su ubicación geográfica.
Para esto, analizará su base de datos de correos electrónicos con el fin obtener información sobre el lugarde procedencia de cada cliente.
En una dirección de correo electrónico, el dominio es la parte que va después de la arroba,
y el TLD (top-level domain) es lo que va después del último punto. Por ejemplo, en usuario@dcc.uchile.cl,
el dominio es dcc.uchile.cl y el TLD es cl.
a. Siguiendo la receta de diseño, escriba la función obtenerDominios(correos),
tal que dada una lista de correos electrónicos, retorne la lista de todos los dominios sin repetir.
b. Siguiendo la receta de diseño, escriba un programa tal que, dada una lista de correos electrónicos, muestre en pantalla
la cantidad de veces que aparece cada TLD. Por ejemplo:
*/

function obtenerCorreos (correos: string[]) : string [] {
    let i: number = 0;
    let salida: string[] = [];
    let dominio: string = '';
    let encontradoArroba: boolean = false;

    for (i=0; i<correos.length; i++) {
        if (correos[i] == '@') {
            encontradoArroba = true;
        } else if (encontradoArroba == false) {
            dominio += correos[i];
        }
    }

    return (salida);

}

const listaCorreos: string[] = [
    "usuario@dcc.uchile.cl",
    "alguien@gmail.com",
    "persona@empresa.com",
    "usuario@dcc.uchile.cl",
    "contacto@yahoo.com"
];
let correosUnicos: string[];
correosUnicos = obtenerCorreos(listaCorreos);
console.log(correosUnicos);