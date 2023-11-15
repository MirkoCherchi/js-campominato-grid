'use strict';

// function
function createCell (tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    return element;
}

// /function


const contenitoreGame = document.querySelector('.cont-game');
const bottone = document.querySelector('.btn');

for (let i = 1; i <= 100; i++) {

    bottone.addEventListener('click', function() {
    
    contenitoreGame.append(cell);
    
})
const cell = createCell('div', 'cell', i )

cell.addEventListener('click', function(){
    cell.classList.add('click');
    console.log(i);
})

    
    
}


