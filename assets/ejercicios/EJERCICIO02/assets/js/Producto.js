export class Producto {
    constructor(nombre, modelo, precio, imagen) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
    }
}


export class Televisor extends Producto {
    constructor(nombre, modelo, precio, imagen, pulgadas, tecnologia) {
        super(nombre, modelo, precio, imagen);
        this.pulgadas = pulgadas;
        this.tecnologia = tecnologia; 
        this.categoria = "Televisores";
    }
}


export class Consola extends Producto {
    constructor(nombre, modelo, precio, imagen, almacenamiento) {
        super(nombre, modelo, precio, imagen);
        this.almacenamiento = almacenamiento;
        this.categoria = "Consolas";
    }
}