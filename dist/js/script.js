const burgerLines = document.querySelector('.nav__burger-wrapper');
const firstBurgerLine = document.querySelector('.burger__line--first');
const secondBurgerLine = document.querySelector('.burger__line--second');
const thirdBurgerLine = document.querySelector('.burger__line--third');
const navMenu = document.querySelector('.nav__menu');



burgerLines.addEventListener('click', function(elem) {

    if (burgerLines.getAttribute('data-active') === null) {
        firstBurgerLine.style.transform = 'rotate(44deg) translateY(11px)';
        firstBurgerLine.style.transition = '1.5s';
    
        secondBurgerLine.style.overflow = 'hidden';
        secondBurgerLine.style.transform = 'translateX(-600%)';
        secondBurgerLine.style.transition = '1.5s';
    
        thirdBurgerLine.style.transform = 'rotate(-45deg) translateY(-11px)';
        thirdBurgerLine.style.transition = '1.5s';

        navMenu.style.left = '3.5%';
        navMenu.style.transition = '1.5s';

        burgerLines.setAttribute('data-active', 'active');
    } else {
        firstBurgerLine.removeAttribute('style');
        firstBurgerLine.style.transition = '1.5s';

        secondBurgerLine.removeAttribute('style');
        secondBurgerLine.style.transition = '1.5s';

        thirdBurgerLine.removeAttribute('style');
        thirdBurgerLine.style.transition = '1.5s'

        navMenu.style.left = '-200%';
        navMenu.style.transition = '1.5s';

        burgerLines.removeAttribute('data-active');
    }
     
})