// Unir dos objetos o mas

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
} 

const cliente = {
    nombre : 'Juan',
    premium : true
}

//const nuevoObjeto = Object.assign(producto,cliente)  // NO

const nuevoObjeto2 = {
    producto : {...producto},
    cliente : {...cliente}
} // Los tres puntos ... indican que esta tomando una copia de ese objeto
console.log(nuevoObjeto2)