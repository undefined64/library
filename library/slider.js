const sliderLine = document.querySelector('.about__gallery');
const sliderImages = document.querySelectorAll('.about__gallery-img');
const sliderDots = document.querySelectorAll('.about__carousel-btn');

let imageWidth = sliderImages[0].offsetWidth;
let gap = parseFloat(
  window.getComputedStyle(sliderLine).getPropertyValue('gap')
);

window.addEventListener('resize', () => {
  imageWidth = sliderImages[0].offsetWidth;
  gap = parseFloat(window.getComputedStyle(sliderLine).getPropertyValue('gap'));
});

sliderDots.forEach((item, index) => {
  item.addEventListener('click', () => {
    sliderImages[0].style.marginLeft = -index * imageWidth - gap + 'px';
    if (index === 0) {
      sliderImages[0].style.marginLeft = 0;
    }
    markupDot(index);
  });
});

const markupDot = (index) => {
  sliderDots.forEach((item) => {
    item.classList.remove('about__carousel-btn_active');
  });
  sliderDots[index].classList.add('about__carousel-btn_active');
};

//swiper
