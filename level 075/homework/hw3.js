const input1 = document.getElementById("input1")
const div1 = document.getElementById("divbox")

input1.addEventListener('keydown' , function(event)  {
    const keypressed = event.key 
    const forbidden = ["a" , "b" , "c" , "1" , "2" , "3"]
    if (forbidden.includes(keypressed)){
        event.preventDefault()

        div1.innerHTML = "<h1>Wrong characters entered!</h1>";
        alert("Character " + keypressed + " is forbidden!");
    }
    else {
        div1.innerHTML = ""
    }

})