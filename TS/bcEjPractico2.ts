/*
El factorial de un número n, representado como n!, es el producto de todos los enteros positivos desde 1 hasta n.
Escriba un programa que calcule el factorial de un número n. Por ejemplo, el factorial de 4 se calcularía: 4! = 1 * 2 * 3 * 4 = 24.
Considereque0!esiguala1.
*/

const nn: number = 4;
let factorial: number = 1;

if (nn < 0) {
    console.log("ERROR Solo numeros positivos");
} else {
    for (let i: number = 1; i <= nn; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${nn} es: ${factorial}`);
}

/*
Escriba un programa tal que, dado el valor de una variable (de tipo entero), imprima en pantalla la tabla de multiplicar correspondiente.
Extienda el programa anterior para ahora mostrar todas las tablas de multiplicar entre el 1 y el 12 siguiendo el diálogo:
*/

let numeroDeTabla: number = 0
let numeroMulti: number = 0
for (let j: number = 0; j <= 12; j++) {
    for (let i: number = 0; i <= 10; i++) {
        numeroMulti = i * numeroDeTabla
        console.log(`la multiplicacion de ${numeroDeTabla} X ${i} es ${numeroMulti}`)
    }
    numeroDeTabla+=1
}

/*
Escriba un programa tal que, dado el valor de una variable (de tipo entero positivo),
imprima en pantalla la cantidad de dígitos que lo compone. Por ejemplo,
siN = 49176463,entonceselprogramadebemostrar 8.
*/


let numero: number = 49176463;
let contador: number = 0;

while (numero > 0) {
    numero = numero / 10;
    contador++;
    numero = numero - (numero % 1); // Elimina la parte decimal
}

console.log(`La cantidad de dígitos es: ${contador}`);
