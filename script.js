const toggleBtn = document.querySelector(".btn-toggle");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

toggleBtn.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  mobileMenu.classList.toggle("active");
})