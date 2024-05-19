//¡//////////////////////////////////////
//!  CORREXION DE ERRORES Y PRUEBAS   !//
//¡//////////////////////////////////////




const numeroConstante__2: number = 132;
const unidad_2: number = numeroConstante__2 % 10 // Obtener el primer dígito de izquierda a derecha
const restounidad_2: number = numeroConstante__2 % 100 // Encuentra el resto del total
const centena_2: number = (numeroConstante__2 - restounidad_2) / 100 // Obtener el segundo dígito de izquierda a derecha
const decena_2: number = ((numeroConstante__2 % 100) - (numeroConstante__2 % 10)) / 10 // Obtener el primer dígito de izquierda a derecha
console.log(`El numero ${numeroConstante__2} invertido es ${unidad_2}${decena_2}${centena_2}`)

console.log(unidad_2)
console.log(restounidad_2)
console.log(centena_2)
console.log(decena_2)