console.log("Hello world")

let button = document.querySelector("button")
let usernameField = document.querySelector('.usernameField')
let instrumentSelect = document.querySelector('select')
const startgame = document.querySelector('.startgame')


startgame.onclick = function(){
    let instrument = instrumentSelect.value
    console.log(instrument)
    let username = usernameField.value
    console.log(username)
    if (username.length > 0 && instrument.length > 0){
        document.querySelector ('.startscreen').style.display = "none";
        document.body.style.background = "url(sunset.jpeg)";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        
        let message = "Yo " + username + ", get ready to pluck the note at the right time."
        let sendMessageResponseArea = document.querySelector('.textonscreen')
        sendMessageResponseArea.textContent = message
        console.log(message)
    } 
}