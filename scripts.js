
addEventListener ("click", totalPrecio)
//calcular entradas

 function totalPrecio(cantidadTickets, categoriaTickets) {
       
if (categoriaTickets == "Estudiante"){
    document.return(40*cantidadTickets);
} else if(categoriaTickets == "Trainee"){
    document.return(100*cantidadTickets);
} else if(categoriaTickets == "Junior"){
    document.return(170*cantidadTickets);
} else if(categoriaTickets == "Sin Categoria"){
        document.return(200*cantidadTickets);
}
}

console.log (totalPrecio(1, 'Sin Categoria'))
 
