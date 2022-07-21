console.log("Hello world")

let button = document.querySelector("button")
let usernameField = document.querySelector('.usernameField')
let instrumentSelect = document.querySelector('select')
const startgame = document.querySelector('.startgame')

let instrument = instrumentSelect.value
console.log(instrument)
let username = usernameField.value
let message = "Yo " + username + ". Now get ready to pluck the note at the right time."
console.log(message)

startgame.onclick = function(){
    let instrument = instrumentSelect.value
    console.log(instrument)
    let username = usernameField.value
    let message = "Yo " + username + ". Now get ready to pluck the note at the right time."
    console.log(instrument)
    console.log(username)
    console.log(message)
    if (instrument.length > 0, username.length > 0){
        let sendMessageResponseArea = document.querySelector('.textonscreen')
        sendMessageResponseArea.textContent = message
    } 
}
