//calcular entradas

const cantidadTickets = document.getElementById("cantidadTickets").value
const categoriaTickets = document.getElementById("categoriaTickets").value 

const botonResumen = document.getElementById("botonResumen");
botonResumen.addEventListener("click", totalPrecio);


const total = document.getElementById("total").value



function totalPrecio (cantidadTickets, categoriaTickets) {    
if (categoriaTickets == "Estudiante"){
    return(40*cantidadTickets).innerHTML;
} else if(categoriaTickets == "Trainee"){
    return(100*cantidadTickets).innerHTML;
} else if(categoriaTickets == "Junior"){
    return(170*cantidadTickets).innerHTML;
} else if(categoriaTickets == "SinCategoria"){
    return(200*cantidadTickets).innerHTML;
}
}


// Reset formulario
const formulario = document.getElementById("formulario").value 
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarFormulario)
function borrarFormulario() {document.getElementById("formulario").reset();}


//validar formulario 
inputNombre = document.getElementById("inputNombre");
inputApellido = document.getElementById("inputApellido");
inputEmail = document.getElementById("inputEmail");
pMensajeNombre = document.getElementById("pmensajeNombre");
pMensajeApellido = document.getElementById("pmensajeApellido");
pMensajeEmail = document.getElementById("pmensajeEmail");

expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/




botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);

function validarNombre() {
    if (inputNombre.value.length < 3) {
        pMensajeNombre.innerHTML = "Ingrese un nombre válido";
    }
    else {
        pMensajeNombre.innerHTML = "";
    }
}

function validarApellido() {
    if (inputNombre.value.length < 3) {
        pMensajeApellido.innerHTML = "Ingrese un apellido válido";
    }
    else {
        pMensajeNombre.innerHTML = "";
    }
}


function validarEmail() {
    if (!expRegular.test(InputEmail.value)) {
        pMensajeEmail.innerHTML = "El email no es válido";
    }
    else {
        pMensajeEmail.innerHTML = "";
    }
}
