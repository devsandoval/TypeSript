let linea: string = "la casa esta en la zona de la casa rozada"
let palabras: string[] = []
let frecuencia: number[] = []
let recorre: string[]= linea.split (" ")

for (let i in recorre){
    let indice: number = palabras.indexOf(recorre[i])
    if (indice >= 0) {
        frecuencia[indice] +=1
    }else{
        palabras.push(recorre[i])
        frecuencia.push(1)
    }
}

for (let i in palabras){
    console.log(`${palabras[i]} \t ${frecuencia[i]}"`)
}
