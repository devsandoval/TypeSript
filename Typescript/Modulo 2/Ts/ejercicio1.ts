/*
El factorial de un número n, representado como n!, es el producto de todos los enteros positivos desde 1 hasta n.
Escriba una función que calcule el factorial de un número n. Por ejemplo, el factorial de 4
se calcularía: 4! = 1 * 2 * 3 * 4 = 24.Considere que 0! es igual a 1.
*/
const numero: number = 9;
const resultadoFactorial: number = factorial(numero); //llama a la funcion factorial y el retorno lo alamacena en resultadoFactorial

function factorial(n: number): number {
    if (n == 0) return 1
    let resultado: number = 1;
    for (let i: number = 1; i <= n; i++) { // Calculamos el factorial multiplicando desde 1 hasta n
        resultado *= i;
    }
    return resultado;
}

console.log(`El factorial de ${numero} es ${resultadoFactorial}`);


/*
El índice de masa corporal (IMC) de una persona se calcula como la razón entre su peso (en kilogramos) y el cuadrado de su estatura (en metros).
estatura**2 mt Escriba una función, tal que dados el peso y altura de una persona, devuelva estado nutricional en un string,
de acuerdo a la siguiente tabla:

IMC
Inferior a 18.5 = Bajo Peso
Entre 18.6 y 24.9 = Peso Normal
Entre 25 y 29.9 = Sobrepeso
Sobre 30 = Obesidad
 */

let peso: number = 70 //kilos
let altura: number = 1.61 //metros
let imcResultado: string = imc(altura, peso)

function imc(al: number, pe: number): string {
    let resultado: string = "error"
    let valorImc: number = 0

    if (al == 0 || pe == 0) {
        resultado = "error"
    } else {
        valorImc = pe / (al ** 2)
    }

    switch (true) {
        case (valorImc <= 18.5):
            resultado = "Bajo Peso"
            break
        case (valorImc >= 18.6 && valorImc <= 24.9):
            resultado = "Peso Normal"
            break
        case(valorImc >= 25 && valorImc <= 29.9):
            resultado = "Sobrepeso"
            break
        case(valorImc >= 30):
            resultado = "Obesidad"
            break
        default:
            resultado = "error"
            break
    }
    return resultado
}

console.log(`Para su peso :${peso} kilos y su altura :${altura} metros su IMC es = "${imcResultado}"`);

/*
Escriba una función tal que dado un número que representa una fecha en formato DDMMAAAA (Día, Mes, Año),
la devuelva en formato AAAAMMDD (Año, Mes, Día).

Usando la función anterior, escriba un programa tal que dadas dos fechas en formato DDMMAAAA definidas como variables,
indique en pantalla cuál es la mayor entre ellas.
*/

let ddMmAaaa: number = 10121992
let aaaaMmDd: number

