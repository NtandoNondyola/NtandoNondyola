// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation using JS (in addition to HTML5)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields.");
    e.preventDefault();
  } else if (isNaN(phone)) {
    alert("Phone number must be numeric only.");
    e.preventDefault();
    throw new Error("Invalid phone input: must be numeric.");
  }
});

// AJAX form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch(this.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => alert("Form submitted successfully!"))
    .catch((error) => alert("An error occurred."));
});

// Scroll to map and zoom in
document
  .getElementById("viewLocationBtn")
  .addEventListener("click", function () {
    const mapSection = document.getElementById("map");
    mapSection.scrollIntoView({ behavior: "smooth" });
    if (window.mapInstance) {
      mapInstance.setZoom(16);
    }
  });

// Initialize Google Map with two markers
function initMap() {
  const mainLocation = { lat: -29.114601, lng: 26.215431 }; // 118 Henry St, Bloemfontein
  const secondLocation = {
    lat: -29.112342834472656,
    lng: 26.206714630126953,
  }; // Romagnola Cattle Breeders Society

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: mainLocation,
  });

  window.mapInstance = map;

  new google.maps.Marker({
    position: mainLocation,
    map: map,
    title: "Ntando Agriculture - 118 Henry St, Bloemfontein",
  });

  new google.maps.Marker({
    position: secondLocation,
    map: map,
    title: "Romagnola Cattle Breeders Society",
  });
}

window.initMap = initMap;
