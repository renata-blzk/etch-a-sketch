let container = document.querySelector('.container');

function createDivs() {
    for (let i=0; i<256; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
            
        container.appendChild(element);
    
    }
 }


createDivs(256); 