import { Taxi } from './Taxi.js';

export class TaxiCargo extends Taxi {
    constructor(patente, marca, modelo, conductor) {
        super(patente, marca, modelo, conductor);
        this.licenciaRequerida = "B";
        this.llevaPasajeros = false;
        this.tipoUnidad = "Carga General";
    }
     pintarDOM(contenedor) {
        this.prepararContenedor(contenedor);
        contenedor.innerHTML = `
        <div class="alert alert-success border-0 shadow-sm">
        <div class="alert alert-warning border-0 shadow-sm">
            <h4 class="h6 fw-bold border-bottom pb-2">Taxi de Carga</h4>
            <ul class="list-unstyled mb-0">
                <li><strong>Patente:</strong> ${this.patente}</li>
                <li><strong>Vehículo:</strong> ${this.marca} ${this.modelo}</li>
                <li><strong>Conductor:</strong> ${this.conductor}</li>
                <li><strong>Licencia:</strong> ${this.licenciaRequerida}</li>
                <li><strong>Unidad:</strong> ${this.tipoUnidad}</li>
                <li><strong>Pasajeros:</strong> ${this.llevaPasajeros ? "Sí" : "No (Solo Carga)"}</li>
            </ul>
        </div>
        `;
     }
}