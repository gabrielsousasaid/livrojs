const frm = document.querySelector('form')
const res = document.querySelector('div#res')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    const calculo = Number.isInteger(Math.sqrt(number)) ? `Raiz: ${Math.sqrt(number)}` : `Não há raiz exata para ${number}`
    /* Se observar o exemplo no livro, eleminamos o uso de mais variáveis e também de if e else, e fizemos a mesma coisa
    que o autor */
    
    res.innerText = calculo
})