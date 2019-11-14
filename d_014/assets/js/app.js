// YouTube image slider video tutorial: https://www.youtube.com/watch?v=KcdBOoK3Pfw&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=3&pbjreload=1
0;
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// counter to navigate images
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button Listeners
nextBtn.addEventListener("click", () => {
  // fallback if next btn where clicked rapidly which wont trigger transitionend when it reached the end of carousel loop
  if (counter >= carouselImages.length - 1) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  // fallback if next btn where clicked rapidly which wont trigger transitionend when it reached the end of carousel loop
  if (counter <= 0) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
