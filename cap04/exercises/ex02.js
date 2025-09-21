const frm = document.querySelector('form')
const resp = document.querySelector('h2#resp')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const velPermitida = Number(frm.inVpermitida.value)
    const velCondutor = Number(frm.inVcondutor.value)
    const velPorcentagem = (velPermitida * 20) / 100

    if(velCondutor <= velPermitida){
        resp.innerText = `Sem Multa`
    }else if (velCondutor <= velPermitida + velPorcentagem){
        resp.innerText = `Multa Leve`
    }else{
        resp.innerText = `Multa Grave`
    }
})