const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("toggle");
  document.querySelector(".openMenu").classList.toggle("toggle");
  document.querySelector(".closeMenu").classList.toggle("toggle");
});
closeMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("toggle");
  document.querySelector(".openMenu").classList.toggle("toggle");
  document.querySelector(".closeMenu").classList.toggle("toggle");
});
