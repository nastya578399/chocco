let menuOpenBurger = (function (buttonClass, menuClass) {
    let button = document.querySelector(buttonClass);
    let menu = document.querySelector(menuClass);
    let body = document.querySelector('body');
  
    let _toggleMenu = function (e) {
      button.classList.toggle('button_container--active');
      menu.classList.toggle('overlay--open');
      body.classList.toggle('body-active-menu');
    }
    
  
    let addListeners = function () {
      button.addEventListener('click', _toggleMenu);
    };
  
    return {
      open: addListeners,
    };
  
  })('#toggle', '#overlay');
  
  console.log(menuOpenBurger);
  menuOpenBurger.open();
  
  