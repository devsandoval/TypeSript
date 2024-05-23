let nota:number = 6.3

if (nota >=1.0 && nota <=7.0){
    if(nota >= 6.0){
        console.log("Aprobado con distincion maxima")
    }else if (nota >=5.0){
        console.log("Aprobado con distincion")
    }else if(nota >=4.0){
        console.log("Aprobado")
    }else if(nota<= 3.9){
        console.log("Reprobado")
    }
}else{
    console.log("fuera de rango ")
}

let cafe: number = 2

switch (cafe){
    case 1: console.log("Americano")
        break
    case 2: console.log("Expresso")
        break
    case 3: console.log("Capuchino")
        break
    default:
        console.log("fuera de rango")
}