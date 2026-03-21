const input1 = document.getElementById("input1")
const txt = document.getElementById("text")



input1.addEventListener('keyup' , function()  {
    txt.textContent = "you've typed " + input1.value.length + " characters"
    if (input1.value.length > 4){
        input1.style.color = "red"
    }
    else{
        input1.style.color = "black"
    }
})