document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main.container");
  if (!mainContainer) return;

  // Create the search container
  const searchDiv = document.createElement("div");
  searchDiv.style.marginBottom = "20px";

  // Create input box
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search keywords (e.g., mission, livestock, contact)";
  input.style.padding = "8px";
  input.style.width = "300px";
  input.id = "searchInput";

  // Create button
  const button = document.createElement("button");
  button.textContent = "Search";
  button.disabled = true; // initially disabled
  button.style.marginLeft = "10px";
  button.id = "searchButton";

  // Result display area
  const resultDiv = document.createElement("div");
  resultDiv.style.marginTop = "15px";
  resultDiv.style.padding = "10px";
  resultDiv.style.border = "1px solid #ccc";
  resultDiv.style.minHeight = "40px";
  resultDiv.style.maxWidth = "600px";
  resultDiv.style.backgroundColor = "#f9f9f9";

  // Append input and button to searchDiv
  searchDiv.appendChild(input);
  searchDiv.appendChild(button);
  searchDiv.appendChild(resultDiv);

  // Insert the searchDiv at the very top of main container
  mainContainer.insertBefore(searchDiv, mainContainer.firstChild);

  // Enable button only when input is not empty
  input.addEventListener("input", () => {
    button.disabled = input.value.trim().length === 0;
    resultDiv.textContent = ""; // clear previous results on new input
  });

  // Keywords and answers map
  const keywordAnswers = {
    mission:
      "Our mission is to promote food security and healthy living by providing fresh, organic, and locally sourced produce through sustainable farming practices.",
    vision:
      "Our vision is to become one of the leading agro-businesses in South Africa, inspiring the next generation of tech-savvy and environmentally conscious farmers.",
    livestock:
      "We specialize in ethical cattle herding, raising healthy and sustainably farmed livestock to support local food security.",
    contact:
      "You can reach us via our Contact page or email us at contact@ntandoagriculture.co.za.",
    partnerships:
      "We have high-quality partnerships with companies committed to sustainable farming and community empowerment.",
    crops:
      "We cultivate a variety of fresh vegetables and fruit sold to local markets and retailers.",
    news: "Stay up-to-date with our latest farm activities and agricultural trends on our News page.",
    farmers:
      "We empower local farmers through collaboration, shared resources, and innovation.",
    ecommerce:
      "We are working towards future e-commerce functionality for wholesale inquiries and sales.",
  };

  // On button click, check input and show result
  button.addEventListener("click", () => {
    const query = input.value.trim().toLowerCase();
    if (query in keywordAnswers) {
      resultDiv.textContent = keywordAnswers[query];
    } else {
      resultDiv.textContent =
        "Sorry, no results found for that keyword. Please try another.";
    }
  });
});
