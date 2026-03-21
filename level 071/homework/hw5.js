const text = document.getElementById("heading")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

button1.addEventListener('click', function()  {
    text.classList.add("hidden")
})

button2.addEventListener('click', function()  {
    text.classList.remove("hidden")
})