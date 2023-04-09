//Event listeners
document.getElementById("button").addEventListener("mouseover", button_color);
document.getElementById("button").addEventListener("mouseout", button_color2);
document.getElementsByClassName("input")[0].addEventListener("mouseover",inputshadow0a);
document.getElementsByClassName("input")[0].addEventListener("mouseout", inputshadow0b);
document.getElementsByClassName("input")[1].addEventListener("mouseover",inputshadow1a);
document.getElementsByClassName("input")[1].addEventListener("mouseout", inputshadow1b);
document.getElementsByClassName("input")[2].addEventListener("mouseover",inputshadow2a);
document.getElementsByClassName("input")[2].addEventListener("mouseout", inputshadow2b);
document.getElementsByClassName("input")[3].addEventListener("mouseover",inputshadow3a);
document.getElementsByClassName("input")[3].addEventListener("mouseout", inputshadow3b);
document.getElementsByClassName("input")[4].addEventListener("mouseover",inputshadow4a);
document.getElementsByClassName("input")[4].addEventListener("mouseout", inputshadow4b);
document.getElementsByClassName("input")[5].addEventListener("mouseover",inputshadow5a);
document.getElementsByClassName("input")[5].addEventListener("mouseout", inputshadow5b);
document.getElementsByClassName("radio")[0].addEventListener("mouseover",radioshadow0a);
document.getElementsByClassName("radio")[0].addEventListener("mouseout",radioshadow0b);
document.getElementsByClassName("radio")[1].addEventListener("mouseover",radioshadow1a);
document.getElementsByClassName("radio")[1].addEventListener("mouseout",radioshadow1b);
document.getElementsByClassName("radio")[2].addEventListener("mouseover",radioshadow2a);
document.getElementsByClassName("radio")[2].addEventListener("mouseout",radioshadow2b);

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


function inputshadow0a() {
  document.getElementsByClassName("input")[0].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow0b() {
  document.getElementsByClassName("input")[0].style.boxShadow="none"
  
}

function inputshadow1a() {
  document.getElementsByClassName("input")[1].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow1b() {
  document.getElementsByClassName("input")[1].style.boxShadow="none"
  
}

function inputshadow2a() {
  document.getElementsByClassName("input")[2].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow2b() {
  document.getElementsByClassName("input")[2].style.boxShadow="none"
  
}

function inputshadow3a() {
  document.getElementsByClassName("input")[3].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow3b() {
  document.getElementsByClassName("input")[3].style.boxShadow="none"
  
}
function inputshadow4a() {
  document.getElementsByClassName("input")[4].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow4b() {
  document.getElementsByClassName("input")[4].style.boxShadow="none"
  
}
function inputshadow5a() {
  document.getElementsByClassName("input")[5].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function inputshadow5b() {
  document.getElementsByClassName("input")[5].style.boxShadow="none"
  
}
function radioshadow0a() {
  document.getElementsByClassName("radio")[0].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function radioshadow0b() {
  document.getElementsByClassName("radio")[0].style.boxShadow="none"
  
}

function radioshadow1a() {
  document.getElementsByClassName("radio")[1].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function radioshadow1b() {
  document.getElementsByClassName("radio")[1].style.boxShadow="none"
  
}

function radioshadow2a() {
  document.getElementsByClassName("radio")[2].style.boxShadow =
    " 10px 10px 12px 0px rgba(0, 0, 0, 0.25)";
}
function radioshadow2b() {
  document.getElementsByClassName("radio")[2].style.boxShadow="none"
  
}