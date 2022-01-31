'use strict';

const bubbleClickButton = () => {
  const animationBubble = event => {
    event.preventDefault();
  
    event.target.classList.remove('animate');
    event.target.classList.add('animate');
  
    setTimeout(function(){
      event.target.classList.remove('animate');
    },700);
  };
  
  const buttons = document.querySelectorAll('.animation-button-click');
  buttons.forEach(button => {
    button.addEventListener('click', animationBubble)
  });
};

bubbleClickButton();