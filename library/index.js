const menuBtn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__list');
const navBtnLines = document.querySelectorAll('.nav__btn-line');

menuBtn.addEventListener('click', () => {
  let menuStyle = window.getComputedStyle(menu).getPropertyValue('display');
  menuToggle(menuStyle);
  menuCrossToggle(menuStyle);
});

const menuToggle = (menuStyle) => {
  if (menuStyle === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
};

const menuCrossToggle = (menuStyle) => {
  if (menuStyle == 'none') {
    navBtnLines[0].style.display = 'none';
    navBtnLines[1].style.transform = 'rotate(45deg)';
    navBtnLines[2].style.transform = 'rotate(-45deg)';
  } else {
    navBtnLines[0].style.display = 'block';
    navBtnLines[1].style.transform = 'rotate(0deg)';
    navBtnLines[2].style.transform = 'rotate(0deg)';
  }
};

menu.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'A') {
    menuToggle();
    menuCrossToggle();
  }
});
