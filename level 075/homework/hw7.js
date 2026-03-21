const input1 = document.getElementById("input1")
const txt = document.getElementById("text")



input1.addEventListener('blur' , function()  {
    input1.style.backgroundColor = "pink"
    input1.style.color = "white"
})

input1.addEventListener('focus' , function()  {
    input1.style.backgroundColor = "white"
    input1.style.color = "black"
})