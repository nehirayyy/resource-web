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


//nexttttt

const mycowgirl1Element = document.getElementById("cowgirl1");

        mycowgirl1Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "cowgirl1");

        const boundingRect = mycowgirl1Element.getBoundingClientRect();
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

        if (evt.dataTransfer.getData("id") === "cowgirl1") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mycowgirl1Element.style.left = `${xPos}px`;
            mycowgirl1Element.style.top = `${yPos}px`;
            mycowgirl1Element.style.bottom = "auto";
            mycowgirl1Element.style.right = "auto";
        }
        });



        ////GIFS AT THE BOTTOMMMMM
    //nexttttt

    const mygipsy1Element = document.getElementById("gipsy1");

    mygipsy1Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "gipsy1");

    const boundingRect = mygipsy1Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
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

    //NEXTTTT

    const mycowgirl2Element = document.getElementById("cowgirl2");

    mycowgirl2Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "cowgirl2");

    const boundingRect = mycowgirl2Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "cowgirl2") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mycowgirl2Element.style.left = `${xPos}px`;
        mycowgirl2Element.style.top = `${yPos}px`;
        mycowgirl2Element.style.bottom = "auto";
        mycowgirl2Element.style.right = "auto";
    }
    });


    //NEXTTTT

const mycowgirl3Element = document.getElementById("cowgirl3");

mycowgirl3Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "cowgirl3");

const boundingRect = mycowgirl3Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "cowgirl3") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mycowgirl3Element.style.left = `${xPos}px`;
    mycowgirl3Element.style.top = `${yPos}px`;
    mycowgirl3Element.style.bottom = "auto";
    mycowgirl3Element.style.right = "auto";
}
});
    
    //NEXTTTT

    const myclown1Element = document.getElementById("clown1");

    myclown1Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "clown1");
    
    const boundingRect = myclown1Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });
    
    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });
    
    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();
    
    if (evt.dataTransfer.getData("id") === "clown1") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        myclown1Element.style.left = `${xPos}px`;
        myclown1Element.style.top = `${yPos}px`;
        myclown1Element.style.bottom = "auto";
        myclown1Element.style.right = "auto";
    }
    });
        
    
    //NEXTTTT

    const mygipsy2Element = document.getElementById("gipsy2");

    mygipsy2Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "gipsy2");

    const boundingRect = mygipsy2Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "gipsy2") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mygipsy2Element.style.left = `${xPos}px`;
        mygipsy2Element.style.top = `${yPos}px`;
        mygipsy2Element.style.bottom = "auto";
        mygipsy2Element.style.right = "auto";
    }
    });


        //NEXTTTT

        const mygipsy3Element = document.getElementById("gipsy3");

        mygipsy3Element.addEventListener("dragstart", (evt) => {
        evt.dataTransfer.setData("id", "gipsy3");
    
        const boundingRect = mygipsy3Element.getBoundingClientRect();
        const offset = {
            x: evt.clientX +- window.scrollX,
            y: evt.clientY +- window.scrollY,
        };
        evt.dataTransfer.setData("offset", JSON.stringify(offset));
        });
    
        document.documentElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        });
    
        document.documentElement.addEventListener("drop", (evt) => {
        evt.preventDefault();
    
        if (evt.dataTransfer.getData("id") === "gipsy3") {
            const offset = JSON.parse(evt.dataTransfer.getData("offset"));
            const xPos = evt.clientX - offset.x;
            const yPos = evt.clientY - offset.y;
            mygipsy3Element.style.left = `${xPos}px`;
            mygipsy3Element.style.top = `${yPos}px`;
            mygipsy3Element.style.bottom = "auto";
            mygipsy3Element.style.right = "auto";
        }
        });


    //NEXTTTT

    const mywizard1Element = document.getElementById("wizard1");

    mywizard1Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "wizard1");

    const boundingRect = mywizard1Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "wizard1") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mywizard1Element.style.left = `${xPos}px`;
        mywizard1Element.style.top = `${yPos}px`;
        mywizard1Element.style.bottom = "auto";
        mywizard1Element.style.right = "auto";
    }
    });


    // NEXTTTTTT

    const mywizard2Element = document.getElementById("wizard2");

    mywizard2Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "wizard2");

    const boundingRect = mywizard2Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "wizard2") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mywizard2Element.style.left = `${xPos}px`;
        mywizard2Element.style.top = `${yPos}px`;
        mywizard2Element.style.bottom = "auto";
        mywizard2Element.style.right = "auto";
    }
    });


    ///NEXTTTTT

    const mymilkman1Element = document.getElementById("milkman1");

    mymilkman1Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "milkman1");

    const boundingRect = mymilkman1Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "milkman1") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mymilkman1Element.style.left = `${xPos}px`;
        mymilkman1Element.style.top = `${yPos}px`;
        mymilkman1Element.style.bottom = "auto";
        mymilkman1Element.style.right = "auto";
    }
    });


    ///NEXTTTTT
    
    const mymilkman2Element = document.getElementById("milkman2");

    mymilkman2Element.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "milkman2");

    const boundingRect = mymilkman2Element.getBoundingClientRect();
    const offset = {
        x: evt.clientX +- window.scrollX,
        y: evt.clientY +- window.scrollY,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
    });

    document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    });

    document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "milkman2") {
        const offset = JSON.parse(evt.dataTransfer.getData("offset"));
        const xPos = evt.clientX - offset.x;
        const yPos = evt.clientY - offset.y;
        mymilkman2Element.style.left = `${xPos}px`;
        mymilkman2Element.style.top = `${yPos}px`;
        mymilkman2Element.style.bottom = "auto";
        mymilkman2Element.style.right = "auto";
    }
    });


