let left = document.querySelector(".left");
let rigth = document.querySelector(".rigth");
let container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
rigth.addEventListener("mouseenter", () => {
  container.classList.add("hover-rigth");
});
rigth.addEventListener("mouseleave", () => {
  container.classList.remove("hover-rigth");
});
