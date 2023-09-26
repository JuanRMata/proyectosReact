// Fetch API - Asyn Await

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarAPI = async() => { //Todo quedaria dentro de una variable
    const respuesta = await fetch(url) //Este funcionaria como promesa
    //---------------------
    // Pequeña comprobacion sobre si consulto bien
    // if (respuesta){
    //     console.log('Se consulto bien la api ' + respuesta.url)
    // }else {
    //     console.log('Hubo error')
    // }
    //---------------------
    const resultado = await respuesta.json()
    resultado.forEach(elemento => {
        console.log(elemento)
    })
}


consultarAPI()