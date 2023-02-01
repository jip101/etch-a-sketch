let container = document.querySelector('.container');
let selected = document.querySelector('#colorWheel');

let gridSize = document.querySelector('.container')
let columns = prompt('Enter size of grid')
gridSize.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`


for (i=1; i<=columns**2; i++) {
    div = document.createElement("div");
    div.classList.add('box');
    div.setAttribute('class', 'box')
    div.addEventListener('mouseover', pickColor)
    container.appendChild(div);
}

let boxes = document.querySelectorAll('.box')

//set default for erase and clear buttons
let defaultBackground = document.querySelector('.box').style.backgroundColor;

function pickColor () {
    if (selected.id === 'rainbow') {
        this.style.backgroundColor = randomRGB();
    }
    else if (selected.id === 'colorWheel') {
        this.style.backgroundColor = document.querySelector('#colorWheel').value
    }
    else if (selected.id === 'erase') {
        this.style.backgroundColor = defaultBackground
    }
}

let buttons = document.querySelectorAll('.selector')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        selected = button;
    })
})


document.querySelector('#clear').addEventListener('click', () => {
    boxes.forEach(box => box.style.backgroundColor = defaultBackground)
})


let grid = document.querySelector('#grid')
grid.addEventListener('click', () => {
    boxes.forEach(box => {
        if (grid.value == 'on') {
            box.style.border='none'
        }
        else {
        box.style.border='1px solid black'
        }
    })
    if (grid.value == 'on'){
        grid.value = 'off'
    }
    else {
        grid.value = 'on'
    }})



function randomNumber() {
    return (Math.floor(Math.random()*256))
}

function randomRGB() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}