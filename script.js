
const container = document.querySelector(".container");
function buildGrid () {
    for (i = 0; i <= 256; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
        })

    container.appendChild(newSquare);

    }
}

function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function buildCustomGrid (lines) {
    for (i = 0; i <= lines*lines; i++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
            })

    container.appendChild(newSquare);

    }
}     


function resetNew () {
    removeAllChildNodes (container);
    let lines = prompt("How many lines?");
    while (lines > 100) {
        alert ("Cannot exceed 100");
        lines = prompt ("How many lines?");
    }
    
    container.setAttribute("style", `grid-template-columns: repeat(${lines}, 1fr);
            grid-template-rows: repeat(${lines}, 1fr);`);
    buildCustomGrid (lines);
    console.log ("reset!");
}
 


buildGrid ();

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetNew);


