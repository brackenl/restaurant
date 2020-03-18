function home () {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.insertAdjacentHTML('beforeend', `<h1>Grandma's Cookies</h1>`);
    content.insertAdjacentHTML('beforeend', `<h3>The best cookies in town!</h3>`);
}

export { home };