const cantidadTickets=document.getElementById("inputnumber").value
const categoriaTickets=document.getElementById("categoriaTickets").value 
const botonResumen = document.getElementById("botonResumen")
const botonBorrar = document.getElementById("botonBorrar")

botonResumen.addEventListener("click", totalPrecio);

//calcular entradas


 function totalPrecio (cantidadTickets, categoriaTickets) {
       
if (categoriaTickets == "E"){
    document.return(40*cantidadTickets);
} else if(categoriaTickets == "T"){
    document.return(100*cantidadTickets);
} else if(categoriaTickets == "J"){
    document.return(170*cantidadTickets);
} else if(categoriaTickets == "SC"){
        document.return(200*cantidadTickets);
}
}

console.log (totalPrecio(1, "Sin Categoria"))
 
