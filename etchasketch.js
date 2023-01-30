let container = document.querySelector('.container');
for (i=1; i<=4096; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = pickColor()
    })
    container.appendChild(div);
}

pickColor = () => document.querySelector('.color').value

/*
colorSelector = document.querySelectorAll('.color')
colorSelector.forEach(element => {
    element.addEventListener('click', (e) => {
        colorSelector.forEach(i => {
            if(!e) {
                i.id=''
            }
            e.id='selected'
        })
    })
});
*/