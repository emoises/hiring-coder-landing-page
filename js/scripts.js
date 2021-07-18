import Countdown from "./countdown.js";
import ElementHandler from "./elementHandler.js"

const tempoParaBlackFriday = new Countdown("18 july 2021 23:59:000 GMT-0300")
const tempos = document.querySelectorAll("[data-time]");
const blackFridayImg = document.getElementById('blackfridayimg')
const form = document.getElementById('submit-form')
const modalFront = document.getElementById('modal-front')
const button = document.getElementById('input-button')

button.addEventListener('click', (e) => {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let ripples = document.createElement('span')
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'

    button.appendChild(ripples)
})
const inputsHandler = new ElementHandler('input')

modalFront.addEventListener("click", () => {
    modalOff('modal')
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    modal('modal')
    const text = inputsHandler.userHandler()
    const modalText = document.getElementById('modal-text')
    modalText.innerText = text
    
})

function mostrarTempo(){
    tempos.forEach( (tempo, idx) => {
        tempo.innerHTML = tempoParaBlackFriday.total[idx]
    })
}
mostrarTempo()
setInterval(mostrarTempo, 1000);
let frequency
setInterval( () => {
    const intervalFrequence = [10000, 8000, 20000 ];
    // console.log()
    frequency = intervalFrequence[Math.floor(Math.random() * intervalFrequence.length)]

    if(blackFridayImg.style.opacity == 1){
        blackFridayImg.style.opacity = .1
    }else{
        blackFridayImg.style.opacity = 1
    }

}, 2000)

function modal (modalId){
    const modal = document.getElementById(modalId)
    modal.classList.add('show')
}
function modalOff (modalId){
    const modal = document.getElementById(modalId)
    
    modal.classList.remove('show')
}

