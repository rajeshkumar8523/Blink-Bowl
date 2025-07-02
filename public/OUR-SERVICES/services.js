const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});


const menu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");

function toggleMenu() {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    toggleBtn.textContent = "✖";
    document.addEventListener("click", handleOutsideClick);
  } else {
    toggleBtn.textContent = "☰";
    document.removeEventListener("click", handleOutsideClick);
  }
}

function handleOutsideClick(event) {
  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove("show");
    toggleBtn.textContent = "☰";
    document.removeEventListener("click", handleOutsideClick);
  }
}


// Optional: Reset on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove("show");
    toggleBtn.textContent = "☰";
  }
});


const text = "Our Services";
const heading = document.getElementById("animatedHeading");

heading.innerHTML = ""; // Clear

[...text].forEach((char, i) => {
  const span = document.createElement("span");

  // Handle space character
  if (char === " ") {
    span.innerHTML = "&nbsp;"; // Render space properly
  } else {
    span.textContent = char;
    span.style.animationDelay = `${ i * 0.06 }s`;
  }

  span.classList.add("letter");
  heading.appendChild(span);
});
