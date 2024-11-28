// Placeholder for interactivity, e.g., animations or form handling.
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Obrigado por entrar em contato! Responderemos em breve.');
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});
