console.log("Hello world")

let button = document.querySelector("button")
let usernameField = document.querySelector('.usernameField')
let instrumentSelect = document.querySelector('select')
const startgame = document.querySelector('.startgame')

const nomoretext = ()=>{
    message = ""
    textOnScreen = document.querySelector('.textonscreen')
    textOnScreen.textContent = message
}

const doNextThing = ()=>{
    document.body.style.background = "url(rusty.GIF)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.querySelector ('.doNextThing').style.display = "block";
    nomoretext()
}

startgame.onclick = function(){
    let instrument = instrumentSelect.value
    console.log(instrument)
    let username = usernameField.value
    console.log(username)
    if (username.length > 0 && instrument.length > 0){
        document.querySelector ('.startscreen').style.display = "none";
        let message = "Yo " + username + ", press the 'A' key at the right time."
        let textOnScreen = document.querySelector('.textonscreen')
        textOnScreen.textContent = message
        console.log(message)
        setTimeout(doNextThing, 1000)
        
    }
    
}   
