const grid = document.querySelector("#grid");
const gridSize = 640;

let noSquares = 16;

const noSquaresRange = document.querySelector("#no-squares-range");
const noSquaresText = document.querySelector("#no-squares-text");
noSquaresRange.value = noSquares;
noSquaresText.value = noSquares;

let squares;
const squareBorderSize = 1;
const squareStartColour = "lightgrey";
const squareEndColour = "black";

redrawGrid(noSquares);

noSquaresRange.addEventListener("input", noSquaresRangeChange);

function colorSquare(e) {
  e.target.style.backgroundColor = squareEndColour;
}

function noSquaresRangeChange(e) {
  noSquaresText.value = e.target.value;
  redrawGrid(e.target.value);
}

function redrawGrid(noSquares) {
  squares = [];
  grid.replaceChildren();

  const squareSize = Math.floor(((gridSize - 2 * squareBorderSize * noSquares) / noSquares));

  for (let i = 0; i < noSquares; i++) {
    const row = document.createElement("div");

    row.style.margin = 0;
    row.style.padding = 0;
    row.style.border = 0;
    row.style.display = "flex";

    for (let j = 0; j < noSquares; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", i * noSquares + j)
    
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      square.style.backgroundColor = squareStartColour;
      square.style.margin = 0;
      square.style.padding = 0;
      square.style.border = squareBorderSize + "px";
      square.style.borderStyle = "solid";
      square.style.borderColor = "transparent";
      square.style.backgroundClip = "padding-box";
      
      squares.push(square);
      row.appendChild(square);
    }

    grid.appendChild(row);
  }

  squares.forEach(square => {
    square.addEventListener("mouseenter", colorSquare);
  }, {
    once: true
  });
}
