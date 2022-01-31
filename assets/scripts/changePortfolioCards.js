'use strict';

const changePortfolioCards = () => {
  const portfolioButtons = document.querySelectorAll('.portfolio__button');
  const images = document.querySelectorAll('.portfolio__image');

  const changeImage = button => {
    return images.forEach((image, index) => {
      image.setAttribute('src', `./assets/img/${button.dataset.season}/${index + 1}.jpg`)
    });
  };

  const changeActiveButton = button => {
    portfolioButtons.forEach(button => {
      button.classList.remove('button_active');
    });
    button.classList.add('button_active');

    changeImage(button);
  };

    portfolioButtons.forEach(button => {
      button.addEventListener('click', () => {
      changeActiveButton(button);
      });
    });
};

changePortfolioCards();