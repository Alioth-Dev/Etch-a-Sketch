console.log("yoo Its working");

const containerSize = 640;
const gridContainer = document.querySelector('.container');
const changeGrid = document.querySelector('.grid_change');
const reset = document.querySelector('.reset');


// Function to Create Grid of Any Size
function createGrid(size) {

    //Empty Grid Before Creating New Grid
    gridContainer.innerHTML = '';

    const squareSize = containerSize / size;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize + "px"
        square.style.height = squareSize + "px"
        square.style.border = "1px solid #E2A3C7"
        square.style.boxSizing = "border-box"
        square.style.backgroundColor = "#FDF7FA";
        

        gridContainer.appendChild(square)
    }

}

// Changing Size of Grid by Button
changeGrid.addEventListener("click", () => {

    let input = prompt("Please Enter Size", 16)
    let num = parseInt(input)
    if(isNaN(num) || num < 1 || num > 100) {
        alert("Please Enter Between 1 - 100")
        return
    }
    console.log(num)
    createGrid(num)
})


//Default Size of Grid
createGrid(16)