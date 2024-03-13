const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{cart.classList.add('.cart-active');
});

btnclose.addEventListener('click',()=>{cart.classList.close('.cart-active');
});