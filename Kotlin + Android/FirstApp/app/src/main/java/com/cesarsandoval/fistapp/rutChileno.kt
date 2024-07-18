package com.cesarsandoval.fistapp

fun main() {
    println("Digite su rut: ")
    var rut: String = readln()
    validar(rut)
}

fun validar (rut: String){
    var rutdividido = rut.split("-")
    var serie: Int = 2
    var acomulador: Int = 0
    var verificador: Int
    var rutA = rutdividido[0]
    var rutB = rutdividido[1]
    var rutinertido = rutA.reversed()
    println("Bienvenido $rut $rutA - $rutB")
    println(rutinertido)
    for (elemento in rutinertido){
        println("$elemento * $serie")
        acomulador = acomulador + (elemento.digitToInt() * serie)
        serie +=1
        if (serie>(rutinertido.length)-1){
            serie = 2
        }
    }
    println("para obtener el digirto verificador tenemos que restar 11 al modulo de $acomulador con 11 => 11-($acomulador%11)")
    verificador = (11 -(acomulador%11)) // println(11-(acomulador.mod(11))) tambien sirve
    if (verificador == 0) {
        println("el digito verificador es: K")

    } else {
        println("el digito verificador es: $verificador")
    }

}