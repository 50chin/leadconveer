import { advantageCardList } from "./data.js";

const advantageWrapper = document.querySelector(".advantage__wrapper");

const createCard = ({ subtitle, text, img }) => {
  const card = document.createElement("article");
  card.className = "advantage-card";
  card.innerHTML = `
  <div class="advantage-card__text-block">
<h3 class="advantage-card__subtitle subtitle">${subtitle}</h3>
<p class="advantage-card__text text">${text}</p>
</div>
<img class="advantage-card__img" src=${img} alt="картинка"/>
  `;

  return card;
};

const renderCard = (data) => {
  advantageWrapper.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    advantageWrapper.append(card);
  });
};

renderCard(advantageCardList);
