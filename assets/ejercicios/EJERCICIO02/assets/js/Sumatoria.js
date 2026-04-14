export class Sumatoria {
    constructor(base) {
        this.base = base;
        this.acumulado = base;
        this.paso = 1;
    }

    obtenerMensajeInicial() {
        return `Objeto creado con base: ${this.base}. Valor inicial: ${this.acumulado}`;
    }

    sumar() {
        this.acumulado += this.base;
        this.paso++;
        return `Ejecución #${this.paso}: Se suma ${this.base}. Nuevo acumulado: ${this.acumulado}`;
    }
}