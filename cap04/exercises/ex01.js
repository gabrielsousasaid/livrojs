const frm = document.querySelector('form')
const resp = document.getElementById('resp')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const calculo = (numero % 2) == 0 ? `é par` : `é ímpar`

    resp.innerText = `${numero} ${calculo}`



    
})