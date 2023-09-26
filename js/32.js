// Template Strings

const producto = 'Tablet de 12 pulgadas'
const precio = 400
const marca = 'orange'

console.log(producto + precio + marca) 
console.log(producto + ' ' + precio + ' ' +marca) //Hay que evitar esto

console.log(`${producto} $${400} dolares ${marca}`) //ES MEJOR USAR TEMPLATE STRINGS ${variable}

function textoDeFuncion(){
    return 'texto de funcion'
}
console.log(`${producto} $${400} dolares ${marca} ${textoDeFuncion()}`) //Tambien podemos llamar funciones a la cadena de texto
//Esto mediante el uso de ${nombreDeLaFuncion()} 

