// Objetos - Destructuring de dos o mas objetos

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
} 

const cliente = {
    nombre : 'Juan',
    premium : true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premium} = cliente 
/*No se puede crear dejando el nombre de la variable como es, hay que asignar un alias esto para evitar 
problemas con apis o bases de datos que usen la misma variable*/
console.log(nombre, precio, disponible)
console.log(nombreCliente,Premium) //Y para poder llamarlo ocupas poner el alias y no la variable