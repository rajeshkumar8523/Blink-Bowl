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

 
document.querySelector(".apply-btn").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("popupForm").style.display = "flex";
});

 

  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
  }