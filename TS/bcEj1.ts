// ejercicio 1
//Asigne a la variable m el valor de la expresión: 2 + 7 elevado a 3
let m: number = (2 + (7**3));
console.log(m);

//Defina la variable n con un valor numérico a su elección
let n :number = 20;
console.log(n);

/*Muestre en pantalla el siguiente mensaje: “El resultado de m + n es: XXXX!”, en
donde XXXX corresponde al resultado de la suma de los valores de m y n*/
console.log(`El resultado de m + n es: ${m+n}`);

// ejercicio 2
let Control1: number = 5.5;
let Control2: number = 4.1;
let Control3: number = 6.4;
let total: number = Control1 + Control2 + Control3;
let Promedio = (Control1 + Control2 + Control3)/total;
console.log(Promedio);
let mascota: string = 'perritos';
let cantidad: number = 10;
let mensaje: string = "Yo tenia " + cantidad + " "+ mascota;

// ejercicio 3
/*Conversor de divisas
El dolar hoy esta a 787.65 pesos
Quiere convertir 10000 peso
Le corresponden: 12.695994413762458 dolares  resultado*/
let dolar: number = 787.65;
let pesos: number = 10000;
let  dolaresObtenidos: number = pesos/dolar;
console.log("La cantidad de dolares obtenidos es: $" + dolaresObtenidos);

// ejercico 4
/*. Suponga que estamos generando una calculadora para calcular medidas geométricas con el siguiente
código:
*/
let PI: number = 3.14; // Se declara una constante de tipo numerico y se le asigna un valor - la constante fue cambiada a tipo let para poder generar el posterior cambio
let radio: number = 10; // Se declara una variable editable de tipo numerico y se le asigna un valor
let perimetro: number = 2 * PI * radio; // Se declara una variable editable de tipo numerico y se le asigna un calculo numerico para calcular perimetro
let area: number = PI * radio ** 2; // Se declara una variable editable de tipo numerico y se le asigna un calculo numerico para cacular area
PI = 3.1415; //para una mejor precision
console.log(perimetro); // imprime en pantalla el perimetro
console.log(area); //imprime en pantalla el area
