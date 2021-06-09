// //EJERCICIO 1
// alert('Ejercicio 1.')
// alert('Ejercicio 1.1\n Hola Mundo');
// alert('Ejercicio 1.2\n 5*5');
// alert(`Ejercicio 1.2\n ${5*5}`);

// //EJERCICIO 2
// alert('Ejercicio 2.')
// const Fijo = true;
// let numero = "1";
// let numeroCorrecto = 1;
// let suma = numero + numero;
// let sumaOK = numeroCorrecto + numeroCorrecto;
// alert(`Ejercicio 2.4\n Suma = ${suma}\n SumaOk = ${sumaOK}`);
// alert(`Ejercicio 2.5\n Suma tipo: ${typeof(suma)}\n SumaOk tipo: ${typeof(sumaOK)}`);

// //EJERCICIO 3
// alert('Ejercicio 3.');
// let lado1 = Number (prompt("Valor del primer lado:"));
// let lado2 = Number (prompt("Valor del segundo lado:"));
// let lado3 = Number (prompt("Valor del tercer lado:"));
// let lado4 = Number (prompt("Valor del cuarto lado:"));
// if(lado1 == lado2 && lado1 == lado3 && lado1 == lado4 && !isNaN(lado1)&& !isNaN(lado2)&& !isNaN(lado3)&& !isNaN(lado4)){
//     let area = lado1*lado1;
//     alert(`Los valores son correctos\n El area del cuadrado es: ${area}`);
// }else{
//     alert('Los valores no son correctos');
// }

// //EJERCICIO 4
// alert('Ejercicio 4.');
// let numero = Number( prompt('Introduzca el valor'));
// if(!isNaN(numero)){
//     if(numero%2 == 0){
//         alert('Par');
//     }else{
//         alert('Impar');
//     }
// }else{
//     alert('Valor no válido');
// }

// //EJERCICIO 5
// alert('Ejercicio 5.');
// let nombre = prompt('Introduce el nombre');
// let letra = prompt('Introduce la letra');
// let nletras = 0;
// for (let index = 0; index < nombre.length; index++) {
//     if(nombre.charAt(index)== letra){
//         nletras++;
//     }
// }
// if(nletras!=0){
//     alert(`La letra aparece ${nletras} veces`)
// }else{
//     alert(`La letra no aparece`)
// }

// //EJERCICIO 6
// alert('Ejercicio 6.');
// let n1 = Number(prompt(`Número 1`));
// let n2 = Number(prompt(`Número 2`));

// if(!isNaN(n1)&& n1>0){
//     if(n1>n2){
//         alert(`${n1} > ${n2}`)
//     }else if (n1<n2) {
//         alert(`${n1} < ${n2}`)
//     }else{
//         alert(`${n1} = ${n2}`)
//     }
// }else{
//     alert('ERROR')
// }

// //EJERCICIO 7 (2 DE TIPO DATE)
// alert('Ejercicio 7.');
// let fechaActual = new Date();
// alert(`Buenas, hoy es ${moment().format('dddd')} ${console.log(fechaActual.getDate())} y son las ${moment().format('LT')}`);

// //EJERCICIO 8 (3 DE TIPO DATE)
// let fechaActual= new Date();
// let fechaPasada= new Date(2020,0,1);
// let diasPasados= (fechaActual.getTime()-fechaPasada.getTime())/86400000;
// console.log(diasPasados);

// //bucles, operaciones
// //EJERCICIO 9
// alert("Ejercicio 9.");
// let numero = prompt("Introduce el número");
// numero = Number (numero);
// if (!isNaN(numero) && numero > 0) {
//   for (let index = numero; index >= 0 ; index--) {
//     console.log(numero);
//     numero--;
//   }
// } else {
//   alert("Error");
// }

//EJERCICIO 10
alert("Ejercicio 10.");
let confirmacion = false;
let solucion = 0;
do {
  let n1 = prompt("Introduce el primer operador");
  let n2 = prompt("Introduce el primer operador");
  if (!isNaN(n1) && n1>0 && !isNaN(n2) && n2>0) {
    suma = n1+n2;
    alert(`Suma ${n1} + ${n2} = ${suma}`);
    resta = n1-n2;
    alert(`Resta ${n1} - ${n2} = ${resta}`);
    multiplicacion = n1*n2;
    alert(`Multiplicación ${n1} * ${n2} = ${multiplicacion}`);
    division = n1/n2;
    alert(`División ${n1} / ${n2} = ${division}`);
    resto = n1%n2;
    alert(`Resto ${n1} % ${n2} = ${resto}`);
  }

} while (!confirmacion);

// //EJERCICIO 11
// alert("Ejercicio 11.");
