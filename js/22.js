// Selectores del DOM

// querySelector
// para acceder a una clase es .nombreDeclase
// const heading = document.querySelector('h2')

// console.log(heading)
// console.log(heading.textContent) // Para saber a que acceder, en la misma terminal te da las opciones

// const enlaces = document.querySelector('.navegacion a') // Aqui, entro a la clase y despues a la etiqueta 'a'

// console.log(enlaces)

//----------------------

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a') //De aqui puedo recuperar todas las coincidencias del selector en este caso la etiqueta 'a'

console.log(enlaces)