const container = document.getElementById("personajes-container");

async function obtenerPersonajes() {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error("Error al conectar con la API");
        
        const data = await res.json();
        container.innerHTML = data.results.map(personaje => `
             <div class="col">
            <div class="card h-100 border-info bg-dark text-white shadow">
                <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                <div class="card-body">
                    <h5 class="card-title text-warning fw-bold mb-3">${personaje.name}</h5>
                    <p class="card-text small mb-2">
                        <span class="badge ${personaje.status === " Alive" ? "bg-success" : "bg-danger"
                            }">${personaje.status}</span>
                        <span class="text-white-50 ms-1">- ${personaje.species}</span>
                    </p>

                    <p class="card-text small mb-1 text-info">
                        <strong class="text-white-50">Localización:</strong> ${personaje.location.name}
                    </p>
                    <p class="card-text small mb-1 text-info">
                        <strong class="text-white-50">Origen:</strong> ${personaje.origin.name}
                    </p>
                    <p class="card-text small mb-0 text-info">
                        <strong class="text-white-50">Género:</strong> ${personaje.gender}
                    </p>

                </div>
            </div>
        </div>
        `).join("");

    } catch (error) {
        container.innerHTML = `
            <div class="col-12 text-center p-5">
                <div class="alert alert-danger">
                    <h5>¡UuuuuuuPppppppppSsssssss!</h5>
                    <p>No se pudieron cargar los datos. Intenta recargar la página.</p>
                </div>
            </div>`;
    }
}

obtenerPersonajes();

