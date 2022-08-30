// A traves de js podemos guardar datos de manera local, por "localStorage"

// Con "setItem", lo que nos permite, es poder almacenar un nombre, por un par clave valor

localStorage.setItem("nombre","Enzo")

// Si queremos recuperar ese dato almacenado, lo hacemos a traves de "getItem"
// Debemos guardarlo en una variable para almacenarlo

let nombreAlmacenado = localStorage.getItem("nombre")
console.log(nombreAlmacenado);
// Al consologuearlo, nos aparece en la consola "Enzo", clave que establecimos a la hora de setearlo con "setItem"

/* -------------- */

// Tenemos dos tipos de almacenamiento local, el "localStorage" que guarda los datos incluso cerrando la ventana, el cual acabamos de ver, y el "sessionStorage" que guarda solo durante la sesion, si se cierra la ventana/pestaña, se eliminan los datos

sessionStorage.setItem()