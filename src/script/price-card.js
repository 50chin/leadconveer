import { priceCardList } from "./data.js";

const priceCards = document.querySelector(".price__cards");

const createCard = ({
  subtitle,
  icon,
  title,
  price,
  description,
  textList,
}) => {
  const card = document.createElement("article");
  card.className = "price-card";
  card.innerHTML = `
 <div class="price-card__wrapper">
   <p class="price-card__subtitle subtitle">${subtitle}</p>
   <img src=${icon} alt="звездочка" />
 </div>
 <p class="price-card__title">${title} <span class="text--price">${price} ₽</span></p>
 <p class="price-card__description text">${description}</p> 
  `;

  const textBlock = document.createElement("div");
  textBlock.className = "price-card__text-block";
  textList.forEach((el) => {
    const text = document.createElement("p");
    text.className = "price-card__text text";
    text.innerHTML = `<img src=${el.icon} /> ${el.text}`;
    textBlock.append(text);
  });

  card.append(textBlock);

  const btn = document.createElement("button");
  btn.className = "price-card__btn btn";
  btn.innerHTML = "купить";
  card.append(btn);

  return card;
};

const renderCard = (data) => {
  priceCards.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    priceCards.append(card);
  });
};

renderCard(priceCardList);
