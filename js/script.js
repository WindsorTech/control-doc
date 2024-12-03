document.addEventListener("DOMContentLoaded", () => {
  
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      // Debugging
      console.log("Hamburger clicked!");

      // Toggle menu visibility
      menu.classList.toggle("show");

      // Update ARIA attribute
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });
  } else {
    console.error("Hamburger or menu element not found.");
  }
});
