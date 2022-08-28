let result = document.querySelector("p")
let isEqual = (...elements) => elements.every(el => el == elements[0])
check = function(mat) {
  // console.log(mat);
  let toCheck = ["✖", "〇"]
  for(const element of toCheck) {
    for(let i = 0; i < 3; i++) {
      if (isEqual(mat[i][0], mat[i][1], mat[i][2], element)) {
          // Horizontal
          result.innerHTML = element + " won"
          return true
        }
        //  Vertical
        if (isEqual(mat[0][i], mat[1][i], mat[2][i], element)) {
          result.innerHTML = element + " won"
          return true
        }
      }
    if (isEqual(mat[0][0], mat[1][1], mat[2][2], element)) {
      result.innerHTML = element + " won"
          return true
    }
    if (isEqual(mat[2][0], mat[1][1], mat[0][2], element)) {
      result.innerHTML = element + " won"
          return true
    }
  }
  if (mat.flat().every(e => e != "")) {
    result.innerHTML = "draw"
  }


}
class Board {

  constructor() {
    this.board = document.querySelector(".board")
    this.grid = [[],[],[]]
    this.gridOfValues = [["","",""],["","",""],["","",""]]
    this.previous = "〇"
    this.gameOver = false
  }

  createBoard() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let section = document.createElement("div")
        section.classList.add("board-section")
        this.board.appendChild(section)
        this.grid[i][j] = section

        let onClicking = () => {
            if (this.grid[i][j].innerHTML == "" && !this.gameOver) {
              this.grid[i][j].innerHTML = this.previous == "✖" ? "〇" : "✖"
              this.previous = this.previous == "✖" ? "◯" : "✖"

              this.grid[i][j].classList.add(this.previous == "✖" ? "o" : "x")
              this.gridOfValues[i][j] = this.grid[i][j].innerHTML
              let finish = check(this.gridOfValues)
              if (finish) {
                this.gameOver = true
              }
          }
        }
        this.grid[i][j].addEventListener("click", onClicking)


      }

    }
    // console.log(this.grid);
  }


}


let gameBoard = new Board
gameBoard.createBoard()

document.querySelector("button").onclick = function() {
  let toRm = document.querySelector(".board").childNodes
  while (toRm.length > 0) {
    toRm[0].remove()
  }
  result.innerHTML = ""
  let gameBoard = new Board
  gameBoard.createBoard()
}
