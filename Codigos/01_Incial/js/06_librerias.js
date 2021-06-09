//date          hay que tener en cuenta que la lista de dias, meses , etc. comienza en 0 por lo que hay que sumarle uno
let fechaActual = new Date();               //fecha actual
console.log(fechaActual.getDate());         //dia del mes
console.log(fechaActual.getDay());          //dia de la semana
console.log(fechaActual.getMonth());        //numero del mes
console.log(fechaActual.getMilliseconds()); //milisegundos
console.log(fechaActual.getSeconds());      //segundos
console.log(fechaActual.getMinutes());      //minutos
console.log(fechaActual.getHours());        //horas
console.log(fechaActual.getTime());         //TimeStamp
fechaActual.setFullYear(2019);              //cambia el año
let fechaPasada = new Date(2002,6,10);
fechaPasada.getTime();
console.log(`Fecha Pasada: ${fechaPasada}`);

//fecha pasada que sea el dia de hoy menos 4 meses
console.log(fechaActual.getMonth()-4);

//funcionando con librerias
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().subtract(10, 'days').calendar());

let frase = '                   hola esto es un ejemplo de frase para tratarla con js';
frase = frase.trim();  //elimina todos los espacios de delante de la frase, de esta forma ocupa menos
console.log(frase.substring(0,6)); //coge los caracteres que estan entre los parametros
console.log(frase.substr(5,15)); // coge desde el caracter que se pone y imprime los caracteres que se ponen
console.log(frase.sub()); 
console.log(frase.startsWith("h",8));
console.log(frase.split());
console.log(frase.slice(1,6));
console.log(frase.search);
//console.log(frase.replace(" ", ""));
console.log(frase.indexOf);//la posición de un vcaracter concreto
