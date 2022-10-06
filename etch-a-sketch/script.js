// Creates the grid before having to click button
generateGrid();

// a 'reset grid' button that would clear the current grid and asks how many squares per side for a new grid.
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    generateGrid();
    resetGrid();
});

function generateGrid(){
    let userInput = prompt("How many squares per side would you like (1 - 100):");
    let squares = Math.pow(userInput, 2);

    if (userInput < 0 || userInput > 100){
        alert("You did not input an appropriate value, Please try again.");
        squares = 0;
        userInput = 0;
    }

    if(0 < userInput < 101){
        // create a grid of square divs with the size from user input if the size is accepted
        const container = document.querySelector('#container');
        for(let i = 0; i < squares; i++){
            const grids = document.createElement('div');
            grids.classList.add('column');
            container.appendChild(grids);
        }

        // setup a hover effect on the grid divs with a pixelated trail as a pen would
        const column = document.querySelectorAll('.column');
        for (let i = 0; i < column.length; i++){
            column[i].addEventListener("mouseover", function(){
                changeColor(this);
            });
        }
    }

    // This allows the button to fully reset the grid instead of adding onto the user input.
    const container = document.querySelector('#container');
    let gridTemplateColumns = 'repeat(' + userInput + ', 1fr)';

    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateColumns;
}

// optional: random rgb
function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randColor = "rgb(" + x + "," + y + "," + z + ")";
    return randColor;
}

// function that is used to call randomColor()
function changeColor(x){
    x.style.backgroundColor = randomColor();
}

// function to reset the grid
function resetGrid(){
    const column = document.querySelectorAll('.column');
    let reset = "rgb(0,0,0)";
    
    for(let i = 0; i < column.length; i++){
        column[i].style.backgroundColor = reset;
    }
}