///NEXTTTTT
    
const myreligion2Element = document.getElementById("religion2");

myreligion2Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "religion2");

const boundingRect = myreligion2Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "religion2") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myreligion2Element.style.left = `${xPos}px`;
    myreligion2Element.style.top = `${yPos}px`;
    myreligion2Element.style.bottom = "auto";
    myreligion2Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myreligion3Element = document.getElementById("religion3");

myreligion3Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "religion3");

const boundingRect = myreligion3Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "religion3") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myreligion3Element.style.left = `${xPos}px`;
    myreligion3Element.style.top = `${yPos}px`;
    myreligion3Element.style.bottom = "auto";
    myreligion3Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mydisco1Element = document.getElementById("disco1");

mydisco1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "disco1");

const boundingRect = mydisco1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "disco1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mydisco1Element.style.left = `${xPos}px`;
    mydisco1Element.style.top = `${yPos}px`;
    mydisco1Element.style.bottom = "auto";
    mydisco1Element.style.right = "auto";
}
});


///NEXTTTTT
    
const myfireplace1Element = document.getElementById("fireplace1");

myfireplace1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "fireplace1");

const boundingRect = myfireplace1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "fireplace1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myfireplace1Element.style.left = `${xPos}px`;
    myfireplace1Element.style.top = `${yPos}px`;
    myfireplace1Element.style.bottom = "auto";
    myfireplace1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myfrog1Element = document.getElementById("frog1");

myfrog1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "frog1");

const boundingRect = myfrog1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "frog1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myfrog1Element.style.left = `${xPos}px`;
    myfrog1Element.style.top = `${yPos}px`;
    myfrog1Element.style.bottom = "auto";
    myfrog1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myhorse1Element = document.getElementById("horse1");

myhorse1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "horse1");

const boundingRect = myhorse1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "horse1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myhorse1Element.style.left = `${xPos}px`;
    myhorse1Element.style.top = `${yPos}px`;
    myhorse1Element.style.bottom = "auto";
    myhorse1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mymirror1Element = document.getElementById("mirror1");

mymirror1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "mirror1");

const boundingRect = mymirror1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "mirror1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mymirror1Element.style.left = `${xPos}px`;
    mymirror1Element.style.top = `${yPos}px`;
    mymirror1Element.style.bottom = "auto";
    mymirror1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myelderly1Element = document.getElementById("elderly1");

myelderly1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "elderly1");

const boundingRect = myelderly1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "elderly1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myelderly1Element.style.left = `${xPos}px`;
    myelderly1Element.style.top = `${yPos}px`;
    myelderly1Element.style.bottom = "auto";
    myelderly1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myelf1Element = document.getElementById("elf1");

myelf1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "elf1");

const boundingRect = myelf1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "elf1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myelf1Element.style.left = `${xPos}px`;
    myelf1Element.style.top = `${yPos}px`;
    myelf1Element.style.bottom = "auto";
    myelf1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mygardener1Element = document.getElementById("gardener1");

mygardener1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "gardener1");

const boundingRect = mygardener1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "gardener1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mygardener1Element.style.left = `${xPos}px`;
    mygardener1Element.style.top = `${yPos}px`;
    mygardener1Element.style.bottom = "auto";
    mygardener1Element.style.right = "auto";
}
});


///NEXTTTTT
    
const mygardener2Element = document.getElementById("gardener2");

mygardener2Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "gardener2");

const boundingRect = mygardener2Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "gardener2") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mygardener2Element.style.left = `${xPos}px`;
    mygardener2Element.style.top = `${yPos}px`;
    mygardener2Element.style.bottom = "auto";
    mygardener2Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mypainter1Element = document.getElementById("painter1");

mypainter1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "painter1");

const boundingRect = mypainter1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "painter1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mypainter1Element.style.left = `${xPos}px`;
    mypainter1Element.style.top = `${yPos}px`;
    mypainter1Element.style.bottom = "auto";
    mypainter1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mycop1Element = document.getElementById("cop1");

mycop1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "cop1");

const boundingRect = mycop1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "cop1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mycop1Element.style.left = `${xPos}px`;
    mycop1Element.style.top = `${yPos}px`;
    mycop1Element.style.bottom = "auto";
    mycop1Element.style.right = "auto";
}
});


///NEXTTTTT
    
const mycop2Element = document.getElementById("cop2");

mycop2Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "cop2");

const boundingRect = mycop2Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "cop2") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mycop2Element.style.left = `${xPos}px`;
    mycop2Element.style.top = `${yPos}px`;
    mycop2Element.style.bottom = "auto";
    mycop2Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mycop3Element = document.getElementById("cop3");

