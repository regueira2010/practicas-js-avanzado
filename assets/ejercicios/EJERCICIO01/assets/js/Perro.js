export class Perro {
    constructor(nombre, raza, edad, color) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.color = color;
    }

    mostrarInfo(contenedor) {
        const edadPerro = this.edad * 7;
        contenedor.classList.remove("d-none");
        contenedor.innerHTML = `
            <div class="alert alert-warning mb-0 border-warning">
                <h4 class="alert-heading">🐶 Ficha Canina</h4>
                <p class="mb-1"><strong>Mascota:</strong> ${this.nombre}</p>
                <p class="mb-1"><strong>Raza:</strong> ${this.raza} (${this.color})</p>
                <p class="mb-0"><strong>Edad real:</strong> ${this.edad} años</p>
                <hr>
                <p class="mb-0 font-italic">En años humanos tendría aproximadamente <strong>${edadPerro} años</strong>.</p>
            </div>
        `;
    }
}