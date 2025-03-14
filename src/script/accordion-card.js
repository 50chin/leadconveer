import { accordionCardList } from "./data.js";

const accordionBlock = document.querySelector(".questions__accordion-block");

const createCard = ({ question, answer }) => {
  const card = document.createElement("article");
  card.className = "accordion-card";
  card.innerHTML = `
  <button class="accordion-card__btn">${question}</button>
  <div class="accordion-card__text-block">
  <p class="accordion-card__text text">${answer}</p>
  </div>
  `;

  return card;
};

const renderCard = (data) => {
  accordionBlock.innerHTML = "";
  data.forEach((el) => {
    const card = createCard(el);
    accordionBlock.append(card);
  });
};

renderCard(accordionCardList);

const accordionBtn = document.querySelectorAll(".accordion-card__btn");

console.log(accordionBtn);

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    this.classList.toggle("accordion-card__btn-active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
