const board = document.querySelector("#board");
const intialCells = ["", "", "", "", "", "", "", "", ""];
const createBoard = function () {
  intialCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    board.append(cellElement);
  });
};

createBoard();
