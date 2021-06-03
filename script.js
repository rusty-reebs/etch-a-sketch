
const container = document.querySelector(".container");

for (i = 0; i <= 16; i++) {

let newSquare = document.createElement("div");

newSquare.classList.add("square");
newSquare.textContent= "SQUARE";


container.appendChild(newSquare);
}

