/*
El Metro de Santiago ha lanzado una nueva promoción,
donde cada 5 viajes se aplica un descuento del 5% peranente y acumulable en el pasaje.
Sabiendo que el pasaje actual del metro en horario valle es de $730,
escriba un programa que muestre en una tabla el precio del pasaje luego de 30 viajes, siguiendo el formato
indicado a continuación:

n == n%5 multiplo de 5
 */

let precioPasaje: number = 730;
let pasajes: number = 1;
let pasajesMensuales: number = 1;
let textoAdicional: string = ("Descuento Aplicado!")
console.log("**Precios de Pasajes**")
while (pasajesMensuales < 31) {
    while (pasajes < 6) {
        if(pasajes==5){
            precioPasaje = (precioPasaje * 0.95);
            console.log(`Viaje ${pasajesMensuales}: $${precioPasaje} ${textoAdicional} `)
        }else{
            console.log(`Viaje ${pasajesMensuales}: $${precioPasaje}`)
        }
        pasajes = pasajes + 1;
        pasajesMensuales = pasajesMensuales + 1
        //textoAdicional = (" ")
    }

    pasajes = 1;
}
