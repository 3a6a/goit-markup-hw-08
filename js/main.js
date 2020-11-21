// $('.menu__btn').on('click', function(e) {
//     e.preventDefault;
//     $(this).toggleClass('menu__btn--active');
//   });

(function (){
    const menu__btn = document.querySelector(`.menu__btn`);
    const main__section = document.querySelector(`.main__section`);
    const mobile__menu = document.querySelector(`.mobile__menu`);
    const portfoliomobile__menu = document.querySelector(`.portfoliomobile__menu`);
    menu__btn.addEventListener(`click`, () => {
    menu__btn.classList.toggle(`menu__btn--active`);
    main__section.classList.toggle(`menu__section--hiden`);
    mobile__menu.classList.toggle(`mobile__menu--active`);
    portfoliomobile__menu.classList.toggle(`portfoliomobile__menu--active`);
    });
}());