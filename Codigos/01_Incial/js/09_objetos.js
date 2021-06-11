let objeto={nombre:'Ana', apellidos: 'Valero', edad: 18, hobbies: ['dormir', 'comer','musica'], hijos:[{nombre:'no',edad:-1},{nombre:'no0',edad:-4}] };
console.log(objeto.apellidos);
objeto.hobbies.forEach(element => {
    console.log(element);
});
console.log( objeto.hijos.filter((element) => element.edad<7));
console.log(objeto['hijos']);
console.log(objeto.hijos[0].nombre);