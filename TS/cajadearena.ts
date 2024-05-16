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

enum Talla {Chica = "S", Mediana = "M", Grande = "L", ExtraGrande = "XL"}

type Persona = {
    id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

let persona: Persona = {
    id: 1,
    nombre: "Juan",
    talla: Talla.Grande,
    direccion: {
        numero: 123,
        calle: "Calle Principal",
        pais: "México"
    }
}

let persona2: Persona = {
    id: 2,
    nombre: "Cesar",
    talla: Talla.Mediana,
    direccion: {
        numero: 21,
        calle: "General Jofre",
        pais: "Chile"
    }
};


console.log(persona); // Esto imprimirá el objeto completo
console.log(persona2); // Esto imprimirá el objeto completo
