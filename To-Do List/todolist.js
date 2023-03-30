
function addFunct(event) {
    var list_elem = document.getElementById("list_elem");
    var text_input = document.getElementById("input_text");
    var element = document.createElement("li");
    var text_value = text_input.value;
    if (event.keyCode === 13){
       
    
        if (text_value === "") {
            window.alert("Insert a Value please!")
        } else {
            
            var text_node = document.createTextNode(text_value);
            element.appendChild(text_node);
    
            list_elem.appendChild(element);
    
            text_input.value = "";
        }
    } else if (event.type === "click"){
        if (text_value === "") {
            window.alert("Insert a Value please!")
        } else {
            
            var text_node = document.createTextNode(text_value);
            element.appendChild(text_node);
    
            list_elem.appendChild(element);
    
            text_input.value = "";
        }
    }
    




}
