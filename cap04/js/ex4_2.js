const frm = document.querySelector('form')
const resp = document.querySelector('h2#resp')

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)

    const sexo = document.getElementsByName('sexo')
    const pesoIdeal = sexo[0].checked ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)/* Aqui ao invés de utilizar if and 
    else, utilizamos o operador ternário que deixa o código bem mais limpo */

    resp.innerText = `${nome}: Seu peso ideal é: ${pesoIdeal.toFixed(3)} Kg`
})