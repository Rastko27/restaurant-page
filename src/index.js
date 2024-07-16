import homeLoad from './home-load.js';
import menuLoad from './menu-load.js';
import aboutLoad from './about-load.js'

const contentDiv = document.getElementById('content');

let home = document.getElementById('home');
let menu = document.getElementById('menu');
let about = document.getElementById('about');

home.addEventListener("click", () => {
    contentDiv.innerHTML = '';
    homeLoad();
});

menu.addEventListener("click", () => {
    contentDiv.innerHTML = '';
    menuLoad();
});

about.addEventListener("click", () => {
    contentDiv.innerHTML = '';
    aboutLoad();
});