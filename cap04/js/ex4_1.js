const frm = document.querySelector('form')
const media = document.getElementById('media')
const situacao = document.getElementById('situacao')

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const inNome = document.getElementById('inNome').value
    const inN1 =  Number(document.getElementById('inN1').value)/* Aqui para gerar um código mais limpo, poderíamos fazer assim:
    const inNome = frm.inNome.value e const inN1 = frm.inN1.value e assim por diante. Pega o elemento diretamente pelo nome do id
    evitando que tenhamos que chamar o método getElement */
    const inN2 = Number(document.getElementById('inN2').value)

    const notaMedia = (inN1 + inN2) / 2

    if(notaMedia >= 7){
        situacao.innerHTML = `<h3>Parabéns ${inNome}, você foi aprovado(a)!!</h3>`
    } else {
        situacao.innerHTML = `<h3>Que pena ${inNome}, você foi reprovado(a)!!</h3>`
    }



    media.innerHTML = `<h2>Média das notas ${notaMedia}</h2> `

    
})