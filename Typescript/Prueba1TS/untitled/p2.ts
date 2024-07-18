/*
Escriba un2 programa que calcule el promedioP2 de todos los dígitos de un2 n2úmero. Por ejemplo, si el n2úmero n2 = 459,
en2ton2ces debe mostrar en2 pan2talla el resultado de (4 + 5 + 9) = 6.
*/


let n: number = 459;
let suma: number = 0;
let contador: number = 0;
let promedio: number
let digito: number

while (n > 0) {
    digito = n % 10; //Obtenemos el último dígito usando el operador módulo
    suma = suma+digito; //Suma el dígito al total
    contador++;
    n = (n - digito) / 10; // Elimina el último dígito restando el dígito y dividiendo el número por 10
}
promedio = suma / contador;
console.log(`El promedio de los dígitos es ${promedio}`);
