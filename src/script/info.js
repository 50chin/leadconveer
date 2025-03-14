const infoBlock = document.querySelector(".info__right-block");
const readMoreButton = infoBlock.querySelector(".info__click-more");
const readLessButton = infoBlock.querySelector(".info__click-hidden");
const hiddenTexts = infoBlock.querySelectorAll(".info__text.hidden");

readMoreButton.addEventListener("click", function () {
  hiddenTexts.forEach((text) => text.classList.remove("hidden"));
  readMoreButton.classList.add("hidden");
  readLessButton.classList.remove("hidden");
});

readLessButton.addEventListener("click", function () {
  hiddenTexts.forEach((text) => text.classList.add("hidden"));
  readMoreButton.classList.remove("hidden");
  readLessButton.classList.add("hidden");
});
