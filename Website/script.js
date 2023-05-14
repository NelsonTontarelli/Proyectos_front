window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    if (window.scrollY > 0){
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
})

var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var asunto = document.getElementById("asunto");
var textarea = document.getElementById("text-area");


function cleanForm(){
    nombre.value = ""
    email.value = ""
    asunto.value = ""
    textarea.value = ""
}