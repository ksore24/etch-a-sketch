const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridSize = 16;
createGrid(gridSize);
button.onclick = function()
{
    gridSize = prompt("Enter the number of squares you would like per side to form the grid: ");
    while(gridSize > 100)
    {
        gridSize = prompt("Max grid length is 100 squares. Please enter a number less than 100.\n\nEnter the number of squares you would like per side to form the grid: ");
    }
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
};

function createGrid(gridSize)
{
    for(a = 0; a < gridSize; a++)
    {
        const squareRow = document.createElement("div");
        squareRow.className = "squareRow";

        for(b = 0; b < gridSize; b++)
        {
            const square = document.createElement("div");
            square.className = "square";

            square.onmouseover = function()
            {
                if(square.style.backgroundColor == "")
                {
                    square.style.backgroundColor = "rgb("+((Math.floor(Math.random() * 255)) + 1) + ", " + ((Math.floor(Math.random() * 255)) + 1) + ", " + ((Math.floor(Math.random() * 255)) + 1) + ")";
                    square.style.opacity = 0.1;
                }
                square.style.opacity = +square.style.opacity + 0.1;
            };
            
            squareRow.appendChild(square);
        }
        container.appendChild(squareRow);
    }
}

