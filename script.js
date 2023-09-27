const gridContainer = document.getElementById('grid-container');
const button = document.getElementById('resize');

const maxGridSize = 100;

let gridSize = 16;

function createGrid() {
    gridContainer.innerHTML = '';

    const squareSize = 640 / gridSize;

    gridSize = Math.min(gridSize, maxGridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.appendChild(square);
    }
}

function handleHover(event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'grey'; 
    }
}

function promptForNewSize(event) {
    const newSize = prompt('Enter the number of squares per side for the new grid:')

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        gridSize = parseInt(newSize);
        createGrid();
    } else {
        alert('Please enter a positive number between 1-100')
    }
}

gridContainer.addEventListener('mouseover', handleHover);
button.addEventListener('click', promptForNewSize);

createGrid();