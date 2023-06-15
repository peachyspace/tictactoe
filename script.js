const board = document.querySelector("#board");
const infoDisplay = document.querySelector("#info");
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
let go = "circle";
infoDisplay.textContent = "Circle goes first";
createBoard();
function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay); //the event target property returns the HTML element that triggered an event
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = `it is ${go}'s turn!!!`;
  e.target.removeEventListener("click", addGo); //we can only add 1 item to a square
  updatingScore();
} //function declarations are hoisted cßmpletely to the top
function updatingScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombos.forEach((array) => {
    const circleWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );
  });
  if (circleWins) {
    infoDisplay.textContent = "Circle is the winner!!!";
    allSquares.forEach(square.replaceWith(square.cloneNode(true)));
    return;
  }
}
