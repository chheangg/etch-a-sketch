const container = document.querySelector('.container');
const button = document.querySelector('button');
let input;
button.addEventListener('click', () => {
    for ( i = calculateGrid(input); i > 0; i-- ) {
        container.removeChild(container.lastElementChild);
    }
    playRound();
    }
);

playRound();

function playRound() {
prompting();
createContainer(input);
createGrid(calculateGrid(input));
gridTransition();
}


function prompting() {
    input = prompt("How much lah?");  

    if (input === undefined || input === null || input > 100) {
        return prompting();
    }

    input;
}
function calculateGrid(input) {
    parseInt(input);
    let grid = input ** 2;
    return grid;
}

function createContainer(input) {
    container.style.cssText = `grid-template-columns: repeat(${input}, auto);`;
}

function createGrid(input) {
    for (i = 0; i < input; i++) {
        createOneGrid();
    }
}

function createOneGrid() {
    let grid = document.createElement('div');
    grid.classList.add('grid'); 
    container.appendChild(grid);
}

function gridTransition() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(gridHover);
}

function gridHover(gridName) {
    gridName.addEventListener('mouseenter', (gridEvent) => {
        gridEvent.target.style.cssText = `background-color: rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;

        setTimeout((e) => {
            gridEvent.target.style.cssText = 'background-color:';
        }, 500)
    } )
}

function randomRGB() {
    return Math.floor(Math.random() * 255)
}