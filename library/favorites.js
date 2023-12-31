const radioButtons = document.querySelectorAll('.picker__input');
const cards = document.querySelectorAll('.card');

fetch('favorites.json')
  .then((response) => response.json())
  .then((data) => {
    allCategoriesData = data;
  });

const printBooks = (category) => {
  const categoryData = allCategoriesData[category];
  cards.forEach((card, index) => {
    card.addEventListener(
      'transitionend',
      () => {
        const cardTitle = card.querySelector('.card__title');
        const cardAuthor = card.querySelector('.card__title-author');
        const cardDescription = card.querySelector('.card__description');
        const cardImg = card.querySelector('.card__img');

        cardTitle.textContent = categoryData[index].title;
        cardAuthor.textContent = categoryData[index].author;
        cardDescription.textContent = categoryData[index].description;
        cardImg.src = categoryData[index].image;

        card.style.opacity = 1;
      },
      { once: true }
    );
    card.style.opacity = 0;
  });
};

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', (event) => {
    let pickedCategory = event.target.id;
    printBooks(pickedCategory);
  });
});
