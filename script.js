// Just for Checking Connection
// console.log("Its working");

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
        square.classList.add("grid_box")
        
        gridContainer.appendChild(square)
     
    }
    
    // Hover to Change Color Functionality
    const gridBox = document.querySelectorAll(".grid_box");
    gridBox.forEach((element) => {
        element.addEventListener('mouseover', () => {
            
            element.style.backgroundColor = "#60435F";
            
        })
    })

}


//To Reset Colors
reset.addEventListener('click', () => {
    document.querySelectorAll(".grid_box").forEach((element) => {
            element.style.backgroundColor = "#FDF7FA";
    })
})


// Changing Size of Grid by Button
changeGrid.addEventListener("click", () => {

    let input = prompt("Please Enter Size", 16)
    let num = parseInt(input)
    if(isNaN(num) || num < 1 || num > 100) {
        alert("Please Enter Between 1 - 100")
        return
    }
    console.log(num) // For Debugging Purpose Only
    createGrid(num)
})


//Default Size of Grid
createGrid(16)