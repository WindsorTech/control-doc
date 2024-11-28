// Handle form submission with a custom message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado por entrar em contato! Responderemos em breve.');
      // Optional: Clear form fields after submission
      form.reset();
    });
  }

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");

      // Toggle ARIA attributes for accessibility
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
    });
  }
});
