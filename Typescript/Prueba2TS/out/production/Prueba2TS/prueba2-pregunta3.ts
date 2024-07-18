//filtro:: num[] -> num[]
//recibe un arreglo de notas y devuelve un arreglo con las notas mayores a 4
//ejemplo: filtro ([2, 5, 3, 1]) devuelve [5]

function filtro (notas: number[]) : number [] {
    let i: number = 0;
    let salida: number[] = [];
    for (i=0; i<=notas.length; i++) {
        if (notas[i]>=4) {
            salida.push(notas[i]);
        }
    }
    console.log ("filtro: ", salida);
    return (salida);
}

//Test
let prueba: number[] = [2, 5, 3, 1];
console.log("notas: ", prueba);
filtro(prueba);
//mapeo:: num[] -> num[]
//recibe un arreglo de notas y devuelve un arreglo con las notas incrementadas en 0.7
//ejemplo: mapeo ([2, 5, 3, 1]) devuelve [2.7, 5.7, 3.7, 1.7]
function mapeo (notas: number[]) : number [] {
    let i: number = 0;
    let salida: number[] = [];

    for (i=0; i<notas.length; i++) {
        salida[i]=notas[i]+0.7
    }

    console.log ("mapeo: ", salida);
    return (salida);

}

//Test
console.log("notas: ", prueba);
mapeo (prueba);
//reductor:: num[] -> num
//recibe un arreglo de notas y devuelve el promedio de notas
//ejemplo: reductor ([2, 5, 3, 1]) devuelve 2.75
function reductor (notas: number[]) : number {
    let i: number = 0;
    let salida: number = 0;

    for (i=0; i<notas.length; i++) {
        salida=salida+(notas[i]*(1/notas.length));
    }

    console.log ("reductor: ", salida);
    return (salida);

}

//Test
let pruebapromedio: number[] = [2.7, 5.7, 3.7, 1.7];
console.log("notas: ", pruebapromedio);
reductor (pruebapromedio);