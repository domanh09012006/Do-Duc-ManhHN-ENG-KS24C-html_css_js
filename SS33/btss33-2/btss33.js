let input = document.getElementById("input")
let btn = document.getElementById("btn")
let text = document.getElementById("showCharacter")


btn.onclick = function(){
    text.innerHTML =  input.value.length +" Ki tu"
    
}