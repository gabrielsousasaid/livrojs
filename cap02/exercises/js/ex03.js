const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

frm.addEventListener('submit', (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const valor = (preco * 2) + preco/2
    const valor2 = preco/2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`
    resp2.innerText = `O teceiro produto custa apenas R$: ${valor2.toFixed(2)}`

    e.preventDefault()
})