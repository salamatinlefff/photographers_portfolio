'use strict';

const changeLanguage = () => {
  const languageInputs = document.querySelectorAll('.change-language__input');
  const languageLabels = document.querySelectorAll('.change-language__label');

  const changeActiveClass = (language = localStorage.getItem('lang') || 'en') => {
    
    languageLabels.forEach(label => {
      label.classList.remove('change-language__label_active');
      if(label.attributes.for.nodeValue === language) {
        label.classList.add('change-language__label_active');
      } 
    })
  };
  changeActiveClass();

  const renderTranslate = (languages, selectLanguage) => {
    if(localStorage.getItem('lang')) {
      selectLanguage = localStorage.getItem('lang');
    }
      const elementsDataset = document.querySelectorAll('[data-i18n]');
      const Inputs = document.querySelectorAll('[data-i18n-input]');

      Inputs.forEach(input => {
        const dataAttribute = input.dataset['i18nInput'];

        input.setAttribute('placeholder', languages[selectLanguage][dataAttribute]);
      });

      elementsDataset.forEach(element => {
        const dataAttribute = element.dataset['i18n'];

        element.textContent = languages[selectLanguage][dataAttribute];
      });
  };
  
  const getTranslateData = (selectLanguage = 'en') => {
    fetch('./assets/db/db.json')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else throw new Error('Data received in error')
    })
    .then(languages => {
      renderTranslate(languages, selectLanguage);
    })
    .catch(error => console.error(error))
  };


  languageInputs.forEach(input => {
    input.addEventListener('click', () => {
      localStorage.setItem('lang', input.dataset.language)
      getTranslateData(localStorage.getItem('lang') || input.dataset.language);
      changeActiveClass(localStorage.getItem('lang') || input.dataset.language);
    });
  });
  getTranslateData();
};

changeLanguage();