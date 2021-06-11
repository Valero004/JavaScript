class Persona{

    //propiedades
    nombre;
    apellido;
    edad;

    //constructor
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //funciones
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getNombre(){
        return this.nombre;
    }

}

let persona = new Persona('Ana', 'Valero', 18);
// console.log(persona);
persona.mostrarDatos();
persona.setNombre = 'Ruben';
console.log(persona.getNombre);


