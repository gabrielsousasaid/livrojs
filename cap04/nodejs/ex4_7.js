const prompt = require('prompt-sync')() //Adiciona pacote prompt-sync

const numeroPessoas = Number(prompt('Número de Pessoas:')) // Lê dados de entrada
const numeroPeixes =  Number(prompt('Número de peixes:'))

let valorTotal //Declara variável pagar

if(numeroPeixes > numeroPessoas){ //Condição definida no exemplo

    valorTotal = (numeroPessoas * 20) + (numeroPeixes % numeroPessoas) * 12

}else{

    const valorTotal = numeroPessoas * 20 
}

console.log(`O valor a se pagar é R$${valorTotal.toFixed(2)}`)// Exibe o valor a ser pago