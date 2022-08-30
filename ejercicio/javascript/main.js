/* 
1- Crear un formulario pidiendo 5 datos
2- Almacenar las respuestas de la persona en el localStorage
3- Al refrescar, debe mostrar los datos
*/

// La idea es que, en el valor del localStorage, vayan los "value" de los inputs

// Creo un funcion donde se almacenaran los datos, la cual se activara con el boton del formulario

function guardarDatos(){
// Le asigno una variable al DOM de cada input con su value
let nombre = document.querySelector("#nom").value
let apellido = document.querySelector("#ape").value
let mail = document.querySelector("#mail").value
let direccion = document.querySelector("#direc").value
let localidad = document.querySelector("#localidad").value

// Seteo el localStorage con una "key" para cada value
localStorage.setItem("nombre",nombre)
localStorage.setItem("apellido",apellido)
localStorage.setItem("mail",mail)
localStorage.setItem("direccion",direccion)
localStorage.setItem("localidad",localidad)
}

// Guardo el dato almacenado en las keys para que queden al refrescar o cerrar la ventana/pestaña
let nombreAlmacenado = localStorage.getItem("nombre")
let apellidoAlmacenado = localStorage.getItem("apellido")
let mailAlmacenado = localStorage.getItem("mail")
let direccionAlmacenado = localStorage.getItem("direccion")
let localidadAlmacenado = localStorage.getItem("localidad")

// Boton del formulario con evento "click"
let botonFormulario = document.querySelector("#boton")
botonFormulario.addEventListener("click",guardarDatos)

