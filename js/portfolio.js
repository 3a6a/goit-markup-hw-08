(function (){
    const menu__btn = document.querySelector(`.menu__btn`);
    
    const mobile__menu = document.querySelector(`.mobile__menu`);
    
    menu__btn.addEventListener(`click`, () => {
    menu__btn.classList.toggle(`menu__btn--active`);
    
    mobile__menu.classList.toggle(`mobile__menu--active`);
   
    });
}());