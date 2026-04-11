export class Alumno {
  constructor (nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;

  }

  saludar(contenedor) {
    contenedor.classList.remove("d-none");
    contenedor.innerHTML = `
      <p cvlass="mb-0">
      <strong>Hola</strong> soy <b>${this.nombre}</b>, 
      tengo <b>${this.edad}</b> años y 
      estoy cursando la carrera de <b>${this.carrera}</b>.
      </p>
    `;

    console.log(
      `Hola, soy ${this.nombre},  tengo ${this.edad} años y estoy cursando la carrera de ${this.carrera}`,
    );
  }
}
