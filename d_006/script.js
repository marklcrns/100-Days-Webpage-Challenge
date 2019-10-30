const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu li");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
