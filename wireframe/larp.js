const L = document.getElementById("L")

L.addEventListener("mouseover", addRect());

onmouseover = hoverGlowL(); 
addRect();
onmouseover = removeGlowL();

onmouseover = hoverGlowA();
onmouseover = removeGlowA();

onmouseover = hoverGlowR();
onmouseover = removeGlowR();

onmouseover = hoverGlowP();
onmouseover = removeGlowP();

// if (hoverGlowL){
//     console.log("aye");
// }


function addRect(){
    console.log("rect");
} 
// NOT working so well right now


function hoverGlowL(){
    var text = document.getElementById("L").style.backgroundColor = "black";
}

function removeGlowL(){
    var text = document.getElementById("L").style.backgroundColor = "";
}


function hoverGlowA(){
    var text = document.getElementById("A").style.backgroundColor = "black";
}

function removeGlowA(){
    var text = document.getElementById("A").style.backgroundColor = "";
}
function hoverGlowR(){
    var text = document.getElementById("R").style.backgroundColor = "black";
}

function removeGlowR(){
    var text = document.getElementById("R").style.backgroundColor = "";
}
function hoverGlowP(){
    var text = document.getElementById("P").style.backgroundColor = "black";
}

function removeGlowP(){
    var text = document.getElementById("P").style.backgroundColor = "";
}