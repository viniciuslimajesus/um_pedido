let btnSim = document.getElementById('sim') 
let btnClaro = document.getElementById('claro')
let btnObvio = document.getElementById('obvio')
let presente = document.querySelector('.presente')
let opcs = document.querySelector('.opcoes')
let msg = document.getElementById('msg')

btnSim.addEventListener('click', resposta)
btnClaro.addEventListener('click', resposta)
btnObvio.addEventListener('click', resposta)


function resposta() {
    presente.style.display = 'block'
    opcs.style.display = 'none'
    msg.innerHTML = 'Eu Te Amo princesa!'
}