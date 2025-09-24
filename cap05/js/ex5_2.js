const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const number = Number(frm.inNumber.value)

    let resposta = ''

    for(let i = number; i > 1; i--){ //Aqui foi feito para decrescer até o dois, para podermos isolar o um e colocar . em vez de ,
        resposta += `${i}, `
    }

    resp.innerText = `${number} e 1: ${resposta} 1.` // 1 com ponto em vez de vírgula
})