const cantidadTickets = document.getElementById("inputCantidad").value
const categoriaTickets = document.getElementById("categoriaTickets").value 
const formulario = document.getElementById("formulario").value 
const botonResumen = document.getElementById("botonResumen")
const botonBorrar = document.getElementById("botonBorrar")
const total = document.getElementById("total")



//calcular entradas


 function totalPrecio (cantidadTickets, categoriaTickets) {
       
if (categoriaTickets == "E"){
    return(40*cantidadTickets);
} else if(categoriaTickets == "T"){
    return(100*cantidadTickets);
} else if(categoriaTickets == "J"){
    return(170*cantidadTickets);
} else if(categoriaTickets == "SC"){
    return(200*cantidadTickets);
}
}




botonResumen.addEventListener("click", totalPrecio);
total.innerHTML = (totalPrecio);

// Reset formulario
botonBorrar.addEventListener("click", "formulario".reset)


console.log (3,"E")