mycop3Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "cop3");

const boundingRect = mycop3Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "cop3") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mycop3Element.style.left = `${xPos}px`;
    mycop3Element.style.top = `${yPos}px`;
    mycop3Element.style.bottom = "auto";
    mycop3Element.style.right = "auto";
}
});


///NEXTTTTT
    
const myqueen1Element = document.getElementById("queen1");

myqueen1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "queen1");

const boundingRect = myqueen1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "queen1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myqueen1Element.style.left = `${xPos}px`;
    myqueen1Element.style.top = `${yPos}px`;
    myqueen1Element.style.bottom = "auto";
    myqueen1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const mytarzan1Element = document.getElementById("tarzan1");

mytarzan1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "tarzan1");

const boundingRect = mytarzan1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "tarzan1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mytarzan1Element.style.left = `${xPos}px`;
    mytarzan1Element.style.top = `${yPos}px`;
    mytarzan1Element.style.bottom = "auto";
    mytarzan1Element.style.right = "auto";
}
});

///NEXTTTTT
    
const myteacher1Element = document.getElementById("teacher1");

myteacher1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "teacher1");

const boundingRect = myteacher1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "teacher1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    myteacher1Element.style.left = `${xPos}px`;
    myteacher1Element.style.top = `${yPos}px`;
    myteacher1Element.style.bottom = "auto";
    myteacher1Element.style.right = "auto";
}
});


///NEXTTTTT
    
const mywoman1Element = document.getElementById("woman1");

mywoman1Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "woman1");

const boundingRect = mywoman1Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "woman1") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mywoman1Element.style.left = `${xPos}px`;
    mywoman1Element.style.top = `${yPos}px`;
    mywoman1Element.style.bottom = "auto";
    mywoman1Element.style.right = "auto";
}
});


///NEXTTTTT
    
const mywoman2Element = document.getElementById("woman2");

mywoman2Element.addEventListener("dragstart", (evt) => {
evt.dataTransfer.setData("id", "woman2");

const boundingRect = mywoman2Element.getBoundingClientRect();
const offset = {
    x: evt.clientX +- window.scrollX,
    y: evt.clientY +- window.scrollY,
};
evt.dataTransfer.setData("offset", JSON.stringify(offset));
});

document.documentElement.addEventListener("dragover", (evt) => {
evt.preventDefault();
evt.dataTransfer.dropEffect = "move";
});

document.documentElement.addEventListener("drop", (evt) => {
evt.preventDefault();

if (evt.dataTransfer.getData("id") === "woman2") {
    const offset = JSON.parse(evt.dataTransfer.getData("offset"));
    const xPos = evt.clientX - offset.x;
    const yPos = evt.clientY - offset.y;
    mywoman2Element.style.left = `${xPos}px`;
    mywoman2Element.style.top = `${yPos}px`;
    mywoman2Element.style.bottom = "auto";
    mywoman2Element.style.right = "auto";
}
});


//hover stufffff

L.addEventListener("mouseover", addRect());

onmouseover = hoverGlowL(); 
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
    var text = document.getElementById("L").style.textShadow = "0 0 41px #00d0ff, 0 0 41px #00d0ff,  0 0 41px #00d0ff, 0 0 41px #00d0ff, 0 0 81px #00d0ff, 0 0 82px #00d0ff, 0 0 92px #00d0ff, 0 0 92px #00d0ff, 0 0 92px #00d0ff, 0 0 102px #00d0ff, 0 0 151px #00d0ff";
}

function removeGlowL(){
    var text = document.getElementById("L").style.textShadow = '0px 0px 0px';
}


function hoverGlowA(){
    var text = document.getElementById("A").style.textShadow = "0 0 41px #00d0ff, 0 0 41px #00d0ff, 0 0 41px #00d0ff, 0 0 81px #00d0ff, 0 0 82px #00d0ff, 0 0 92px #00d0ff, 0 0 92px #00d0ff, 0 0 102px #00d0ff, 0 0 151px #00d0ff";
}

function removeGlowA(){
    var text = document.getElementById("A").style.textShadow = '0px 0px 0px';
}
function hoverGlowR(){
    var text = document.getElementById("R").style.textShadow = "0 0 41px #00d0ff, 0 0 82px #00d0ff, 0 0 92px #00d0ff, 0 0 102px #00d0ff, 0 0 151px #00d0ff";
}

function removeGlowR(){
    var text = document.getElementById("R").style.textShadow = '0px 0px 0px';
}
function hoverGlowP(){
    var text = document.getElementById("P").style.textShadow = "0 0 41px #00d0ff, 0 0 41px #00d0ff, 0 0 41px #00d0ff, 0 0 81px #00d0ff, 0 0 82px #00d0ff, 0 0 92px #00d0ff, 0 0 92px #00d0ff, 0 0 102px #00d0ff, 0 0 151px #00d0ff";
}

function removeGlowP(){
    var text = document.getElementById("P").style.textShadow = '0px 0px 0px';
}


