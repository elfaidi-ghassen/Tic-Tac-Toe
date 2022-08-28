class Board {
	constructor() {
		this.board = document.querySelector(".board");
		this.grid = [[], [], []];
		this.gridOfValues = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
		this.previous = xo.o;
		this.gameOver = false;
	}
	createBoard() {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
        let section = createSectionIn(this.board);
				this.grid[i][j] = section

				let clickBtn = (_) => {
					if (section.innerHTML === "" && !this.gameOver) {
            // Toggle X/O
						section.innerHTML = (this.previous == xo.x ? xo.o : xo.x);
						this.previous = (this.previous == xo.x ? xo.o : xo.x);
						section.classList.add(this.previous == xo.x ? "x" : "o");

						this.gridOfValues[i][j] = section.innerHTML;
						// Check if the game is over
            let finish = check(this.gridOfValues);
						if (finish) this.gameOver = true;
					}
				};
				this.grid[i][j].addEventListener("click", clickBtn);
			}
		}
	}
}

function allAreEqual(...elements) {
	return elements.every((el) => el == elements[0]);
}
function createSectionIn(target) {
  let section = document.createElement("div");
  section.classList.add("board-section");
	target.appendChild(section);
  return section
}
