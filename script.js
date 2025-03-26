const container = document.querySelector('#container');

function createGrid(size = 256) {
    for (let i = 0; i < size; i++) {
        const divs = document.createElement('div');
        divs.setAttribute('id', 'grid');
        container.appendChild(divs);
    }
};

let grid = document.querySelectorAll('#grid');
grid.forEach(cell => cell.addEventListener('mouseover', function(){
    cell.style.backgroundColor = 'grey';
}));

const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    grid.forEach(cell => cell.style.backgroundColor = '');
});

const resize = document.querySelector('#resize');

resize.addEventListener('click', function() {
    let size = prompt('Choose a grid size: 1-100');
    if (size > 100 || size < 1) {
        size = 16;
        alert('I said 1-100');
    }

    grid.forEach(cell => cell.remove());

    createGrid(size ** 2);

    grid = document.querySelectorAll('#grid');
    
    grid.forEach(cell => cell.style.flexBasis = `${100 / size}%`)
    grid.forEach(cell => cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = 'grey';
    }));
});