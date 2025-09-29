const prompt = require('prompt-sync')()

const produto = prompt('Produto: ')
const numero = Number(prompt('N de etiquetas: '))

let i = 1
while(i <= numero){
    console.log(produto)
    i++
}