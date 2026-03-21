const box = document.getElementById("cart")
const add = document.getElementById("button1")




add.addEventListener ('click' , function() {
    box.innerHTML = "<h1> One new item. </h1> <h2 id='sponge' onclick = viewed() > Scrub Daddy sponge. </h2> "
    const sponge = document.getElementById("sponge")
    sponge.classList.add("sponge")
})

function viewed() {
    sponge.classList.remove("sponge")
}


