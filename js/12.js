// Funciones - Function declaration

// function sumar() {
//     console.log(2+2)
// }

// function sumar1(numero, numero2) {
//     console.log(numero + numero2)
// }

// sumar1(20,3) // Asi se pueden llamar a las funciones, puede tambien ir antes de crear la funcion

function sumar(numero1 = 0, numero2 = 0) {
    return [numero1 + numero2, 'Hola mundo']
}

function sumar(numero1 = 0, numero2 = 0) { //Una funcion tambien puede retornar un objeto, obviamente dandole las propiedades y la forma del objeto
    return {
        resultado : numero1 + numero2, 
        mensaje : 'Hola mundo'
    }
}

const {resultado,mensaje} = sumar(5,5)

console.log(resultado)
console.log(mensaje)