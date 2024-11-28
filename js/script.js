// Placeholder for interactivity, e.g., animations or form handling.
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Obrigado por entrar em contato! Responderemos em breve.');
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
