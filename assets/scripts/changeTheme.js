'use strict';

const changeTheme = () => {
  const changeThemeLabel = document.querySelector('.change-theme__label');
  const pageContainer = document.querySelector('.container');
  const contactsSection = document.querySelector('.contacts');
  pageContainer.classList.add('white-theme-container')
  const defaultTheme = () => {
    if(localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'black-theme');
    };
  };
  defaultTheme();

  const changeSvgMoon = () => {
    changeThemeLabel.innerHTML = `
      <svg width="41" height="40" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4528 40C15.7066 40 10.315 37.8174 6.27098 33.8545C2.22701 29.8915 5.02421e-07 24.6074 5.02421e-07 18.9761C-0.00085731 15.0913 1.09674 11.2823 3.17098 7.97181C5.24521 4.66132 8.21494 1.97886 11.7505 0.222165C12.1143 0.0404498 12.5246 -0.032245 12.9302 0.0131555C13.3359 0.058556 13.7189 0.220041 14.0315 0.477451C14.344 0.734861 14.5723 1.07679 14.6878 1.46057C14.8033 1.84434 14.8009 2.25294 14.6809 2.63538C13.672 5.82896 13.5728 9.23201 14.3941 12.4768C15.2154 15.7216 16.9259 18.6847 19.3408 21.046C21.0739 22.757 23.136 24.1141 25.4078 25.0388C27.6796 25.9635 30.116 26.4374 32.576 26.433C34.4579 26.4345 36.3292 26.1578 38.1269 25.6125C38.5172 25.4948 38.9342 25.4924 39.3258 25.6056C39.7175 25.7188 40.0665 25.9425 40.3291 26.2488C40.5918 26.5552 40.7566 26.9306 40.8029 27.3282C40.8492 27.7257 40.775 28.1279 40.5895 28.4843C38.7969 31.9492 36.0597 34.8596 32.6817 36.8923C29.3036 38.9251 25.4169 40.0008 21.4528 40V40ZM11.6763 3.31431C8.93463 4.94908 6.66986 7.24958 5.10105 9.99327C3.53225 12.737 2.71252 15.831 2.72115 18.9761C2.72115 29.0982 11.1241 37.3333 21.4528 37.3333C24.6621 37.3418 27.8193 36.5384 30.619 35.001C33.4187 33.4636 35.7662 31.2441 37.4343 28.5573C35.8413 28.9186 34.2114 29.1007 32.5762 29.1C29.7587 29.1053 26.9682 28.5628 24.3661 27.5041C21.764 26.4453 19.4021 24.8913 17.417 22.9319C14.8381 20.4094 12.9578 17.2845 11.9533 13.8522C10.9489 10.4199 10.8536 6.79329 11.6763 3.31481V3.31431Z" fill="currentColor"/>
      `
  };

  const changeSvgSoon = () => {
    changeThemeLabel.innerHTML = `
      <svg width="45" height="45" viewBox="0 0 45 45"xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8374 17.2125C23.9499 17.2125 25.0375 17.5424 25.9625 18.1605C26.8875 18.7786 27.6085 19.6571 28.0342 20.6849C28.46 21.7127 28.5714 22.8437 28.3543 23.9349C28.1373 25.026 27.6015 26.0283 26.8149 26.815C26.0282 27.6016 25.0259 28.1374 23.9348 28.3544C22.8436 28.5715 21.7126 28.4601 20.6848 28.0343C19.657 27.6086 18.7785 26.8876 18.1604 25.9626C17.5423 25.0376 17.2124 23.95 17.2124 22.8375C17.2143 21.3462 17.8075 19.9166 18.862 18.8621C19.9165 17.8076 21.3461 17.2144 22.8374 17.2125ZM22.8374 14.4C21.1686 14.4 19.5373 14.8949 18.1498 15.822C16.7622 16.7491 15.6808 18.0669 15.0422 19.6086C14.4036 21.1504 14.2365 22.8469 14.562 24.4836C14.8876 26.1203 15.6912 27.6237 16.8712 28.8037C18.0512 29.9837 19.5546 30.7873 21.1913 31.1129C22.828 31.4384 24.5245 31.2713 26.0663 30.6327C27.608 29.9941 28.9258 28.9127 29.8529 27.5251C30.7801 26.1376 31.2749 24.5063 31.2749 22.8375C31.2749 20.5997 30.386 18.4536 28.8036 16.8713C27.2213 15.2889 25.0752 14.4 22.8374 14.4Z" fill="currentColor"/>
            <path d="M7.58521 9.58078L9.57364 7.59094L14.504 12.5213L12.5155 14.5097L7.58521 9.58078Z" fill="currentColor"/>
            <path d="M2.8125 21.1008H9.84375V23.9133H2.8125V21.1008Z" fill="currentColor"/>
            <path d="M7.58521 35.4333L12.5155 30.503L14.504 32.4928L9.57364 37.4217L7.58521 35.4333Z" fill="currentColor"/>
            <path d="M21.0938 35.1633H23.9062V42.1945H21.0938V35.1633Z" fill="currentColor"/>
            <path d="M30.4973 32.4928L32.4858 30.503L37.4161 35.4333L35.4276 37.4217L30.4973 32.4928Z" fill="currentColor"/>
            <path d="M35.1562 21.1008H42.1875V23.9133H35.1562V21.1008Z" fill="currentColor"/>
            <path d="M30.4973 12.5213L35.4276 7.59094L37.4161 9.58078L32.4858 14.5097L30.4973 12.5213Z" fill="currentColor"/>
            <path d="M21.0938 2.81953H23.9062V9.85078H21.0938V2.81953Z" fill="currentColor"/>
            </svg>
      `
  };

  const addClassesChangeTheme = () => {
    document.body.classList.add('white-theme');
    pageContainer.classList.add('white-theme-container');
    contactsSection.classList.add('contacts-white-theme');
  };

  const removeClassesChangeTheme = () => {
    document.body.classList.remove('white-theme');
    pageContainer.classList.remove('white-theme-container');
    contactsSection.classList.remove('contacts-white-theme');
  };

  const whatTheme = () => {
    let currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'black-theme') {
      removeClassesChangeTheme();
      changeSvgSoon();
      
    } else if (currentTheme === 'white-theme') {
      addClassesChangeTheme();
      changeSvgMoon();
    } 
  };
  whatTheme();

  changeThemeLabel.addEventListener('click', () => {
    if(!document.body.classList.contains('white-theme')) {
      addClassesChangeTheme();
      changeSvgMoon();
      localStorage.setItem('theme', 'white-theme')
    } else {
      removeClassesChangeTheme();
      changeSvgSoon();
      localStorage.setItem('theme', 'black-theme')
    }
  })
};

changeTheme();