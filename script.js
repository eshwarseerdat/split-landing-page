const main = document.querySelector("main");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", (event) => {
  main.classList.add("hover-left");
});

left.addEventListener("mouseleave", (event) => {
  main.classList.remove("hover-left");
});

right.addEventListener("mouseover", (event) => {
  main.classList.add("hover-right");
});

right.addEventListener("mouseleave", (event) => {
  main.classList.remove("hover-right");
});
