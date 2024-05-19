/*1.
A partir de dos números A y B, escriba el resultado de operarlos de todas las formas posibles siguiendo el diálogo:
El resultado A + B es igual a (...)
El resultado A - B es igual a (...)
El resultado A * B es igual a (...)
El resultado A / B es igual a (...)
El resultado A ^ B es igual a (...)
El resultado A % B es igual a (...)*/

let A: number = 10
let B: number = 2
console.log(`El resultado de A-B es: ${A - B}`)
console.log(`El resultado de A*B es: ${A * B}`)
console.log(`El resultado de A/B es: ${A / B}`)
console.log(`El resultado de A-B es: ${A ** B}`)
console.log(`El resultado de A-B es: ${A % B}`)


/*2.
Cree un programa que tome un número de 2 dígitos e invierta sus dígitos. Por ejemplo:
 */
const numeroConstante: number = 45;
const primerDigito: number = numeroConstante % 10; // Obtener el segundo dígito
const segundoDigito: number = (numeroConstante - primerDigito) / 10; // Obtener el primer dígito
console.log(`El número ${numeroConstante} invertido es ${primerDigito}${segundoDigito}`)

/*3.
En base a lo visto en la pregunta anterior, adapte su programa para que invierta un número de 3 dígitos:
 */
const numeroConstante_2: number = 892;
const unidad: number = numeroConstante_2 % 10 // Obtener el primer dígito de izquierda a derecha
const restoUnidad: number = numeroConstante_2 % 100 // Encuentra el resto del total
const centena: number = (numeroConstante_2 - restoUnidad) / 100 // Obtener el segundo dígito de izquierda a derecha
const decena: number = ((numeroConstante_2 % 100) - (numeroConstante_2 % 10)) / 10 // Obtener el primer dígito de izquierda a derecha
console.log(`El numero ${numeroConstante_2} invertido es ${unidad}${decena}${centena}`)

/*4
un amigo biólogo le comenta que una población de bacterias puede ser modelada por la siguiente fórmula matemática:
    𝑃𝑜𝑏𝑙𝑎𝑐𝑖𝑜𝑛𝐹𝑖𝑛𝑎𝑙 = 𝑃𝑜𝑏𝑙𝑎𝑐𝑖𝑜𝑛𝐼𝑛𝑖𝑐𝑖𝑎𝑙 · 5𝑚𝑖𝑛𝑢𝑡𝑜𝑠 + 20
Escriba un programaque,a partir de las variables PoblacionInicial y minutos muestre en el terminal la cantidad final de bacterias
luego de un tiempo determinado, siguiendo el diálogo:
*/

const poblacacionInicial: number = 15
const minutos: number = 3
const num: number = 20
const poblacionFinal = poblacacionInicial * (5 ** minutos) + num
console.log(poblacionFinal)

/*5
Escriba y evalúe las siguientes expresiones en TypeScript, usando un valor de A a su gusto:
*/

const a: number = 2

const exprecion1: number = (((4 + 5) * a - 20 / 50) ** a / 5)
console.log(exprecion1)

const exprecion2: number = (45+(10**5)-55)/((30*8)-a)-(a**(5/4))
console.log(exprecion2)

let op1: number = ((1.5-35))**a
let op2: number = (a**3/15)
const exprecion3: number = op1+op2
console.log(exprecion3)