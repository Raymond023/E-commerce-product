'use strict';

// nav function
const body = document.body;
const closeNav = document.querySelector('.close-nav');
const openNav = document.querySelector('.open-nav');
const navDialog = document.querySelector('.nav-dialog')

openNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    navDialog.classList.add('show-nav');
    navDialog.showModal();
});

closeNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    navDialog.classList.remove('show-nav');
    navDialog.close();
})

navDialog.addEventListener('click', (e) =>{
    if(e.target === navDialog) {
        navDialog.close();
        body.classList.toggle('overlay');
    }
})

// end of nav function


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const quantity = document.querySelector('.quantity');


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
        quantityBought.textContent = discountPrice.textContent + ' x ' + quantity.textContent;
        tototalCost()

    })

}
totalQuantity()

const cart = document.querySelector('.cart');
const cartContent = document.querySelector('.cart-content');
const checkout = document.querySelector('.checkout');

cart.addEventListener('click', () => {
    
    if(cartContent.style.display === 'block') {
        cartContent.classList.toggle('hide');
    } else {
        cartContent.classList.toggle('show');
    }
})

const discountPrice = document.querySelector('.discount-price');
const discountPriceValue = discountPrice.textContent.replace('$', '');
const result = document.querySelector('.result');
const additem = document.querySelector('.add-item');



function tototalCost () {
    additem.addEventListener('click', () => {
        if(!quantity.textContent == 0|| !quantity.textContent == ''){
         
        let resuitText = parseFloat(discountPriceValue) * parseFloat(quantity.textContent);
        result.textContent = '$' + resuitText.toFixed(2)
        }
    })

}

tototalCost()


const nameOfProduct = document.querySelector('#name');
if(result.textContent != '0') {
    nameOfProduct.textContent = document.querySelector('h2').textContent;
}

const quantityBought = document.querySelector('#purchase-quantity');


// gallery
const displayedImage = document.querySelector('#displayedImage');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let currentInageIndex = 0;
let images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'    
];

function changeImage (direction) {
    currentInageIndex += direction;

    if(currentInageIndex >= images.length) {
        currentInageIndex = 0;
    } else if (currentInageIndex < 0) {
        currentInageIndex = images.length -1;
    }
    displayedImage.src =images[currentInageIndex];
}

next.addEventListener('click', function() {changeImage(+1)});
previous.addEventListener('click', function() {changeImage(-1)});