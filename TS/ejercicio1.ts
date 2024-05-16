/*
Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" 
y false si al menos una palabra no termina con la letra "a".
Usa el método endsWith() de string para resolverlo.
*/

const nombres: string[] = ["Mia", "Simona", "Oriona", "Rudya", "Leona"];
const letraA: boolean = acabanEnA(nombres);

if (letraA === true) {
    console.log("Todos los nombres finalizan con la letra A");
} else {
    console.log("NO todos los nombres finalizan con la letra A");
}

function acabanEnA(palabras: string[]): boolean {
    return palabras.every(palabra => palabra.endsWith("a"));
}
