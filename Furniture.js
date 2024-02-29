let iconCart=document.querySelector('.icon-cart');
let closechart=document.querySelector('.close');
let body=document.querySelector('body');


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')


    closechart.addEventListener('click',(){
        body.classList.toggle('showCart')

    })
})