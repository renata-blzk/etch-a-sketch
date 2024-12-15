const GRIDSIDE = 400;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', setBackgroundColor);
    }
};

createGridCells();






// ////////////////// MY CODE

/*const container = document.querySelector('.container');
const button = document.querySelector('button');

let row;
let column;
let containerDivs = row * column;


//createDivs(4 * 4); 

button.addEventListener('click', function() {
   const userInput = prompt ('Enter a number:');
   return userInput;

   /*function createDivs(userInput) {
    for (let i=0; i<userInput; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
            
        container.appendChild(element);
    
    }
 }

 });

slider.addEventListener('change', function() {
    let boxes = document.querySelectorAll('.div');
    boxes.forEach(box => {
        box.remove();
    });
    createDivs();
})

 function createDivs() {
    for (let i=0; i<(slider.value * slider.value); i++) {
        let element = document.createElement('div');
        let a = slider.value;
        const boxSize = 530 / a;
        grid.classList.add("grid");
        grid.style.width = boxSize + "px";
        grid.style.height = boxSize + "px";
        element.classList.add('div');
        
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
            
        container.appendChild(element);
        container.appendChild(grid);
    
    }
 }

 createDivs(4); */
 
