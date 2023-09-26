 // Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', evento => {
    evento.preventDefault() //Esta linea de aqui sirve para despues poder validar un formulario y no dejar que el navegador haga todo en automatico

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    const alerta = document.createElement('DIV') // Se recomienda usar MAYUSCULAS
    const alertaPrevia = document.querySelector('.alerta') //Se crea una variable para obtenet la clase alerta previa a crearla, esto para que
    if (alertaPrevia){ // Pueda comprobar si antes de hacer todo lo demas ya existe una clase o una alerta dentro de HTML
        alertaPrevia.remove() // Con esto podemos borrar la clase de .alerta
    }
    alerta.classList.add('alerta') //Para añadir una clase ocupamos poner si o si classlist, para añadir es add y para remover es remove


    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
        formulario.appendChild(alerta)
    }else {
        console.log('Enviaste el formulario')
        alerta.classList.add('exito')
        alerta.textContent = 'Todo bien'
        formulario.appendChild(alerta)
    }
})
