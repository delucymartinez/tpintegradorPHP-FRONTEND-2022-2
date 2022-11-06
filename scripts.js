//calcular entradas

const total = document.getElementById ("pesos");
const botonResumen = document.getElementById("botonResumen");

botonResumen.addEventListener("click", totalPrecio)

var precioTicket = 200 

function totalPrecio () {
    const cantidadTickets = document.getElementById("numero").value;
    const categoriaTickets = document.getElementById("tipoTicket").value; 
    cantidad = parseInt(cantidadTickets);
    
    if (categoriaTickets == "SinCategoria") {
    total.innerHTML = (precioTicket*cantidad);
    } else if (categoriaTickets == "Estudiante") {
    total.innerHTML = (precioTicket*0.2*cantidad);
    } else if (categoriaTickets == "Junior") {
    total.innerHTML = (precioTicket*0.8*cantidad);
    } else if (categoriaTickets == "Trainee") {
    total.innerHTML = (precioTicket*0.5*cantidad);
    } 
}


// Reset formulario
const formulario = document.getElementById("formulario"); 
const botonBorrar = document.getElementById("botonBorrar");

botonBorrar.addEventListener("click", borrarFormulario)
function borrarFormulario() {formulario.reset();}


//validar formulario 
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputEmail = document.getElementById("inputEmail");
const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeApellido = document.getElementById("mensajeApellido");
const mensajeEmail = document.getElementById("mensajeEmail");


expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);


function validarNombre() {
    if (inputNombre.value.length < 3) {
        mensajeNombre.innerHTML = "Ingrese un nombre válido";
    }
    else {
        mensajeNombre.innerHTML= "";
    }
}

function validarApellido() {
    if (inputApellido.value.length < 3) {
        mensajeApellido.innerHTML = "Ingrese un apellido válido";
    }
    else {
        mensajeApellido.innerHTML = "";
    }
}


function validarEmail() {
    if (!expRegular.test(inputEmail.value)) {
        mensajeEmail.innerHTML = "Ingrese un email válido";
    }
    else {
        mensajeEmail.innerHTML = "";
    }
}

