import { aboutCardList } from "./data.js";

const aboutCards = document.querySelector(".about__cards-bottom");

const createCard = ({ icon, title, text }) => {
  const card = document.createElement("article");
  card.className = "about-card";
  card.innerHTML = `
  <img src=${icon} alt = "иконка"/>
  <p class="about-card__title text">${title}</p>
  <p class="about-card__text text">${text}</p>
  `;

  return card;
};

const renderCard = (data) => {
  aboutCards.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    aboutCards.append(card);
  });
};

renderCard(aboutCardList);
