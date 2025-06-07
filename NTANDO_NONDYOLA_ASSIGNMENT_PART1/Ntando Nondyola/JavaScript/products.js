function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const highlights = document.querySelectorAll(
    ".highlight, .why-it-matters li, .target-audience li"
  );
  const answer = document.getElementById("searchAnswer");
  let found = false;

  highlights.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const match = text.includes(input);
    item.style.display = match ? "block" : "none";
    if (match) found = true;
  });

  if (!input.trim()) {
    answer.textContent = "Please enter a keyword to search.";
  } else if (found) {
    answer.textContent = `Showing results for "${input}".`;
  } else {
    answer.textContent = `No results found for "${input}".`;
  }
}
