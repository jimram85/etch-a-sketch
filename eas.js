const grid = document.querySelector('.grid');
const resetBin = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');

let gridValue = document.querySelector('grid-size')
let gridSize = document.querySelector('input');


// Creat square divs

function createDiv (size){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    
    return div;
}