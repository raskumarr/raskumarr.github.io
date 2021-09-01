window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger-active');
            menu.classList.toggle('menu-active');
        })
    })
})