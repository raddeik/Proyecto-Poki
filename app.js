function openGame(url) {
  window.location.href = url;
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});
