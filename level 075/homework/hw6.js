const input1 = document.getElementById("input1")
const txt = document.getElementById("text")



input1.addEventListener('focus' , function()  {
    input1.style.backgroundColor = "green"
    input1.style.boxShadow =  "rgba(149, 157, 165, 0.2) 0px 8px 24px;"
})

input1.addEventListener('blur' , function()  {
    input1.style.backgroundColor = "white"
    input1.style.boxShadow =  "rgba(149, 157, 165, 0.2) 0px 8px 24px;"
})