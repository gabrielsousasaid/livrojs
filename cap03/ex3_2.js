const prompt = require('prompt-sync')() //Adicona o pacote ao programa

const veiculo = prompt('Veiculo: ') //Lê os dados de entrada
const preco = Number(prompt('Preço R$:'))

const entrada = preco * 0.50 //Calcula valor da entrada
const parcela = (preco * 0.50) / 12 //... e das parcelas

console.log(`Promoção: ${veiculo}`) // Exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)

/* EXEMPLOS DE ALGORITMOS EXECUTADOS NO CMD COM O NODE.JS */