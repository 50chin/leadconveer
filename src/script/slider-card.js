import { sliderCardList } from "./data.js";

let currentIndex = 0;

const slidersContent = document.querySelector(".sliders__content");
const paginationItems = document.querySelectorAll(".slider__ellipse");

const createCard = ({ num, title, icon, subtitle, list, text }) => {
  const box = document.createElement("div");
  box.className = "slider-box";
  box.innerHTML = `
    <h2 class="slider-box__title title">${title}</h2>
    <div class="slider-box__wrapper">
      <div class="slider-box__subtitle-block">
        <p class="slider-box__num">${num} <img src=${icon} alt="иконка"/></p>
        <p class="slider-box__subtitle title">${subtitle}</p>
      </div>
      <p class="slider-box__text text">${text}</p>
    </div>
  `;
  return box;
};

const renderCard = (index) => {
  slidersContent.innerHTML = "";
  const card = createCard(sliderCardList[index]);
  slidersContent.append(card);
};

const updatePagination = (index) => {
  paginationItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

paginationItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    currentIndex = i;
    renderCard(currentIndex);
    updatePagination(currentIndex);
  });
});

renderCard(currentIndex);
updatePagination(currentIndex);
