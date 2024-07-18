/*
Defina un arreglo de números como el siguiente: L = [5,8,4,3,6,9]. Usando este arreglo como
base:

Muestre en la consola todos los números del arreglo junto a su índice, como se muestra a
continuación:
Elemento en índice 0 es 5
Elemento en índice 1 es 8
Elemento en índice 2 es 4
Elemento en índice 3 es 3
Elemento en índice 4 es 6
Elemento en índice 5 es 9
● Escriba una función que reciba un arreglo L y retorne la suma de todos sus elementos. OK
● Escriba una función que reciba un arreglo L y retorne el promedio de todos sus elementos. OK
● Escriba una función que reciba un arreglo L y retorne el valor mínimo del arreglo.
● Escriba una función que reciba un arreglo L y retorne el valor máximo del arreglo.
● Escriba una función que reciba dos arreglos e indique si son iguales o no en un booleano.
Pista: Considere exportar las funciones definidas. ¡Pueden serle útil en otros ejercicios!

*/

let L1: number[] = [5, 8, 4, 3, 6, 9];


for (let i1 in L1) {
    console.log(`Elemento en índice ${i1} es ${L1[i1]}`);
}


/*
function promedio(lista: number[]): number {
    let prom: number = sumaArreglo(lista) / lista.length;
    return prom;
}

//test
console.log(promedio(L1));*/

function sumArray(arrayImport: number[]): number {
    let suma: number = 0;
    for (const num of arrayImport) {
        suma += num;
    }
    return suma;
}

const sumar: number = sumArray(L1);
console.log(`La suma de los elementos es: ${sumar}`);

function promArray(arrayImport: number[]): number {
    let suma: number = 0;
    let prom: number= 0
    for (const num of arrayImport) {
        suma += num;
    }
    prom = suma/arrayImport.length
    return prom;
}

const promedio: number = promArray(L1);
console.log(`La suma de los elementos es: ${promedio}`);