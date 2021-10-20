const burgerLines = document.querySelector('.nav__burger-wrapper');
const firstBurgerLine = document.querySelector('.burger__line--first');
const secondBurgerLine = document.querySelector('.burger__line--second');
const thirdBurgerLine = document.querySelector('.burger__line--third');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelector('.nav__menu-item');



document.addEventListener('click', function() {

    if (event.target === navItem || event.target === burgerLines || 
    event.target === firstBurgerLine || event.target === secondBurgerLine || event.target === thirdBurgerLine) {
        
        firstBurgerLine.style.transform = 'rotate(44deg) translateY(11px)';
        firstBurgerLine.style.transition = '1.5s';
    
        secondBurgerLine.style.overflow = 'hidden';
        secondBurgerLine.style.transform = 'translateX(-600%)';
        secondBurgerLine.style.transition = '1.5s';
    
        thirdBurgerLine.style.transform = 'rotate(-45deg) translateY(-11px)';
        thirdBurgerLine.style.transition = '1.5s';

        navMenu.style.left = '3.5%';
        navMenu.style.transition = '1.5s';

        
        
    } else {
        console.log(event.target);

        firstBurgerLine.removeAttribute('style');
        firstBurgerLine.style.transition = '1.5s';

        secondBurgerLine.removeAttribute('style');
        secondBurgerLine.style.transition = '1.5s';

        thirdBurgerLine.removeAttribute('style');
        thirdBurgerLine.style.transition = '1.5s'

        navMenu.style.left = '-200%';
        navMenu.style.transition = '1.5s';

        
    }
     
})