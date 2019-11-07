const hamburger = document.querySelectorAll(".hb-animate");
const elementsToShow = document.querySelectorAll(".show-on-scroll");

// animate nav hamburger
function hamburgerAnimation() {
  if (document.querySelector(".hamburger-open") === null) {
    hamburger.forEach(function(hamLine) {
      hamLine.classList.remove("hamburger-close");
      hamLine.classList.add("hamburger-open");
    });
  } else {
    hamburger.forEach(function(hamLine) {
      hamLine.classList.remove("hamburger-open");
      hamLine.classList.add("hamburger-close");
    });
  }
}

// requestAnimationFrame or a fallback for browsers that do not support
var animate =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

// animate object when visible in viewport
function showOnScroll() {
  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  animate(showOnScroll);
}

showOnScroll();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
