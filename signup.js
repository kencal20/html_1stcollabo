body = document.body;



//Event listeners
document.getElementById("button").addEventListener("mouseover",button_color)
document.getElementById("button").addEventListener("mouseout",button_color2)


//functions
function button_color() {
  document.getElementById("button").style.backgroundColor="blue"
  
}

function button_color2() {
    document.getElementById("button").style.backgroundColor="green"
}