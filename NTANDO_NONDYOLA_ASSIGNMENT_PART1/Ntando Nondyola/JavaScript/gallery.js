// Create the lightbox container once
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".gallery-image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.innerHTML = ""; // Clear previous content
    lightbox.classList.add("active");

    const img = document.createElement("img");
    img.src = image.dataset.full;
    img.alt = image.alt;

    const caption = document.createElement("p");
    caption.textContent = image.alt;

    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "center";
    wrapper.appendChild(img);
    wrapper.appendChild(caption);

    lightbox.appendChild(wrapper);
  });
});

// Close lightbox when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
