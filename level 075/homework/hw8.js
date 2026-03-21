const input1 = document.getElementById("input1")
const txt = document.getElementById("text")


input1.addEventListener('keyup' , function(event)  {
    const keypressed = event.key
    const banned = ["a" , "b" , "c" , "shift"]
    if (banned.includes(keypressed)){
        input1.style.backgroundColor = "white"
    }
})


input1.addEventListener('keydown' , function(event)  {
    const keypressed = event.key
    const banned = ["a" , "b" , "c" , "shift"]
    if (banned.includes(keypressed)){
        input1.style.backgroundColor = "red"
    }
})

