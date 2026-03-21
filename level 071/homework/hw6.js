const box = document.getElementById("question")
const yes = document.getElementById("button1")
const no = document.getElementById("button2")

box.innerHTML = "<h1> Is GOA GOAted? </h1>"


yes.addEventListener ('click' , function() {
    yes.classList.add("correct")

})


no.addEventListener ('click' , function() {
    no.classList.add("wrong")

})

