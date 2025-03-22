const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.textContent = 1;
    container.appendChild(divs);
}