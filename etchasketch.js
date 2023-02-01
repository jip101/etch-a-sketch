let container = document.querySelector('.container');
let selected = document.querySelector('#colorWheel');

for (i=1; i<=100; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    div.setAttribute('class', 'box')
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = pickColor()
    })
    container.appendChild(div);
}

let defaultBackground = document.querySelector('.box').style.backgroundColor;

pickColor = () => selected.value;

let buttons = document.querySelectorAll('.selector')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        selected = button;
    })
})




document.querySelector('#clear').addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.style.backgroundColor = defaultBackground)
    
})

let boxes = document.querySelectorAll('.box')
let grid = document.querySelector('#grid')
console.log(boxes)
grid.addEventListener('click', () => {
    boxes.forEach(box => {
        if (grid.value == 'on') {
            box.style.border='hidden'
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
