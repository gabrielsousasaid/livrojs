const form = window.document.querySelector('form')//Cria referêncai ao form

//Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (f) => {

    const TituloFilme = window.document.getElementById('ifilm').value//Obtém conteúdo dos campos
    const DuracaoFilme = Number(window.document.getElementById('iduration').value)
    
    let horas = Math.floor(DuracaoFilme / 60) //Arredonda para baixo o resultado
    let minutos = DuracaoFilme % 60 //Obtém o resto da divisão

    window.document.querySelector('h3').innerText = TituloFilme//Exibi as respostas
    window.document.getElementById('resultado').innerText = `${horas} hora(s) e ${minutos} minutos(s)`

    f.preventDefault() // Evita envio do form

})

/* Observação: Aqui você teve dificuldades de acertar o código, pois tinha definido para pegar o value
fora da função e evento criado, isso fazia com que pegasse o valor vazio*/