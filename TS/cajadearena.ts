/*let persona = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    profesion: "Ingeniero",
    ciudad: "Ciudad de México"
};

console.log(persona); // Esto imprimirá el objeto completo

type Persona = {
    nombre: string;
    edad: number;
    genero: string;
    profesion: string;
    ciudad: string;
};

let persona: Persona = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    profesion: "Ingeniero",
    ciudad: "Ciudad de México"
};

console.log(persona); // Esto imprimirá el objeto completo

*/

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

enum Talla {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL"
}

type Persona = {
    id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

let persona: Persona = {
    id: 1,
    nombre: "Juan",
    talla: Talla.L,
    direccion: {
        numero: 123,
        calle: "Calle Principal",
        pais: "México"
    }
};

console.log(persona); // Esto imprimirá el objeto completo
