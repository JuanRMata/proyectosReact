
const tecnologias = ['HTML', 'CSS', 'JavaScript','React','Node.js']


const nuevoArray2 = tecnologias.filter(elemento => elemento === 'React')

const nuevoArray = tecnologias.map(elemento => { 
    if(elemento === 'HTML'){
        return 'GraphQL' 
    }else{
        return elemento 
    } 
})

console.log(nuevoArray2)