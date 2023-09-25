//Iteraciones en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript','React','Node.js']

//forEach
const arrayForeach = tecnologias.forEach(function (elementos){ // En este no puedes usar return para imprimir, ocupas en console.log
    return elementos
})

const arrayMap = tecnologias.map(function (elementos){  // Este se usa mas en REACT y puedes usar return para imprimir todos los valores
    return elementos

})

console.log(arrayForeach)
console.log(arrayMap)