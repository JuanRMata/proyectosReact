// Objetos Manipulacion

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
} 

//Object.freeze(producto) Con esta propiedad a partir de aqui ya no puede modificar el objeto
//Object.seal(producto) Con esta propiedad te deja modificar solo propiedades existentes, no permite añadir ni eliminar

//Rescribir un valor
producto.nombre = 'Monitor curvo'

//Si no existe, lo va a añadir
producto.imagen='imagen.jpg'

delete producto.disponible // Elimina la propiedad

console.table(producto)