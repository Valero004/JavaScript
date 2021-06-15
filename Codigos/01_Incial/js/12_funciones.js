// function funcionNormal() {
//     console.log('Ejecución Normal');
// }
// function funcionParametros(parametroUno, parametroDos) {
//     console.log(`${parametroUno} ${parametroDos}`)
// }
// funcionNormal();
// funcionParametros('hola',4);

// function funcionParametrosAdicionales() {
//     console.log( arguments);
//     console.log('Ejecución adicional');
//     if (arguments.length>0) {
//         console.log('hay cosas');
//     }else{
//         console.log('No has pasado nada');
//     }
// }
// funcionParametrosAdicionales('hola',5,14,true);
// function funcionParametrosDefecto(parametroUno,parametroDos = 'dos') {
//     console.log(parametroUno+ ' '+ parametroDos);
// }
// funcionParametrosDefecto('uno','tres');

// let funcionSuma = function (numeroUno,numeroDos) {
//     console.log(`${numeroUno+numeroDos}`);
// }
// funcionSuma(4,4);

// let funcionDivision = (numeroUno, numeroDos)=>console.log(numeroUno/numeroDos);
// funcionDivision(8,2);

function mostrarMensaje(parametro) {
    console.log(`Esto es una funcion que muestra un mensaje y el parametro es este ${parametro}`);
}
function funcionCompleta(funcion, nombre) {
    funcion(nombre)
}
//funcionCompleta(mostrarMensaje,"paco");
funcionCompleta((nombre)=>{console.log(`Esta funcion ejecuta cosas de ${nombre}`);}, 'Ana')

// function asincroniaInterval() {
//     setInterval(() => console.log('funcion interval'), 5000);
// }
// asincroniaInterval();
function asincroniaTimeout(){
    setTimeout(() => {
        console.log('funcion timeout');
    }, 300);
}
asincroniaTimeout();