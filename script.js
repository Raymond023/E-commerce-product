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

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const quantity = document.querySelector('.quantity')

let counter = 0;

function totalQuantity() {
    plus.addEventListener('click', () => {
        counter++
        quantity.textContent = counter;
    })
    minus.addEventListener('click', () => {
        if(counter > 0){
            counter--
            quantity.textContent = counter;
        }

    })

}
totalQuantity()

const cart = document.querySelector('.cart');
const cartContent = document.querySelector('.cart-content');
const checkout = document.querySelector('.checkout');

cart.addEventListener('click', () => {
    
    if(cartContent.style.display === 'block') {
        cartContent.style.display = 'none'
    } else {
        cartContent.style.display = 'block'
    }
})

// checkout.addEventListener('click', () => {
//     cartContent.style.display = 'none'
// })