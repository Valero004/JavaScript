console.log("Inicio busquedas js");
// let elemento = document.getElementsByTagName("select");
// let elemento =  document.getElementById('exampleInputProfesion')
// let elemento =  document.getElementsByClassName('form-control')
/*for (let index = 0; index < elemento.length; index++) {
    console.log(elemento[index]);
}*/

//let elemento = document.querySelectorAll("input");
let elemento = document.querySelector(".form-control");
/*elemento.forEach(element => {
    console.log(element.value);
});*/

// let buttonForm = document.querySelector("#botonMostrar");
let buttonGuardar = document.querySelector("#botonGuardar");
// buttonForm.addEventListener("click", (evento) => {
//   //console.log(evento.target);
//   let nombre = document.querySelector("#exampleInputNombre1").value;
//   let apellido = document.querySelector("#exampleInputApellido1").value;
//   let edad = document.querySelector("#exampleInputEdad1").value;
//   let profesionSelect = document.querySelector("select");
//   let sexo = document.querySelector("input[name='sexo_grupo']:checked").value;

//   if (nombre.length > 0 && apellido.length > 0) {
//     document.querySelector("#nombrePerfil").textContent = nombre;
//     document.querySelector("#apellidoPerfil").textContent = apellido;
//     document.querySelector("#edadPerfil").textContent = edad;
//     document.querySelector("#profesionPerfil").textContent =
//       profesionSelect.options[profesionSelect.selectedIndex].value;
//     document.querySelector("#sexoPerfil").textContent = sexo;
//   } else {
//     alert("Faltan datos");
//   }
/*
  let apellido = document.querySelector("#exampleInputApellido1");
  let edad = document.querySelector("#exampleInputEdad1");
  if (nombre.value.length > 0 && apellido.value.length > 0) {
    alert(
      `Nombre: ${nombre.value}\nApellido: ${apellido.value}\nEdad: ${edad.value}`
    );
  } else {
    alert("falta algun dato");
  }*/

/* let check = document.querySelector("input[type='checkbox']");
  let select = document.querySelector("select");
  let grupo = document.querySelector("input[name='sexo_grupo']:checked");
  //console.log(select.selectedOptions[0]);
  console.log(grupo);
  console.log(select.options[select.selectedIndex].value);
  console.log(check.checked);
  console.log(grupo.value); 
});*/

// buttonGuardar.addEventListener("click", () => {
//   //console.log('pulsado guardar');
//   let nombre = document.querySelector("#exampleInputNombre1").value;
//   let apellido = document.querySelector("#exampleInputApellido1").value;
//   let edad = document.querySelector("#exampleInputEdad1").value;
//   let experiencia = document.querySelector("#exampleExperiencia1").checked;
//   let lista = document.querySelector("ul");
//   //console.log(contenidoUsuarios);

//   let nodo = document.createElement("li");
//   nodo.textContent = `${nombre} ${apellido}, ${edad}`;
//   node.value = id;
//   if (experiencia) {
//       nodo.className = ".con-experiencia";
//   }else{
//       nodo.classList.add(".sin-experiencia");
//   }
//   lista.appendChild(nodo);
//   id++;
// });

let palabra = "";
/*function inputTeclaPulsada(nombre) {
   
    //palabra = evento.key +palabra
    console.log(nombre);
}*/

/*function botonFormPulsado() {
    let nombre = document.querySelector('#exampleInputNombre1') 
    let apellido = document.querySelector('#exampleInputApellido1')
    let edad = document.querySelector('#exampleInputEdad1')
    if (nombre.length > 0 && apellido.length > 0){
        alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`)
    } else {
        alert('falta algun dato')
    }
}*/

/*function metodoCambioSelect() {
  let select = document.querySelector("select");
  console.log(select.options[select.selectedIndex].value);
}*/

// document.querySelector("select").addEventListener("change", (event) => {
//   console.log(event.target.options[event.target.selectedIndex].value);
// });

// document
//   .querySelector("input[type='checkbox']")
//   .addEventListener("change", (event) => {
//     //console.log(event.target.checked);
//     let seleccion = event.target.checked;
//     if (!seleccion) {
//       document.querySelector("#exampleInputNombre1").innerHTML = " ";
//     }
//   });

let id = 1;
buttonGuardar.addEventListener("click", () => {
id++;
  let nombre = document.querySelector("#exampleInputNombre1").value;
  let apellido = document.querySelector("#exampleInputApellido1").value;
  let edad = document.querySelector("#exampleInputEdad1").value;
  let experiencia = document.querySelector("#exampleExperiencia1").checked;
  let lista = document.querySelector("tbody");

  let tr = document.createElement("tr");
  if (experiencia) {
    tr.className = "table-info";
  } else {
    tr.className = "table-danger";
  }

  let th = document.createElement("th");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  th.scope = "row";
  th.textContent = `${id}`;
  td1.textContent = `${nombre}`;
  td2.textContent = `${apellido}`;
  td3.textContent = `${edad}`;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  lista.appendChild(tr);
  
});