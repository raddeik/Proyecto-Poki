const juegos = [
  {
    nombre: "Tetris",
    url: "https://games.construct.net/3231/latest"
  },
  {
    nombre: "Flappy Bird",
    url: "https://nebezb.com/floppybird/"
  }
];

const contenedor = document.getElementById("juegos");

function mostrarJuegos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(juego => {
    contenedor.innerHTML += `
      <div class="juego">
        <h3>${juego.nombre}</h3>
        <iframe src="${juego.url}"></iframe>
      </div>
    `;
  });
}

mostrarJuegos(juegos);

// buscador
document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = juegos.filter(j =>
    j.nombre.toLowerCase().includes(texto)
  );
  mostrarJuegos(filtrados);
});
