
var contador = 0

var counter_letter = document.getElementById("background_color")


function decrease(){
    contador -= 1
    if (contador < 0){
        counter_letter.style.color = 'red'
    }
    else if(contador == 0){
        counter_letter.style.color = 'black'
    }
    $("#background_color").text(contador)
}

function reset(){
    contador = 0
    counter_letter.style.color = 'black'
    $("#background_color").text(contador)
}

function increase(){
    contador += 1
    if (contador > 0){
        document.getElementById("background_color").style.color = 'green'
    }
    if (contador == 0){
        document.getElementById("background_color").style.color = 'black'
    }
    $("#background_color").text(contador)
}