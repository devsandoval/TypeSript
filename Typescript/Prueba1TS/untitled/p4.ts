/*
En este programa dibujaremos triángulos utilizando ASCII-Art. Es decir, dados los valores
que definen las figuras (como variables en el programa),
se debe imprimir, línea a línea usando asteriscos, la figura solicitada. Por ejemplo:
*/

let altura: number=5;
let asteristo: string="*";
let mensaje: string="";
let i: number=1;
while (i <= altura) {
    mensaje = mensaje + asteristo;
    console.log (mensaje);
    i++
}