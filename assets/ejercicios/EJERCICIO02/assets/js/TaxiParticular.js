import { TaxiPasajero } from './TaxiPasajero.js';

export class TaxiParticular extends TaxiPasajero {
    constructor(patente, marca, modelo, conductor, categoria) {
        super(patente, marca, modelo, conductor);
        this.licenciaRequerida = "B";
        this.categoria = categoria;
    }
    pintarDOM(contenedor) {
        this.prepararContenedor(contenedor);
        contenedor.innerHTML = `
        <div class="alert alert-success border-0 shadow-sm">
            <h4 class="h6 fw-bold border-bottom pb-2">Taxi Particular</h4>
            <ul class="list-unstyled mb-0">
                <li><strong>Patente:</strong> ${this.patente}</li>
                <li><strong>Vehículo:</strong> ${this.marca} ${this.modelo}</li>
                <li><strong>Conductor:</strong> ${this.conductor}</li>
                <li><strong>Licencia:</strong> ${this.licenciaRequerida}</li>
                <li><strong>Categoria:</strong> Taxi ${this.categoria}</li>
                <li><strong>Pasajeros:</strong> ${this.llevaPasajeros ? "Sí" : "No (Carga)"}</li>
            </ul>
        </div>
        `;
    }
}