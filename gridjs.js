const container = document.querySelector('.container');
const button = document.querySelector('button');

let row ;
let column = row;
let containerDivs = row * column;

function createDivs(n) {
    for (let i=0; i<n; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
            
        container.appendChild(element);
    
    }
 }


createDivs(4 * 4); 

button.addEventListener('click', function() {
   const userInput = prompt ('Enter a number:');
   return userInput;
 });
