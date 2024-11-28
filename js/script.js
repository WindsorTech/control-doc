document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado por entrar em contato! Responderemos em breve.");
      form.reset();
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
    });
  }
});
