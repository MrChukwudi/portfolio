let search = document.querySelector(".search");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
    input.focus();
  }
});
