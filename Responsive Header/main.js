const toogleBtn = document.querySelector('.navar_toggleBtn')
const menu = document.querySelector('.ul_menu');
const icons = document.querySelector('.icon');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})