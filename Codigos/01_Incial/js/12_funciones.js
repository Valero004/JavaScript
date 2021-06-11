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

let funcionSuma = function (numeroUno,numeroDos) {
    console.log(`${numeroUno+numeroDos}`);
}
funcionSuma(4,4);

let funcionDivision = (numeroUno, numeroDos)=>console.log(numeroUno/numeroDos);
funcionDivision(8,2)