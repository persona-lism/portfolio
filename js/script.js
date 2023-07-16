// Scroll Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function hamburgerMenu() {
  var menu = document.getElementById("hamburger-menu-link");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function responsiveMenu(x) {
  var animation = document.getElementById("hamburger-menu-icon");
  var menu = document.getElementById("hamburger-menu-link");
  if (responsiveWidth993px.matches) {
    // If media query matches
    menu.style.display = "none";
    animation.style.transform = "none";
  } else {
    menu.style.display = "none";
    animation.style.transform = "none";
  }
}

var responsiveWidth993px = window.matchMedia("(min-width: 993px)");

responsiveMenu(responsiveWidth993px); // Call listener function at run time
responsiveWidth993px.addListener(responsiveMenu); // Attach listener function on state changes

function hamburgerMenuAnimation() {
  var animation = document.getElementById("hamburger-menu-icon");
  if (animation.style.transform === "matrix(0, 1, 1, 0, 0, 0)") {
    animation.style.transform = "none";
  } else {
    animation.style.transform = "matrix(0, 1, 1, 0, 0, 0)";
  }
}

function addHamburgerTransition() {
  document.getElementById("hamburger-menu-link-transition1").className +=
    " transition1";
  document.getElementById("hamburger-menu-link-transition2").className +=
    " transition2";
  document.getElementById("hamburger-menu-link-transition3").className +=
    " transition3";
  document.getElementById("hamburger-menu-link-transition4").className +=
    " transition4";
}
