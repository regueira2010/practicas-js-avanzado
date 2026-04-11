export class Banda {
    constructor(nombre, genero, integrantes, albumes) {
        this.nombre = nombre;
        this.genero = genero;
        this.integrantes = integrantes.split(',').map(i => i.trim());
        this.albumes = albumes.split(',').map(a => a.trim());
    }

    mostrarInfo(contenedor) {
        contenedor.classList.remove("d-none");
        
        const listaIntegrantes = this.integrantes.map(i => `<li class="list-group-item py-1">${i}</li>`).join('');
        const listaAlbumes = this.albumes.map(a => `<span class="badge bg-secondary me-1">${a}</span>`).join('');

        contenedor.innerHTML = `
            <div class="card border-success">
                <div class="card-body">
                    <h4 class="card-title text-success">${this.nombre}</h4>
                    <p class="text-muted small">${this.genero}</p>
                    
                    <h6>Integrantes:</h6>
                    <ul class="list-group list-group-flush mb-3">
                        ${listaIntegrantes}
                    </ul>

                    <h6>Discografía:</h6>
                    <div>${listaAlbumes}</div>
                </div>
            </div>
        `;
    }
}