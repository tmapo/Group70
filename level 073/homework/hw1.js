const box = document.getElementById("messageBox")
const txt = document.getElementById("text")
const btn = document.getElementById("changetxt")

btn.addEventListener ('click' , function() {
    txt.classList.toggle("paranormal")
})