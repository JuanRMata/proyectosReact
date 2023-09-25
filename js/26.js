// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', evento => {
    evento.preventDefault() //Esta linea de aqui sirve para despues poder validar un formulario y no dejar que el navegador haga todo en automatico

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if(nombre === '' || password === ''){
        console.log('Todos los campos deben ser rellenados')
    }else {
        console.log('Enviaste el formulario')
    }
    
})
