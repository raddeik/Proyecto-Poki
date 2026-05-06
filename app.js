const juegos = [
  {
    nombre: "Tetris",
    url: "https://games.construct.net/3231/latest",
    categoria: "puzzle"
  },
  {
    nombre: "Flappy Bird",
    url: "https://nebezb.com/floppybird/",
    categoria: "arcade"
  }
];

const contenedor = document.getElementById("juegos");

// ⭐ FAVORITOS (guardados en el navegador)
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function toggleFavorito(nombre) {
  if (favoritos.includes(nombre)) {
    favoritos = favoritos.filter(f => f !== nombre);
  } else {
    favoritos.push(nombre);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  mostrarJuegos(juegos);
}

// 🎮 Mostrar juegos
function mostrarJuegos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(juego => {
    const esFavorito = favoritos.includes(juego.nombre);

    contenedor.innerHTML += `
      <div class="juego">
        <h3>${juego.nombre}</h3>
        <button onclick="toggleFavorito('${juego.nombre}')">
          ${esFavorito ? "⭐" : "☆"}
        </button>
        <iframe src="${juego.url}"></iframe>
      </div>
    `;
  });
}

// 👇 AQUÍ MISMO PEGAS EL B
function filtrarCategoria(cat) {
  if (cat === "todas") {
    mostrarJuegos(juegos);
  } else {
    const filtrados = juegos.filter(j => j.categoria === cat);
    mostrarJuegos(filtrados);
  }
}

// 🔍 Buscador
document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  const filtrados = juegos.filter(j =>
    j.nombre.toLowerCase().includes(texto)
  );

  mostrarJuegos(filtrados);
});

// 🚀 iniciar
mostrarJuegos(juegos);
