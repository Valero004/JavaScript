let numero = 5;
let promesa = new Promise((resolve,reject)=> {
    //lo que se ejecuta
    //proceso que modifica el numero segun movidas
    //esto tarda
    if (numero>0) {
        resolve(numero);
    }else{
        reject('Error en el numero');
    }
});

promesa.then((data)=>{console.log(data);}).catch((error)=>{console.log('error');})
//o
promesa.then((data)=>{console.log(data);},(error)=> {console.log(error)});