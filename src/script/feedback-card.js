import { feedbackCardList } from "./data.js";

const feedBackCards = document.querySelector(".feedback__cards");

const createCard = ({ rating, icon, text, description }) => {
  const card = document.createElement("article");
  card.className = "feedback-card";
  card.innerHTML = `<div class="feedback-card__wrapper">
<p class="feedback-card__title">${rating}</p>
<img class="feedback-card__img" src= ${icon} alt="звездочки"/>
  </div>
  <p class="feedback-card__text text">${text}</p>
  <p class="feedback-card__description text">${description}</p>
  `;

  return card;
};

const renderCard = (data) => {
  feedBackCards.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    feedBackCards.append(card);
  });
};

renderCard(feedbackCardList);
