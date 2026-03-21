const input1 = document.getElementById("input1")
const txt = document.getElementById("text")



input1.addEventListener('change' , function()  {
    txt.textContent = input1.value.toUpperCase()
    alert("Text is now changed!")
})