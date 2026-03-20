const input = document.getElementById("userInput")
const text = document.getElementById("dptext")

if (input == "") {
    text.innerHTML = "<p> Start typing... </p>"
}
else {
    input.addEventListener('input', function () {
        text.innerHTML = input.value
    })
}




