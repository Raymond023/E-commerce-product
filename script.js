'use strict';

const closeNav = document.querySelector('.close-nav');
const openNav = document.querySelector('.open-nav');
const navBar = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

openNav.addEventListener('click', () => {
    navBar.classList.add('show-nav');
    overlay.classList.add('show-overlay');
});

closeNav.addEventListener('click', () => {
    navBar.classList.remove('show-nav');
    overlay.classList.remove('show-overlay');
})