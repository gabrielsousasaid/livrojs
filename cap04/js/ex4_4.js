const frm = document.querySelector('form')
const res = document.querySelector('h2#resp')

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const horaBrasil = Number(frm.inHora.value)

    const horaFranca = (horaBrasil + 5) >= 24 ? (horaBrasil + 5 - 24) : horaBrasil + 5 /* Aqui estávamos fazendo um 
    programa para calcular o fuso horário entre Brasil e frança. Utilizamos o operador ternário para eliminar o uso
    de if e else. Conseguimos declarar uma variável a menos que o GPT */


    res.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})