/*
En este programa dibujaremos triángulos utilizando ASCII-Art. Es decir, dados los valores
que definen las figuras (como variables en el programa),
se debe imprimir, línea a línea usando asteriscos, la figura solicitada. Por ejemplo:
*/
var altura = 5;
var asteristo = "*";
var mensaje = "";
var i = 1;
while (i <= altura) {
    mensaje = mensaje + asteristo;
    console.log(mensaje);
    i++;
}
