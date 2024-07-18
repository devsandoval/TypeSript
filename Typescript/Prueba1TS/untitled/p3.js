var n = 1111;
var suma = 0;
var contador = 0;
var promedio;
var digito;
var par = 0;
var impar = 0;
while (n > 0) {
    digito = n % 10; //Obtenemos el último dígito usando el operador módulo
    suma = digito % 2; //Suma el dígito al total
    if (suma == 0) {
        par = 1;
    }
    else {
        impar = 1;
    }
    //contador++;
    n = (n - digito) / 10; // Elimina el último dígito restando el dígito y dividiendo el número por 10
}
if (par == 1 && impar == 0) {
    console.log("Numero Super Par");
}
else if (par == 0 && impar == 1) {
    console.log("Numero Super impar");
}
else {
    console.log("Numero no es Super par o Super impar");
}
