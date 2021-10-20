
const headerBurger = document.querySelector('.nav__burger-wrapper');
const burgerLine = document.querySelector('.burger__line');
const navMenu = document.querySelector('.nav__menu');
const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero__text--small');
const heroNav = document.querySelector('.hero__nav');
const navMenuItem = document.querySelector('.nav__menu-item');
const animation = function() {
    if (headerBurger.getAttribute('class') === 'nav__burger-wrapper') {
        headerBurger.setAttribute('class', 'nav__burger-wrapper active')
        burgerLine.setAttribute('class', 'burger__line active')
        navMenu.setAttribute('class', 'nav__menu active')
    } else {
        headerBurger.setAttribute('class', 'nav__burger-wrapper')
        burgerLine.setAttribute('class', 'burger__line')
        navMenu.setAttribute('class', 'nav__menu')
    }
}

hero.addEventListener('click', function() {
    if (event.target === headerBurger || event.target === burgerLine) {
        animation();
    } else if (event.target === heroNav || event.target === heroText && event.target !== navMenu) {
        headerBurger.setAttribute('class', 'nav__burger-wrapper')
        burgerLine.setAttribute('class', 'burger__line')
        navMenu.setAttribute('class', 'nav__menu')
    }
})
