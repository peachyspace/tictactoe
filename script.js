const board = document.querySelector("#board");
const intialCells = ["", "", "", "", "", "", "", "", ""];
const createBoard = function () {
  intialCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    board.append(cellElement);
  });
};

createBoard();
function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add("cross");
  e.target.append(goDisplay); //the event target property returns the HTML element that triggered an event
} //function declarations are hoisted completely to the top
