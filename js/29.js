// Fetch API

//NOTA : PARA LLAMAR LA API, OCUPAMOS PONER UNA VARIABLE CON EL URL

//const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch es una funcion y se le ponen ()
// fetch utiliza promises
// dentro del then va un funcion ya sea function o '() =>'

//Explicacion rapida: Usando fetch hace la consulta hacia el url que estamos diciendo
//Una vez hecha la consulta utilizamos .then, los cuales son como acciones concadenadas
//Por ejemplo, el primer then se llama respuesta en la cual pedimos la propiedad json del url
//Despues pondremos otro then el cual ya lleva datos del then anterior y podemos continuar el codigo
// fetch(url)
// .then( respuesta => { //Este primer then funciona como promesa (Es algo que va a devolver)
//     //console.log(respuesta) //Al hacer este console.log nos da algo de informacion, entre ella el estatus de la consulta si marca 200 es que se hizo bien
//     return respuesta.json() // Con lo que hicimos anteriormente pudimos ver que tiene varias propiedades
//     //Entre ellas el .json()
// })
// .then( resultado => { //En este segundo then, ya podemos manipular lo que se trajo el anterior como promesa
//     //console.log(resultado)
//     //--------------------------
//     //Pequeño ejercicio propio
//     // resultado.forEach(elemento => {
//     //     elemento.email === 'Eliseo@gardner.biz' ? console.log(elemento.email) : console.log('No jala pa')
//     // })
//     //---------------------------
//     resultado.forEach(comentario => {
//         console.log(comentario)
//     })
// })

//Esta es una forma de acortar el codigo anterior

// Todo lo anterior quedaria compacto y de la siguiente forma
const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarAPI = () => { //Todo quedaria dentro de una variable
    fetch(url)
    .then( (respuesta) => respuesta.json() )
    .then( (resultado) => { 
     resultado.forEach(comentario => {
        console.log(comentario)
    })
})
}

consultarAPI()