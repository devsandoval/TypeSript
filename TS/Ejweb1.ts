function procesarNumeros(numeros: number[]): void {
    for (const numero of numeros) {
        if (numero === 42) {
            break;
        }
        console.log(numero);
    }
}

// Ejemplo de uso con un array de números
const numerosDeEntrada = [10, 25, 42, 50, 60]; // Puedes cambiar este array para probar diferentes entradas
procesarNumeros(numerosDeEntrada);