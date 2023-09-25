//Objetos

// const nombre = 'Tablet'
// const precio = 300
// const disponible = true

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto)
console.log(producto.nombre)

//Destructuring

const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhancement 

const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado : autenticado,
    usuario : usuario
}
console.log(nuevoObjeto)
// Podemos omitir lo que esta despues del punto si el resultado es igual a lo anterior

const nuevoObjeto1 = {
    autenticado,
    usuario
}
//Pero si tiene diferente nombre no va a funcionar
console.log(nuevoObjeto1)