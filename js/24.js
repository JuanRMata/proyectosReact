// Evento click

const heading = document.querySelector('.heading')

heading.addEventListener('click', () => { //En la parte de click, tendremos que poner el tipo de evento que deseamos realizar o escuchar despues con una funcion
    heading.textContent = 'Nuevo texto' // ponemos lo que queremos que realice
})

const enlaces = document.querySelectorAll('.navegacion a') //Para añadir cualquier evento a un grupo de etiquetas o botones ocupamos iterar cada uno
let contador = 0 //Esto mediante un forEach para que interactue con cada uno de forma individual
enlaces.forEach(elemento => 
        elemento.addEventListener('click', () => {
            console.log('Diste click en un enlace ' + contador)
            contador++
        })
    )
