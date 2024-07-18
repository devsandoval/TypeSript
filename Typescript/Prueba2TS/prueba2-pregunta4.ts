// Ejercicio P4.a

//obtenerDominios :: string[] -> string[]
//recibe un arreglo con direcciones de correo y devuelve un arreglo con los dominios de los correos, sin repetir
//por ejemplo: si recibe ["a@d.cl", "b@d.cl", "c@d.cl", "a@d.1.cl", "b@d.1.cl", "c@d.1.cl", "a@d.1.2.cl", "b@d.1.2.cl", "c@d.1.2.cl"] 
//devuelve ["d", "d.1", "d.1.2"]

function obtenerDominios (correos: string[]): string[] {

    let salida: string[] = [];
    let repetidos: string[] = [];
    let parsedominio: string[] = [];
    let parseTLD: string[] = [];
    let i: number = 0;
    let j: number = 0;
    let encontrado: number = 0;
    let dominio: string = "";

    for(i=0; i<correos.length; i++){
        parsedominio=correos[i].split("@");
        parseTLD=parsedominio[1].split(".");
        dominio=parseTLD[0];
        for (j=1; j<parseTLD.length-1; j++){
            dominio=dominio+"."+parseTLD[j];
        }
        repetidos.push(dominio);
    }

    for (i=0; i<repetidos.length; i++){
        encontrado=salida.indexOf(repetidos[i]);
        if (encontrado == -1){
            salida.push(repetidos[i]);
        }
    }

    console.log ("--Función: obtenerDominios--");
    console.log ("Dominios Repetidos: ", repetidos);
    console.log ("Dominios No Repetidos: ", salida);
    console.log ("----------------------------");
    console.log ("");

    return (salida);
}

//TEST: (inspección visual)

obtenerDominios(["a@d.cl", "b@d.cl", "c@d.cl", "a@d.1.cl", "b@d.1.cl", "c@d.1.cl", "a@d.1.2.cl", "b@d.1.2.cl", "c@d.1.2.cl"]);

// Ejercicio P4.b

//Programa obtenerTLDs :: string[] -> Mensajes Pantalla
//recibe un arreglo con direcciones de correo y devuelve mensajes con identificación TLD y su frecuencia
//por ejemplo: si recibe ["a@d.cl", "b@d.cl", "c@d.cl", "a@d.1.com", "b@d.1.com", "c@d.1.org", "a@d.1.2.xx", "b@d.1.2.xx", "c@d.1.2.xx"] 
//envía mensajes "Apariciones de cada TLD:
//                cl: 3
//                com: 2
//                org: 1
//                xx: 3"

let correos: string[] = ["a@d.cl", "b@d.cl", "c@d.cl", "a@d.1.com", "b@d.1.com", "c@d.1.org", "a@d.1.2.xx", "b@d.1.2.xx", "c@d.1.2.xx"]
let repetidos: string[] = [];
let parsedominio: string[] = [];
let parseTLD: string[] = [];
let i: number = 0;
let j: number = 0;
let encontrado: number = 0;
let TLD: string = "";
let nombreTLD: string[]=[];
let frecuenciaTLD: number[]=[];

    for(i=0; i<correos.length; i++){
        parsedominio=correos[i].split("@");
        parseTLD=parsedominio[1].split(".");
        TLD=parseTLD[parseTLD.length-1];
        repetidos.push(TLD);
    }

    console.log ("---Programa obtenerTLDs---");
    console.log("TLDs Repetidos: ", repetidos);

    for (i=0; i<repetidos.length; i++){
        encontrado=nombreTLD.indexOf(repetidos[i]);
        if (encontrado == -1){
            nombreTLD.push(repetidos[i]);
            frecuenciaTLD[nombreTLD.length-1]=1;
        }
        else{
            frecuenciaTLD[encontrado]=frecuenciaTLD[encontrado]+1;
        }
    }

    console.log ("Apariciones de cada TLD:");
    for (i=0; i<nombreTLD.length; i++){
        console.log (nombreTLD[i], ": ", frecuenciaTLD[i]);
    }

//TEST
