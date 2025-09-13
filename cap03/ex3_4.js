const prompt = require('prompt-sync')() 
const pesoKg = Number(prompt('Peso da ração (kg): '))
const consumo = Number(prompt('Consumo diário (gr): '))
const pesoGr = pesoKg * 1000  //Cria variável auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo) // Cáculo das respostas
const sobra = pesoGr % consumo 
console.log (`Duração: ${duracao} dias`) // Dados de saída
console.log (`Sobra: ${sobra}gr`)



/* EXEMPLOS DE ALGORITMOS EXECUTADOS NO CMD COM O NODE.JS */