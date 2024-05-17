const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const images = carousel.querySelectorAll("img");
const firstImg = carousel.querySelector("img");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let firstImgWidth = firstImg.clientWidth + 14;
let page = 0;

let lvda = function () {
  carousel.style.transform = `translateX(${-firstImgWidth * page}px)`;
};

left.addEventListener("click", () => {
  if (page === 0) {
    page = images.length - 3;
    lvda();
  } else {
    page--;
    lvda();
  }
});

right.addEventListener("click", () => {
  if (page === images.length - 3) {
    page = 0;
    lvda();
  } else {
    page++;
    lvda();
  }
});
