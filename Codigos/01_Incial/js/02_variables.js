/*
    VARIABLES
                tipo(acceso) nombre = valor
*/

//const = constante, no se puede modificar
const NOMBRE = "Ana";
console.log("Mi nombre es: " + NOMBRE);
//var = variable, se puede modificar desde cualquier parte
var edad = 18;
edad = 19;
console.log("Mi edad es: " + edad);
//let = variable cuyo hambito es el sitio en el que esta declarado
let experiencia = true;

let nombreString = "Ana";
let edadNumber = 13;
let edadNumberDecimal = 14.4;
let experienciaBoolean = true;
let cualquierCosaNull = null; // --> existe pero no tiene valor
let cosaSinDefinir = undefined; // --> tipo sin definir
let cosaColeccion = ["uno", 1, true, "dos"];
let cosaColeccionMultiple = [[], [], []];
let variableObjeto = { nombre: "Ana", edad: 18, esperiencia: true };
let fecha = new Date()
let palabraObject = new String ("nombre objeto");

console.log("mi nombre es:"+ nombreString+ " y tengo "+edad+" años.")
console.log(`Mi nombre es: ${nombreString} y tengo ${edad}, mi experiencia es ${experiencia}`);
console.log("Mi nombre es %s, tengo %d años y mi experiencia es %o",nombreString,edad,experiencia);

console.log(typeof edad);