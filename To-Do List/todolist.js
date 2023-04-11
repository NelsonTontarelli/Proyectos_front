
var creator = document.getElementById("creator")


function addFunct(event) {
    var list_elem = document.getElementById("list_elem");
    var text_input = document.getElementById("input_text");
    var element = document.createElement("li");
    var text_value = text_input.value;

    var close_button = document.createElement("span");

    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "checkvalue")

    close_button.id = "delete_button"
    close_button.innerHTML = "X"




    if (event.keyCode === 13) {


        if (text_value === "") {
            window.alert("Insert a Value please!")
        } else {
            var text_node = document.createTextNode(text_value);
            element.appendChild(checkbox)
            element.appendChild(text_node);
            element.appendChild(close_button);

            list_elem.appendChild(element);

            text_input.value = "";
        }
    } else if (event.type === "click") {
        if (text_value === "") {
            window.alert("Insert a Value please!")
        } else {

            var text_node = document.createTextNode(text_value);
            element.appendChild(checkbox)
            element.appendChild(text_node);

            list_elem.appendChild(element);
            element.appendChild(close_button)


            text_input.value = "";
        }
    };

    close_button.addEventListener("click", function () {
        element.remove()
    });

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            element.style.textDecoration = "line-through"
        } else {
            element.style.textDecoration = ""
        }
    })

}

creator.addEventListener("click", function () {
    console.log("Cheers")
})





