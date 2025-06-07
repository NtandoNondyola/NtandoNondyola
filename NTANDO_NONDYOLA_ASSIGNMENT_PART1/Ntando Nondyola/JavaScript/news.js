const searchInput = document.getElementById("searchInput");
const searchAnswer = document.getElementById("searchAnswer");
const newsItems = document.querySelectorAll("#newsList li, #eventsList li");

// Filter list items as you type
searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  newsItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "list-item" : "none";
  });
});

// Keyword search logic
function handleSearch() {
  const keyword = searchInput.value.trim().toLowerCase();
  let response = "";

  if (keyword.includes("livestock") || keyword.includes("cattle")) {
    response =
      "Ntando Agriculture has expanded its livestock operations to include new cattle breeds for improved farming productivity.";
  } else if (keyword.includes("award")) {
    response =
      "We received the Community Empowerment Award in January 2025 for our contributions to local agriculture.";
  } else if (keyword.includes("expo") || keyword.includes("free state")) {
    response =
      "We will be attending the Free State Agricultural Expo on 25 April 2025 to showcase our progress and connect with partners.";
  } else if (keyword.includes("event") || keyword.includes("tour")) {
    response =
      "We host educational farm tours and participate in events that promote sustainable farming practices.";
  } else if (keyword.includes("partnership")) {
    response =
      "In February 2025, we partnered with local farmers to promote eco-friendly farming techniques.";
  } else if (keyword === "") {
    response = "";
  } else {
    response =
      "No direct results found for that keyword. Try something like 'livestock', 'expo', or 'award'.";
  }

  searchAnswer.textContent = response;
}
