const menuBtn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__list');
const navBtnLines = document.querySelectorAll('.nav__btn-line');

menuBtn.addEventListener('click', () => {
  menuToggle();
});

const menuToggle = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
};
