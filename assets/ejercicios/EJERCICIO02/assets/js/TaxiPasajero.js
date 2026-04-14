import { Taxi } from './Taxi.js';

export class TaxiPasajero extends Taxi {
    constructor(patente, marca, modelo, conductor, llevaPasajeros, capacidadMaxima) {
        super(patente, marca, modelo, conductor);
        this.llevaPasajeros = true;
        this.capacidadMaxima = 4;
    }
}