const menu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");

function toggleMenu() {
  menu.classList.toggle("show");

  // Add global click listener when menu is shown
  if (menu.classList.contains("show")) {
    document.addEventListener("click", handleOutsideClick);
  } else {
    document.removeEventListener("click", handleOutsideClick);
  }
}

function handleOutsideClick(event) {
  // If click is outside both menu and toggle button
  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove("show");
    document.removeEventListener("click", handleOutsideClick);
  }
}