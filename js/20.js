// Scope - Esto quiere decir que las variables se pueden volver a declarar
//Siempre y cuando  las variables se encuentren dentro de una funcion
// Tambien dice que las variables pueden entrar a la funcion pero las variables dentro de la funcion no salen de ahi
const precio = 300 
function unaFuncion() {
    const precio = 600
    console.log(precio)
}

if (true) {
    console.log(precio)
}

unaFuncion()