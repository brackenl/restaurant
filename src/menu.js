const menuItems = ['Chocolate chip', '£1.00', 'White chocolate', '£1.00', 'Peanut butter', '£1,000.00']

function menu () {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.insertAdjacentHTML('beforeend', `<div class='grid-container'></div>`);
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < menuItems.length; i++) {
        gridContainer.insertAdjacentHTML('beforeend', `<div class="grid-child">${menuItems[i]}</div>`)
    };    
}

export { menu };