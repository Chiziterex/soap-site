const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.sidebar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 
