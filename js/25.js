// Eventos del DOM - inputs
const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function(evento) {
    console.log(evento.target.value) // Aqui sirve para poder ver lo que se esta escribiendo
    //De igual forma, tambien de esta forma sirve para poder validar la cantidad de caracteres que se van escribiendo, un ejemplo el twitter
    // en twitter cuando vas escribiendo te dice cuando caracteres te van faltando
})

const inputPassword = document.querySelector('.password')

inputPassword.addEventListener('input',funcionPassword)

function funcionPassword(){
    inputPassword.type = 'text'

    setTimeout(() => { //Este setTimeout se escribe solo, y dice que despues de un tiempo hace la accion que tiene dentro de el, el tiempo por cada 1000 es un segundo
        inputPassword.type = 'password'
    }, 100);
}