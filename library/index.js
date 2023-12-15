const menuBtn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__list');
const navBtn = document.querySelector('.nav__btn');
const navBtnLines = document.querySelectorAll('.nav__btn-line');

menuBtn.addEventListener('click', () => {
  menuToggle();
  menuCrossToggle();
});

const menuToggle = () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
};

const menuCrossToggle = () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    navBtnLines[0].style.display = 'none';
    navBtnLines[1].style.transform = 'rotate(45deg)';
    navBtnLines[2].style.transform = 'rotate(-45deg)';
    navBtn.style.transform = 'translateY(10px)';
  } else {
    navBtnLines[0].style.display = 'block';
    navBtnLines[1].style.transform = 'rotate(0deg)';
    navBtnLines[2].style.transform = 'rotate(0deg)';
    navBtnLines[2].style.transform = 'translateY(-10px)';
  }
};
