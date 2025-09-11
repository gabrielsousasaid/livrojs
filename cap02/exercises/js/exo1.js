const frm = window.document.querySelector('form')
const resp1 = window.document.querySelector('#resp1')
const resp2 = window.document.querySelector('#resp2')

frm.addEventListener('submit', (e) => {
    const medic = frm.inMedic.value
    const preco = Number(frm.inPreco.value)

    const promo = Math.floor(preco) * 2

    resp1.innerText = `Promoção de ${medic}`
    resp2.innerText = `Leve 2 por apenas R$: ${promo.toFixed(2)}`

    e.preventDefault()

    
})