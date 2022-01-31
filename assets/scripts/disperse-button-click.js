'use strict';

const disperseButtonClick = () => {
  const portfolioButtons = document.querySelectorAll('.disperse-button-click')
  portfolioButtons.forEach(button => {
    button.addEventListener('click', event => {
      const x = event.pageX;
      const y = event.pageY;
    
      const buttonTop = event.target.offsetTop;
      const buttonLeft = event.target.offsetLeft;
    
      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;
    
      const circle = document.createElement('span');
      circle.classList.add('circle');
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';
    
      button.append(circle);
    
      setTimeout(() => circle.remove(), 500)
    });
  })
};

disperseButtonClick();