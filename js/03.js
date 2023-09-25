// Tipos de datos

//Undefined
// let cliente = 20
// console.log(typeof(cliente)) //Para saber el tipo de dato
// -----------------------
//Boolean

// const descuento= true
// console.log(descuento)
// console.log(typeof(descuento))
// -----------------------
//Number
// const num1=20.20
// const num2=30
// const num3=-100

// console.log(typeof(num1))
// console.log(typeof(num2))
// console.log(typeof(num3))
// -----------------------
//Strings o cadenas de texto

// const alumno='Juan'
// let producto='Monitor de 20 pulgadas'

// const num1='30'
// const num2=30

// console.log(typeof(num1))
// console.log(typeof(num2))
// -----------------------
//Big int

// const numeroGrande = BigInt(8765464615668484845151616516165)
// console.log(typeof (numeroGrande))

// const num = 10
// const num2 = 20

// console.log(num + num2)

// //console.log(num + numeroGrande) //No se puede mezclar un numero normal con un numero grande

// console.log(num + Number(numeroGrande)) //Utilizando coercion si se puede hacer una mezcla de los numeros ya que estas convirtiendo uno de ellos para que funcione

// -----------------------
//Coercion

// const num = '30'
// const num1 = 30

// console.log(typeof Number(num))
// console.log(typeof String(num1))

// -----------------------

// Symbol, estos son valores unicos

// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)

// console.log(primerSymbol === segundoSymbol) // Sale falso debido a que cada symbol son valores unicos, aunque sean iguales

// console.log(primerSymbol.valueOf()) // Esta es la forma de acceder al valor que tiene el Symbol
// console.log(segundoSymbol.valueOf()) // Esta es la forma de acceder al valor que tiene el Symbol

// -----------------------

//Null, es catalogado como objeto

// const descuento = null

// console.log(typeof descuento) 