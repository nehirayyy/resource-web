const L = document.getElementById("L")

///

        var myElement = document.getElementById("dice1");

        myElement.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "dice1");

        const boundingRect = myElement.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "dice1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            myElement.style.left = `${xPos}px`;
            myElement.style.top = `${yPos}px`;
            myElement.style.bottom = "auto";
            myElement.style.right = "auto";
        }
        });

//I think I'm gonna do this for each gif lollll cute

        const mydrunk1Element = document.getElementById("drunk1");

        mydrunk1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "drunk1");

        const boundingRect = mydrunk1Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "drunk1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mydrunk1Element.style.left = `${xPos}px`;
            mydrunk1Element.style.top = `${yPos}px`;
            mydrunk1Element.style.bottom = "auto";
            mydrunk1Element.style.right = "auto";
        }
        });

//nexttttt

        const mydrunk2Element = document.getElementById("drunk2");

        mydrunk2Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "drunk2");

        const boundingRect = mydrunk2Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "drunk2") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mydrunk2Element.style.left = `${xPos}px`;
            mydrunk2Element.style.top = `${yPos}px`;
            mydrunk2Element.style.bottom = "auto";
            mydrunk2Element.style.right = "auto";
        }
        });

//nexttttt

        const mykiss1Element = document.getElementById("kiss1");

        mykiss1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "kiss1");

        const boundingRect = mykiss1Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "kiss1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mykiss1Element.style.left = `${xPos}px`;
            mykiss1Element.style.top = `${yPos}px`;
            mykiss1Element.style.bottom = "auto";
            mykiss1Element.style.right = "auto";
        }
        });

//nexttttt

    const mykiss2Element = document.getElementById("kiss2");

    mykiss2Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "kiss2");

    const boundingRect = mykiss2Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX - boundingRect.left,
        y: evt.clientY - boundingRect.top,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "kiss2") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mykiss2Element.style.left = `${xPos}px`;
        mykiss2Element.style.top = `${yPos}px`;
        mykiss2Element.style.bottom = "auto";
        mykiss2Element.style.right = "auto";
    }
    });


//nexttttt

        const mygipsy1Element = document.getElementById("gipsy1");

        mygipsy1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "gipsy1");

        const boundingRect = mygipsy1Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "gipsy1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mygipsy1Element.style.left = `${xPos}px`;
            mygipsy1Element.style.top = `${yPos}px`;
            mygipsy1Element.style.bottom = "auto";
            mygipsy1Element.style.right = "auto";
        }
        });

//nexttttt

        const myking1Element = document.getElementById("king1");

        myking1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "king1");

        const boundingRect = myking1Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "king1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            myking1Element.style.left = `${xPos}px`;
            myking1Element.style.top = `${yPos}px`;
            myking1Element.style.bottom = "auto";
            myking1Element.style.right = "auto";
        }
        });

//nexttttt

        const myballerina1Element = document.getElementById("ballerina1");

        myballerina1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "ballerina1");

        const boundingRect = myballerina1Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX - boundingRect.left,
            y: evt.clientY - boundingRect.top,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });

        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });

        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();

        if (evt.dataTransfer.getData("id") === "ballerina1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            myballerina1Element.style.left = `${xPos}px`;
            myballerina1Element.style.top = `${yPos}px`;
            myballerina1Element.style.bottom = "auto";
            myballerina1Element.style.right = "auto";
        }
        });


//hover stufffff

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


