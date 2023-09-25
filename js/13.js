// Funciones - function Expression

// function sumar(numero1 = 0, numero2 = 0) { //ESTO ES FUNCTION DECLARATION
//     console.log(numero1 + numero2)
// }


// LA DIFERENCIA ES QUE CON EXPRESSION, NO PUEDES ACCEDER A LA FUNCION ANTES DE CREARLA/DEFINIRLA
const sumar = function(numero, numero2) { // ESTO ES FUNCTION EXPRESSION
    return numero + numero2
}

const resultado = sumar(5,5)
console.log(resultado)