let container = document.querySelector('.container');
let selected = document.querySelector('#colorWheel');
document.querySelector('input').style.backgroundColor = 'yellow'

//let gridSize = document.querySelector('.container')
let defaultBackground;
let width = document.querySelector('#gridSize');
width.addEventListener('input', changeSize);
let sizeDisplay = document.querySelector('#gridSizeText')

changeSize();


function changeSize () {
    sizeDisplay.innerHTML = width.value + 'x' + width.value;
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${width.value}, minmax(0, 1fr))`

    for (i=1; i<=width.value**2; i++) {
        div = document.createElement("div");
        div.classList.add('box');
        div.setAttribute('class', 'box')
        div.style.border='1px solid black'
        div.addEventListener('mouseover', pickColor)
        container.appendChild(div);
    }
    //set default for erase and clear buttons
    defaultBackground = document.querySelector('.box').style.backgroundColor;

    let grid = document.querySelector('#grid')
    grid.style.backgroundColor = 'yellow'
    grid.value = 'on'
}

let boxes = document.querySelectorAll('.box')


function pickColor () {
    if (selected.id === 'rainbow') {
        this.style.backgroundColor = randomRGB();
        this.style.filter = '';
    }
    else if (selected.id === 'colorWheel') {
        this.style.backgroundColor = document.querySelector('#colorWheel').value
        this.style.filter = '';
    }
    else if (selected.id === 'erase') {
        this.style.backgroundColor = defaultBackground;
        this.style.filter = '';
    }
    else if (selected.id === 'shader') {
        this.style.filter = shader(this.style);
    }
}

let buttons = document.querySelectorAll('.selector')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            button.style.backgroundColor = '';
        })
        selected = button;
        if (selected === button) {
            button.style.backgroundColor = 'yellow'
        }
    })
})


document.querySelector('#clear').addEventListener('click', () => {
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = defaultBackground;
        box.style.filter = '';
    })
})


let grid = document.querySelector('#grid')
grid.style.backgroundColor = 'yellow'
grid.addEventListener('click', () => {
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (grid.value == 'on') {
            box.style.border='none'
            grid.style.backgroundColor = ''
        }
        else {
        box.style.border='1px solid black'
        grid.style.backgroundColor = 'yellow'
        }
    })
    if (grid.value == 'on'){
        grid.value = 'off'
    }
    else {
        grid.value = 'on'
    }})


//generate and return rgb value (format = `rgb(r, g, b)`)
function randomRGB() {
    return `rgb(${Math.floor(Math.random()*256)}, 
    ${Math.floor(Math.random()*256)}, 
    ${Math.floor(Math.random()*256)})`
}


//decrease brightness by 0.1 with each pass
function shader(e) {
    if (!e.filter) {
        return `brightness(0.9)`
    }
    let x = (e.filter).slice(11,-1)
    return `brightness(${x-0.1})`
}
