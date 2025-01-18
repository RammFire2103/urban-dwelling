"use strict";

let cards = document.querySelectorAll(".card__image");

cards.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.childNodes[3].classList[0] == "card__more") {
      item.childNodes[3].classList.remove("hide");
    } else if (item.childNodes[5].classList[0] == "card__more") {
      item.childNodes[5].classList.remove("hide");
    }
  });

  item.addEventListener("mouseout", (e) => {
    if (item.childNodes[3].classList[0] == "card__more") {
      item.childNodes[3].classList.add("hide");
    } else if (item.childNodes[5].classList[0] == "card__more") {
      item.childNodes[5].classList.add("hide");
    }
  });
});
