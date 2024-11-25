//const navLinks = document.querySelectorAll('nav-link');
const menuCloseButton = document.querySelector("#menu-close-button");
const menuOpenButton = document.querySelector('#menu-open-button');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => {
    console.log('button pressed');
    document.body.classList.remove('show-mobile-menu');
})



/*
menuCloseButton.addEventListener('click', () => {

console.log('close button pressed');
menuOpenButton.classList.remove('show-mobile-menu');
});*/