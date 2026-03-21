const box = document.querySelector("#hoverPanel")
const colors = ["hover1" , "hover2" , "hover3" , "hover4" , "hover5" , "hover6"]
let colorIndex = 0




box.addEventListener ('mouseleave' , function() {
    box.classList.remove(colors[colorIndex])
    colorIndex ++
    
    if (colorIndex >= colors.length) {
        colorIndex = 0
    }

    box.classList.add(colors[colorIndex])
})