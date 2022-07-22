console.log("Hello world")

let button = document.querySelector("button")
let usernameField = document.querySelector('.usernameField')
let instrumentSelect = document.querySelector('select')
let instrument = instrumentSelect.value
const startgame = document.querySelector('.startgame')

const nomoretext = ()=>{
    message = ""
    textOnScreen = document.querySelector('.textonscreen')
    textOnScreen.textContent = message
}

const doNextThing = ()=>{
    document.body.style.background = "url(guitar.png)";
    document.body.style.backgroundSize = "700px, 700px";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
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
        let message = "Yo " + username + ", u now play " +instrument+ "."
        let textOnScreen = document.querySelector('.textonscreen')
        textOnScreen.textContent = message
        console.log(message)
        setTimeout(doNextThing, 1000)
        
    }
    
}   
