
//Cria refência ao form e aos elementos de resposta (pelo seu id)
const frm = window.document.querySelector('form')
const resp1 = window.document.querySelector('#outResp1')
const resp2 = window.document.querySelector('#outResp2')
const resp3 = window.document.querySelector('#outResp3')

//Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const veiculo = frm.iveiculo.value //Obtém o conteúdo dos campos
    const preco = Number(frm.ipreco.value)

    const entrada = preco * 0.50 // Calcula o valor de entrada
    const financiamento = (preco * 0.50) / 12 // ... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}` // Exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${financiamento.toFixed(2)}` 

    e.preventDefault() // Evita envio do form
})