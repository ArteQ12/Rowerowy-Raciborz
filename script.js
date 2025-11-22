const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', showMenu);

const x = document.querySelector('#x');
x.addEventListener('click', closeMenu)

const nav = document.querySelector('nav');

function changeDisplay(n, i, h){
    nav.style.display = n;
    x.style.display = i;
    hamburger.style.display = h
}

function showMenu() {
    changeDisplay("block", "inline", "none");
}

function closeMenu() {
    changeDisplay("none", "none", "inline");
}

window.addEventListener('resize', menuOnResize);
function menuOnResize()
{
    changeDisplay("none", "none", "inline");

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width > 900)
{
    changeDisplay("table-cell", "none", "none");
}
else
{
    changeDisplay("none", "none", "inline");
}
}
