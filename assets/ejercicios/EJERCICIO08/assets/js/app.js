const container = document.getElementById("personajes-container");
const btnCargar = document.getElementById("btn-cargar");
const btnLimpiar = document.getElementById("btn-limpiar");

async function obtenerPersonajes() {
  try {
    container.innerHTML ='<div class="col-12 text-center"><h5>Cargando magia...</h5></div>';
    const response = await fetch("https://api.disneyapi.dev/character");
    if (!response.ok)
      throw new Error("No se pudo conectar con el mundo de Disney");

    const { data }  = await response.json();
    console.log(data);
    renderizarCartas(data);
  } catch (error) {
    console.error(error);
    container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-danger">Error: ${error.message}</div>
            </div>`;
  }
}

function renderizarCartas(personajes) {
  container.innerHTML = personajes
    .map(
      (p) => `
        <div class="col">
            <div class="card h-100 shadow-sm border-0">
                <img src="${p.imageUrl}" class="card-img-top" alt="${p.name}" 
                     style="height: 400px; object-fit: cover;">
                <div class="card-body">
                    <h6 class="card-title fw-bold text-primary">${p.name}</h6>
                    <p class="card-text small text-muted">
                        ${p.films.length > 0 ? `🎬 ${p.films[0]}` : "Sin películas registradas"}
                    </p>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

btnCargar.addEventListener("click", () => {
  obtenerPersonajes();
});

btnLimpiar.addEventListener("click", () => {
  container.innerHTML = "";
});
