'use strict';

const forwardingContacts = () => {
  const heroButton = document.querySelector('.hero__button');
  const orderButtons = document.querySelectorAll('.price__button');

  orderButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      document.location = '#contacts';
    });
  });

  heroButton.addEventListener('click', event => {
    event.preventDefault();

    document.location = '#contacts';
  });
};

forwardingContacts();
