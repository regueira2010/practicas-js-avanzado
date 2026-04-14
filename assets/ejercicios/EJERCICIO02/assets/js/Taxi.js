export class Taxi {
    constructor(patente, marca, modelo, conductor) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.conductor = conductor;
    }
    prepararContenedor(contenedor) {
        contenedor.classList.remove("d-none");
        contenedor.innerHTML = ""; 
    }
}

