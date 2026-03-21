const divbox = document.getElementById("box")

divbox.innerHTML += " <p id='text' class='darktxt'>This is a text</p> <button id='changeBg'>Change background color.</button> <button id='changeTxt'>Change text color.</button>"

const txt = document.getElementById("text")
const changeBg = document.getElementById("changeBg")
const changeTxt = document.getElementById("changeTxt")

changeBg.addEventListener('click' , function() {
    divbox.classList.toggle("dark")
})

changeTxt.addEventListener('click' , function() {
    txt.classList.toggle("normaltxt")
})