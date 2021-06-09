
//if
let nota = 6;
/*
if(nota>0 || nota <10){
 alert('La nota introducida no es válida')
}else if(nota > 5){
    alert('apto')
    if (nota <6){
        alert('suficiente')
    }else
    if(nota<7){
        alert('bien')
    }else if(nota <9){
        alert('notable')
    }else{
        alert('sobresaliente')
    }
}else{
    alert('No apto')
}
*/

//condicion ? condicion_true:condicion_false 
/*
nota > 5 ? alert('aprobado'): alert('suspenso');
*/
/*
while (nota<10){
     alert(`nota es ${nota}`)
     nota++;
}
*/
//pedir un numero por teclado 
//generar un numero aleatorio
//continuar pidiendo numeros por promt hasta que acierte el numero generador
//cuando se acierte aparecera un alert diciendo el numero de intentos utilizados
/*let nAdivinar = (Math.random()*11);
nAdivinar = Math.round(nAdivinar);
let n = 0;
let intentos =0;
do{
   n= Number (prompt("Numero"));
   intentos ++;
}while(nAdivinar != n);
alert(`Enhorabuena has adivinado el numero\nIntentos: ${intentos}`);
*/

// let coleccion = ['uno','dos','tres','cuatro','cinco','seis']
// coleccion.forEach((element) => {console.log(element)});


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for (const iterator of object) {
    
// }
let confirmacion= confirm('Estas seguro que quieres continuar')
if(confirmacion){
    alert('terminos aceptados')
}else{
    alert('proceso cancelado')    
}