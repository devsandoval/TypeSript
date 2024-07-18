/*
arreglos
*/

//arreglo con for
let array: number[] = [0, 1, 2, 3, 4]
let suma: number = 0
for (let j: number = 0; j < array.length; j++) {
    /*console.log(array[j])*/
    let elemento: number = array[j]
    if (elemento % 2 == 0) {
        console.log(elemento)
        suma += elemento
    }
}
//for inverso
for (let j: number = array.length; j >= 0; j--) {
    console.log(array[j])
}

//lo mismo pero con while
let L: number [] = [30, 11, 2, 27, 71]
let suma2: number = 0;
let i: number = 0;

while (i < L.length) {
    let elemento2: number = L[i];
    if (elemento2 % 2 == 0) {
        console.log(elemento2);
        suma2 += elemento2;
        i++;
    }

    for (let num in L) {
        console.log(L[num])
    }

    for (let valor of L){
        console.log(valor)
    }
}