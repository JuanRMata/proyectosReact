
const tecnologias = ['HTML', 'CSS', 'JavaScript','React','Node.js']
const numeros = [10, 20, 30]

let nuevoArray
const nuevoArray2 = tecnologias.filter(elemento => elemento === 'React')
//------------------------
//Comprobar si existe en el array
//const resultado = tecnologias.includes('GraphQL')
//---------------------------
// Some - si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)
//----------------------------
//Find - Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find(numero => numero > 15)
//-----------------------
//Every - Retorna true o false si todos cumplen la condicion
//const resultado = numeros.every(numero => numero > 9)
//--------------------------
// Reduce - Con reduce puedes ir sumando los numeros, sirve para las tiendas o algo asi

// Se le tiene que dar 2 parametros, el total y el numero, el primero es el acumulado y despues el numero a sumar
// despues se pone la suma del numero mas el total y desde que cantidad quieres que inicie, en este ejemplo inicia en 0 pero puede iniciar en 100 

//const resultado = numeros.reduce((total, numero) => numero + total, 0)

//----------------------------
// Filter - crea un nuevo array en base a una condicion
//const resultado = tecnologias.filter(elemento => elemento === 'Node.js') // Trae a todos los que sean iguales a Node.js

tecnologias.forEach((elemento,num) => console.log(num)) // Para acceder al index se pone el segundo parametro el cual toma el index de cada uno del array como valor 

const arrayMap = tecnologias.map(elemento => elemento)

console.log(arrayMap)

// Todos estos no mutan el array original, y es MUY IMPORTANTE EN REACT