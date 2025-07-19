const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('animate-slide');
});


// scripts.js
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});
