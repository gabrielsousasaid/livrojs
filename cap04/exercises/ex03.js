const frm = document.querySelector('form')
const resp1 = document.querySelector('h2#resp1')
const resp2 = document.querySelector('h2#resp2')



frm.addEventListener('submit', (e) => {

    e.preventDefault()
    const valor = Number(frm.inValor.value)

    let troco
    let tempo

    if (valor < 1.00) {

        resp1.innerText = `Valor insuficiente`
        resp2.innerText = ``
        return //Aqui utilizamos return para o código não se sobrescrever ao outro

    } else if (valor <= 1.74) {

        tempo = `30 Min`
        troco = valor - 1.00

    } else if (valor <= 2.99) {

        tempo = `60 Min`
        troco = valor - 1.75

    } else if (valor >= 3.00) {

        tempo = `120 Min`
        troco = valor - 3.00
    }

    resp1.innerText = `Tempo: ${tempo}`
    resp2.innerText = troco == 0 ? `Sem troco` : `Troco R$:${troco.toFixed(2)}`


})