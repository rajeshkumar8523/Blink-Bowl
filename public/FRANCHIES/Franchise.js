window.onload = function () {
  emailjs.init("Sv_27Wcdv4sOr2Zx9"); // ✅ Your actual EmailJS public key
  document.getElementById("franchiseForm").addEventListener("submit", handleFranchiseSubmit);
};

const cards = document.querySelectorAll(".service-card");
const selectedServices = [];
const nextBtn = document.getElementById("nextBtn");

function updateNextVisibility() {
  nextBtn.style.display = selectedServices.length > 0 ? "inline-block" : "none";
}

cards.forEach(card => {
  const serviceName = card.querySelector("h3")?.innerText.trim();

  const circle = document.createElement("div");
  circle.className = "select-circle";
  circle.innerHTML = `<i class="fas fa-check"></i>`;
  card.appendChild(circle);

  circle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isSelected = card.classList.toggle("selected");

    if (isSelected) {
      if (!selectedServices.includes(serviceName)) {
        selectedServices.push(serviceName);
      }
    } else {
      const index = selectedServices.indexOf(serviceName);
      if (index !== -1) selectedServices.splice(index, 1);
    }

    updateNextVisibility();
  });
});

function showForm() {
  if (selectedServices.length > 0) {
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("popupForm").style.display = "flex";
    document.getElementById("selectedServicePopup").value = selectedServices.join(", ");
  } else {
    alert("Please select at least one service.");
  }
}

function closeSuccess() {
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

async function handleFranchiseSubmit(event) {
  event.preventDefault();

  const emailData = {
    to_name: "Blink Bowl",
    from_name: document.getElementById("name").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("mobile").value,
    location: document.getElementById("location").value,
    services: document.getElementById("selectedServicePopup").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await emailjs.send("service_3ti5uys", "template_dwk55jv", emailData);
    console.log("✅ SUCCESS!", response.status, response.text);
    document.getElementById("franchiseForm").reset();
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("successMessage").style.display = "flex";
  } catch (error) {
    console.error("❌ FAILED...", error);
    alert("Submission failed. Please try again.");
  }
}


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


 function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
  }