const container = document.querySelector(".container");

for(a = 0; a < 16; a++)
{
    const squareRow = document.createElement("div");
    squareRow.className = "squareRow";

    for(b = 0; b < 16; b++)
    {
        const square = document.createElement("div");
        square.className = "square";

        square.onmouseover = function()
        {
            square.style.backgroundColor = "red";
        };
        
        squareRow.appendChild(square);
    }
    container.appendChild(squareRow);
}