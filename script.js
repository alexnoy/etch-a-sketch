const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.setAttribute('id', 'grid');
    container.appendChild(divs);
}

let grid = document.querySelectorAll('#grid');
grid.forEach(cell => cell.addEventListener('mouseover', function(){
    cell.style.backgroundColor = 'grey';
}));

const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    grid.forEach(cell => cell.style.backgroundColor = '');
});

const resize = document.querySelector('#resize');