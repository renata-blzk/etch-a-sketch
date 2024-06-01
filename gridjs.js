let container = document.querySelector('.container');

function createDivs() {
    for (let i=0; i<256; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        container.appendChild(element);
    }
}

createDivs(256);
console.log(container);