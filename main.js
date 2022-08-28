let result = document.querySelector("p");
let xo = {x: "✖", o: "〇"}

let gameBoard = new Board();
gameBoard.createBoard();

document.querySelector("button").onclick = function () {
  // Delete the old board
	let toRm = document.querySelector(".board").childNodes;
	while (toRm.length > 0) toRm[0].remove();
	result.innerHTML = "";
	gameBoard.createBoard();
};
