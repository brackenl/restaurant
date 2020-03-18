import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

console.log('Hello!');

function addListeners () {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');
    homeButton.addEventListener('click', home);
    menuButton.addEventListener('click', menu);
    contactButton.addEventListener('click', contact);
    console.log('added listeners');
}

addListeners();
home();

console.log('done');