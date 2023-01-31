let container = document.querySelector('.container');
for (i=1; i<=4096; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = pickColor()
    })
    container.appendChild(div);
}

pickColor = () => document.querySelector('#colorWheel').value;


let buttons = document.querySelectorAll('.selector')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let boxClass = document.querySelectorAll('.box');
        boxClass.forEach(box => {
            box.addEventListener('mouseover', ()=> {
                box.style.backgroundColor = button.value;
            })
        })
    })
})


document.querySelector('#clear').addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.style.backgroundColor = 'lightgray')
})

