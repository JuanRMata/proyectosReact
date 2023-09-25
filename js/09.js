// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript','React','Node.js']

//Añadir elementos al array

//Los siguientes no deben de usarse en especial si usamos REACT
//tecnologias.push('GraphQL') // Añade al final del array
//tecnologias.unshift('GraphQL') // Añade al principio del array

//Lo siguiente se hace para hacer una copia y no modificar el arreglo original
//const nuevoArreglo = [...tecnologias, 'GraphQL'] // Lo añade al final del arreglo
//const nuevoArreglo1 = ['GraphQL', ...tecnologias]// Lo añade al principio del arreglo
// --------------------------
//Eliminar elementos de un array

//tecnologias.pop() //Esto no hay que hacerlo porque modifica el arreglo original pero sirve para eliminar el ultimo
//tecnologias.shift() // Este elimina del inicio pero tambien modifica el arreglo original
//tecnologias.splice(2,1) //Elimina los elementos a partir de la posicion que indiques, la ',' se usa para decir cuantos eliminar apartir de la posicion

//Lo anterior no es recomendable utilizarlo en REACT

// const nuevoArray = tecnologias.filter(function(elemento){ //Este es el que se recomienda usar para eliminar elementos de un array
//     return elemento !== 'HTML'
//     //return elemento === 'React' //para traer los que sean igual a lo que estas diciendo
// })
//-------------------------------------

// Remplazar del array
// tecnologias[0] = 'GraphQL' //No hay que usarlo porque modifica el array

const nuevoArray = tecnologias.map(function (elemento){ //Es preferible usarlo asi para remplazar en un array
    if(elemento === 'HTML'){
        return 'GraphQL' //Regresa GraphQL si la iteracion tech es igual a HTML
    }else{
        return elemento //Si no es igual regresa los valores normales
    } // Si no ponemos ese return tech por los valores que sean normales, ya no va a imprimir ninguno despues de cumplir con la condicion de arriba
})
console.table(tecnologias)
console.table(nuevoArray)
