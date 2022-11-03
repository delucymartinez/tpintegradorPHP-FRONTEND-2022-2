const cantidadTickets = document.getElementById("inputCantidad").value
const categoriaTickets = document.getElementById("categoriaTickets").value 
const botonResumen = document.getElementById("botonResumen")
const botonBorrar = document.getElementById("botonBorrar")

botonResumen.addEventListener("click", totalPrecio);

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

console.log (totalPrecio(3, "J"))
 
