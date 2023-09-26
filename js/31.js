// Fetch API - Asyn Await.(Multiples llamados)

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async() => { 
    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    console.log(resultado2)

    const fin = performance.now()
    console.log(`El performance PRIMERO es el siguiente: ${fin - inicio} ms`) // Este es un template string, ese se usa poniendo las comillas chuecas estas de aqui ``
}

consultarAPI()

//Este metodo es mejor y mas rapido, si tenemos mas de una API a la que estamos consultando
const consultarAPI2 = async() => { 
    const inicio = performance.now() //Esto es solo para poder medir el rendimiento
    const [respuesta1, respuesta2] = await Promise.all([fetch(url), fetch(url2)]) //Al tener los dos fetch, nos genera un array, 
    // Este array lo tendremos que destructurar dandole el nombre que queramos al primer fetch y tambien al segundo fetch
    const resultado = await respuesta1.json() //Tendremos que crear una variable por cada url que usamos para poder solicitar el json o el metodo que ocupemos
    const resultado2 = await respuesta2.json()
    console.log(resultado)
    console.log(resultado2)
    const fin = performance.now()
    console.log(`El performance SEGUNDO es el siguiente: ${fin - inicio} ms`)
}

consultarAPI2()

