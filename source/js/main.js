const navMenu = document.querySelector('.nav');
const navMenuToggleButton = document.querySelector(".nav-toggle");

console.log(navMenu);
console.log(navMenuToggleButton);

navMenuToggleButton.addEventListener('click', (e) => {
  if (navMenu.classList.contains("nav--opened")) {
    navMenu.classList.remove("nav--opened");
    navMenu.classList.add("nav--closed");
  } else {
    navMenu.classList.remove("nav--closed");
    navMenu.classList.add("nav--opened");
  }
});
