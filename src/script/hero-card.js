import { heroCardList } from "./data.js";

const heroCards = document.querySelector(".hero__cards");

const createCard = ({ title }) => {
  const card = document.createElement("article");
  card.className = "hero-card";

  card.innerHTML = `<h3 class= "hero-card__title">${title}</h3>`;

  return card;
};

const renderCard = (data) => {
  heroCards.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    heroCards.append(card);
  });
};

renderCard(heroCardList);
