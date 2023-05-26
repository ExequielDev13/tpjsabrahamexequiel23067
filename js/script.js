function descuento (cantTicket, categCl) {
    let valorTicket = 200;
    let precioFinal;
    

    if (categCl === "Estudiante") {
        precioFinal = (valorTicket*cantTicket)-(valorTicket*0.80);

    }else if (categCl === "Trainee") {
        precioFinal = (valorTicket*cantTicket)-(valorTicket*0.50);
    }else if (categCl === "Junior"){ 
        precioFinal = (valorTicket*cantTicket)-(valorTicket*0.15);
    }else {
        "";
    }

        return precioFinal;
}

let formulario = document.getElementById("form_result");
let mensajeResultado = document.getElementById("mensaje_resultado");
let tickets = document.getElementById("ctickets")
let categoria = document.getElementById("categor");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    mensajeResultado.textContent = descuento(tickets.value, categoria.value);
}
)
formulario.addEventListener("reset", () => {
   mensajeResultado.textContent = "";
}
)



