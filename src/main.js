'use strict';

const menuButton = document.querySelector('.menu');

menuButton.onclick = () => {
  document.querySelector('.nav__list').classList.toggle('navlist__active');
  menuButton.classList.toggle('menu--toggled');
};
