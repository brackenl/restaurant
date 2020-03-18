function contact () {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.insertAdjacentHTML('beforeend', `<div class='info-container'></div>`);
    const infoContainer = document.querySelector('.info-container');
    infoContainer.insertAdjacentHTML('beforeend', `<p>Address: 555 Chocolate Chip Drive, Cookieville</p>`);
    infoContainer.insertAdjacentHTML('beforeend', `<p>Phone: 555-555-5555</p>`);
    infoContainer.insertAdjacentHTML('beforeend', `<p>Email: grandma@grandmascookies.com</p>`);
}

export { contact };