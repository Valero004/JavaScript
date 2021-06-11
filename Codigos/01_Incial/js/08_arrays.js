// let coleccionNumeros =[1,2,3,4,5,6,7,8,9];
// let coleccionCosas = ['uno', 1, true, 3.4];

// coleccionCosas.forEach(element => console.log(element));

// console.log(coleccionCosas[0]);

// coleccionCosas[0] = 'otro valor';

// console.log(coleccionCosas);

// coleccionCosas[5]= 'nuevo valor';

// console.log(coleccionCosas);

// coleccionNumeros[9]= 'true'; //ahora el array es de any en vez de numeros solaments

// let equipos = ['atleti','madrid','barsa','sevilla','getafe','alcorcon'];
// equipos.push('villareal','alaves','eibar') // push. añade valores al final del array
// console.log(equipos);
// console.log(`Equipo eliminado ${equipos.pop()}`); //pop. elimina y devuelve la ultima posición
// equipos.unshift('valencia','leganes')   //unshift. añade valores al principio del array
// console.log(equipos);
// console.log(`Equipo eliminado ${equipos.shift()}`) //shift.elimina el primer elemento del array y lo retorna
//obtener un array con los equipos que tienen una B o una l
// let equipos = [
//   ["Atleti",52],
//   ["Madrid",56],
//   ["Barsa",44],
//   ["Sevilla",2],
//   ["Getafe",4],
//   ["Alcorcon",5],
// ];
// let filtro = [];

// equipos.forEach(element => {
// if(element.includes('B') || element.includes('l')){
//             filtro.push(element);
//         }   
// });
// console.log(filtro);

// //o

// equipos.filter((element)=>element.includes('B')||element.includes('l'));

// for (let index = 0; index < equipos.length; index++) {
//     equipo = equipos[index];
//     console.log(equipo[1])
// }
let numero =[1,2,3,4,5,6,7,8,9,0]
let equipos = [
  ["Atleti",52],
  ["Madrid",56],
  ["Barsa",44],
  ["Sevilla",24],
  ["Getafe",46],
  ["Alcorcon",25],
];
equipos.sort((equipoA, equipoB)=>{
    if (equipoA[1]>equipoB[1]) {
        return-1;
    }else if (equipoA[1]<equipoB[1]) {
        return 1;
    }else{
        return 0;
    }
})
equipos.forEach((element,index) => {
    console.log(`${index+1} _ ${element[0]} ${element[1]}`);
});