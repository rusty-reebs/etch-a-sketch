
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
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function reset () {
    removeAllChildNodes (container);
    buildGrid ();
    console.log ("reset!");
}

buildGrid ();

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);





