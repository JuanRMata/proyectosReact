// Imports y Exports

// import comoquiera from './funciones.js' //Es para importar un archivo que previamente declaramos un export default 'nombre de la funcion'

//al poner el ./ es para decirle que se encuentra dentro de la misma ruta o carpeta que este archivo

//Si usamos import debemos especificar en HTML despues del src'' que es un type = 'module'

//const resultado = comoquiera(20,30)

//console.log(resultado)


//NOTA: SI ESTAMOS IMPORTANDO DESDE UN ARCHIVO QUE EXPORTA SOLO UNA FUNCION, PODEMOS USAR CUALQUIER NOMBRE
// PERO SI EL ARCHIVO AL QUE ESTAMOS IMPORTANDO TIENE EXPORTANDO MAS DE UNA FUNCION, OCUPAMOS USAR EL NOMBRE EXACTO
// DE LA FUNCION 

import {sumar} from './funciones.js' //Aqui ya estamos llamando a las funciones del otro archivo, pero es muy importante agrega un
import {restar} from './funciones.js' // Destructuring de objeto '{nombreDeLaFuncion}'

const suma = sumar(20,30)
const resta = restar(30,10)

console.log(suma)
console.log(resta)

//NOTA: PODEMOS LLEGAR A CREAR ALIAS A LAS FUNCIONES QUE LLAMEMOS POR SI SE NOS REPITE CON ALGUNA QUE YA TENGAMOS EN FUNCION
// import {sumar as 'cualquierNombre'} from './funciones.js'