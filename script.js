const gridContainer = document.getElementById('grid-container');

const rows = 16;
const cols = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.append(square);
    }
}
