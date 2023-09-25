// Destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript','React','Node.js']
const [html,nodejs] = tecnologias // Lo que ponemos entre [ ] solamente es una variable la cual toma una posicion del array

const [ , , , , var5] = tecnologias //Esto es para no crear variables que no vammos a usar, solamente la de la posicion que queremos
console.log(nodejs)
