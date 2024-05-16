//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista.
// La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total.
// Usa el bucle que quieras para solucionarlo.

const numeros: number[] = [1, 2, 63, 88, 2, 98, 77, 1201];
const resultado: number = sumarPares(numeros);

function sumarPares(numeros: number[]): number {
    let suma: number = 0;

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero;
        }
    }

    return suma;
}

console.log(`La suma de los numeros pares es ${resultado}`)