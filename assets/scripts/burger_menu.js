'use strict';

function burgerMenu(option) {
  const { 
    selectorButton,
    activeBurger,
    selectorMenu,
    openMenuSelector
  } = option
  
  const menu = document.querySelector(selectorMenu);
  const burgerButton = document.querySelector(selectorButton);
  const headerLinks = document.querySelectorAll('.header__link');
  const container = document.querySelector('.container');

  headerLinks.forEach(headerLink => {
    headerLink.addEventListener('click', event => {
      event.preventDefault();

      const headerLinkHref = headerLink.getAttribute('href');

      document.querySelector(headerLinkHref).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if(event.target.classList.contains('header__link')) closeMenu()
    })
  });

  const closeMenu = () => {
    burgerButton.classList.remove(activeBurger)
    menu.classList.remove(openMenuSelector)
    container.classList.remove('background-shadow')
  };
  
  menu.addEventListener('click', event => {
    if(event.target.classList.contains('nav')) closeMenu()
  });
  
  burgerButton.addEventListener('click',() => {
    burgerButton.classList.toggle(activeBurger)
    menu.classList.toggle(openMenuSelector)
    container.classList.toggle('background-shadow')
  });
};

burgerMenu({
  selectorButton: '.burger',
  activeBurger: 'burger_active',
  selectorMenu: '.nav',
  openMenuSelector: 'nav_active',
});
