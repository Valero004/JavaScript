console.log('inicio busquedas js');

// let elemento = document.getElementsByTagName('select');
// console.log(elemento[0]);

// let elemento = document.getElementById('exampleInputProfesion1');
// console.log(elemento);

// let elemento = document.getElementsByClassName('form-control');
// for (let index = 0; index < elemento.length; index++) {
//     console.log(elemento[index]);
// }

// let elemento = document.querySelectorAll('input');
// elemento.forEach(element => {
//     console.log(element.value);
// });
// let elemento = document.querySelector('exampleInputNombre');
// console.log(elemento);

function botonFormpulsado(nombre, apellido, edad){
    console.log('Boton pulsado');
    if (nombre != ''&& apellido !='' && edad !='') {
        alert(`${nombre} ${apellido}, ${edad} años`)
    }else{
        alert('Debes rellenar todos los campos')
    }

}