const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    
   const numero = Number(frm.inNumber.value)

   resp.innerText = ''
   let i = 1
   

   while(i <= numero){
    if(i % 2 == 1){
        resp.innerText += '*'
    }else{
        resp.innerText += '_'
    }
    i++
   }
})