console.log("Hello world")

let button = document.querySelector("button")

const fiddle = document.querySelector('.fiddle')
const banjo = document.querySelector('.banjo')
const guitar = document.querySelector('.guitar')
const bass = document.querySelector('.bass')
const mandolin = document.querySelector('.mandolin')

fiddle.onclick = function(){
    let message = "Ur a fiddler"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')

    sendMessageResponseArea.textContent = message
}

banjo.onclick = function(){
    let message = "Ur a banjo picker"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')

    sendMessageResponseArea.textContent = message
}

guitar.onclick = function(){
    let message = "Ur a guitar strummer"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')

    sendMessageResponseArea.textContent = message
}

bass.onclick = function(){
    let message = "Ur a bass player"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')

    sendMessageResponseArea.textContent = message
}
mandolin.onclick = function(){
    let message = "Ur a mando chopper"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')

    sendMessageResponseArea.textContent = message
}