const frm = document.querySelector('form')
const resp = document.querySelector('h2#resp')

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)

    const sexo = document.getElementsByName('sexo')
    let pesoIdeal

    if(sexo[0].checked){
        pesoIdeal = 22 * Math.pow(altura, 2)
    }else{
        pesoIdeal = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal é: ${pesoIdeal.toFixed(3)} Kg`
})