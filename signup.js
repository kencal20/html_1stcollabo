//Event listeners
document.getElementById("button").addEventListener("mouseover", button_color);
document.getElementById("button").addEventListener("mouseout", button_color2);


functions;
function button_color() {
  document.getElementById("button").style.backgroundColor = "yellow";
  document.getElementById("button").style.color = "black";
  document.getElementById("button").style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}

function button_color2() {
  document.getElementById("button").style.color = "white";
  document.getElementById("button").style.backgroundColor =
    " rgba(61, 184, 58, 1)";
  document.getElementById("button").style.boxShadow = "none";
}

