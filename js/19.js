// Condicionales ternarios - Es un if en una sola linea
const autenticado = false

//Se ponen en una linea pero puedes acomodarlos de la siguiente forma para mejor
// entendimiento dando TAB
autenticado ? 
    console.log('usuario autenticado') :
    console.log('Usuario no autenticado')

//Doble ternario

const saldo = 60
const pagar = 500
const tarjeta = false

saldo > pagar ? 
    console.log('Si puedes pagar') : 
    tarjeta ? 
    console.log('Puedes pagar con tarjeta') : 
    console.log('No no puedes pagar')

