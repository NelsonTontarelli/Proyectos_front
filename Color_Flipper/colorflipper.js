function generaColor() {

    var bg_color = $("#insert_color")
    bg_color.text("")


    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + "," + green + "," + blue + ")";

    var background_body = document.body.style.backgroundColor = color

    bg_color.append(background_body)

}


