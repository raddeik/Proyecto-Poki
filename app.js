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

function toggleFavorite(name, url, image) {

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.find(game => game.name === name);

  if (exists) {
    favorites =
      favorites.filter(game => game.name !== name);
  } else {
    favorites.push({ name, url, image });
  }

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  loadFavorites();
}

function loadFavorites() {

  const favoritesDiv =
    document.getElementById("favorites");

  favoritesDiv.innerHTML = "";

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach(game => {

    favoritesDiv.innerHTML += `
      <div class="card"
        onclick="openGame('${game.url}')">

        <img src="${game.image}">
        <h3>${game.name}</h3>

      </div>
    `;
  });
}

loadFavorites();
