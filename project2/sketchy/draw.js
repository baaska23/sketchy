const gridContainer = document.getElementById("grid-container");
const restartButton = document.getElementById("restart");
const generateButton = document.getElementById("generate");
const numSquaresInput = document.getElementById("numSquares");

function createGrid(numSquares) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add('grid-square');
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "lightGreen";
            });
            gridContainer.appendChild(gridSquare);
        }
    }

    restartButton.addEventListener("click", () => {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach((square) => {
            square.style.backgroundColor = "gray";
        });
    });
}

generateButton.addEventListener("click", () => {
    const too = parseInt(numSquaresInput.value, 10) || 0;
    if (too > 0) {
        createGrid(too);
    } else {
        alert("Enter a valid number.");
    }
});
