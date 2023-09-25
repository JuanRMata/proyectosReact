// Manipular elementos HTML con JavaScript

//Se usa .nombreClase para acceder a la clase del documento
//Se usa la etiqueta como es 'etiqueta' para acceder a la etiqueta o etiquetas que sean iguales
//Se usa el '#' para acceder al id que sea igual al que esta en html
const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo heading'

const inputNombre = document.querySelector('#nombre')

inputNombre.value = 'Dato random' //Todo lo anterior sirve para modificar solo un elemento usando querySelector

console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
//Pequeño ejercicio propio intentando modificar uno a uno de los elementos del querySelectorAll
let contador = 0
enlaces.forEach((elemento) => {
    elemento[contador] = elemento.textContent = 'abcd' + contador
    contador = contador + 1
}
) //SI QUEREMOS MODIFICAR TODOS LOS ELEMENTOS CON querySelectorAll es muy importante iterar sobre ellos
// Y DESPUES PONER QUE ES LO QUE LE QUEREMOS MODIFICAR