let container = document.querySelector('.container');

function createDivs() {
    for (let i=0; i<16; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        container.appendChild(element);
    }
}

createDivs(16);
console.log(container);