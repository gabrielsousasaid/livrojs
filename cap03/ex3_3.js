const prompt = require('prompt-sync')() 

const salario = Number(prompt('Salário R$: '))//Lê os dados de entrada
const tempo = Number(prompt('Anos de empresa: '))

const quadrienios = Math.floor(tempo/4)// Calcula o quadriênios
const acrescimo = salario * quadrienios / 100 // ...e acréscimos 

console.log(`Quadriênios: ${quadrienios}`)// Exibe as respostas
console.log(`Salário final R$: ${(salario+acrescimo).toFixed(2)}`)/*Aqui foi importante colocar os parênteses 
para que o tofixed não seja resolvido primeiro */

/* EXEMPLOS DE ALGORITMOS EXECUTADOS NO CMD COM O NODE.JS */