const navToggler = document.querySelector(".main-header .hamburger");
navToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});
const navToggle = document.querySelector("#main-head li");
  navToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("menu-open");
  });
