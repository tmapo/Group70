const text = document.createElement("p")
const btn = document.getElementById("button1")
text.textContent = "appeared text "

btn.addEventListener('click' , function()  {
    document.body.appendChild(text)
})
