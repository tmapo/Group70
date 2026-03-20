const myForm = document.getElementById("form");

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent successfully");
});