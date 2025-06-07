const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

const responses = {
  mission:
    "Our mission is to enhance food security and healthy living by providing high-quality, organic livestock and crops while promoting environmentally friendly farming practices.",
  vision:
    "Our vision is to become one of South Africa's leading agribusinesses and inspire a new generation of tech-savvy, eco-conscious farmers.",
  owners:
    "Ntando Nonjola is the founder and driving force behind Ntando Agriculture, dedicated to sustainable farming and community empowerment.",
  values:
    "Our core values include sustainability, community empowerment, and providing fresh, organic produce and ethically raised livestock.",
  contact:
    "You can reach us through our contact page or visit us to learn more about our work.",
  agriculture:
    "Ntando Agriculture is a proudly Black-owned agribusiness focusing on sustainable farming and organic agriculture based in Bloemfontein, South Africa.",
};

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) {
    searchResult.textContent = "Please enter a keyword to search.";
    return;
  }

  if (responses[keyword]) {
    searchResult.textContent = responses[keyword];
  } else {
    searchResult.textContent =
      "Sorry, no information found for that keyword. Try: mission, vision, owners, values, contact, agriculture.";
  }
});
