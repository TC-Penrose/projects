console.log("Hello world")

let button = document.querySelector("button")
let usernameField = document.querySelector('.usernameField')
let instrumentSelect = document.querySelector('select')
const startgame = document.querySelector('.startgame')

const doNextThing = ()=>{
    document.body.style.background = "url(rusty.gif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    let message = "This works!"
    let sendMessageResponseArea = document.querySelector('.textonscreen')
    sendMessageResponseArea.textContent = message
}

startgame.onclick = function(){
    let instrument = instrumentSelect.value
    console.log(instrument)
    let username = usernameField.value
    console.log(username)
    if (username.length > 0 && instrument.length > 0){
        document.querySelector ('.startscreen').style.display = "none";
        let message = "Yo " + username + ", get ready to pluck the note at the right time."
        let sendMessageResponseArea = document.querySelector('.textonscreen')
        sendMessageResponseArea.textContent = message
        console.log(message)
        setTimeout(doNextThing, 1000)
        
    }
    
}   
