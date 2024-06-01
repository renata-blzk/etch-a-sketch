let container = document.querySelector('.container');

function createDivs() {
    for (let i=0; i<256; i++) {
        let element = document.createElement('div');
        element.classList.add('div');
        //element.onmouseover = changeColor;
        container.appendChild(element);

        let chngColor = document.querySelectorAll(':scope > .div');

        chngColor.forEach(function(div) {
            div.addEventListener('mouseover', function hover() {
                element.style.backgroundColor='green';
            })
        });
    
    }


        /*element.addEventListener('mouseover', () => {
            document.querySelectorAll('.div').style.backgroundColor="green";
        });/*

    }

    /*function changeColor() {
        document.querySelectorAll('.div').style.backgroundColor="green";
    }*/
}

createDivs(256); 