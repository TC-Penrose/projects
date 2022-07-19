console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

const fiddle = document.querySelector('.fiddle')

fiddle.onclick = function(){
    let message = "Ur a fiddler"
    console.log(message)
    document.write(message)

}

const banjo = document.querySelector('.banjo')

banjo.onclick = function(){
    let message = "Ur a banjo picker"
    console.log(message)
    document.write(message)
    
}

