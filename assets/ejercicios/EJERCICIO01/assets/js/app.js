import { Alumno } from "./Alumno.js";

const inputNombre = document.getElementById("inputNombreAlumno");
const inputEdad = document.getElementById("inputEdadAlumno");
const inputCarrera = document.getElementById("inputCarreraAlumno");
const btnIniciar = document.getElementById("btnIniciar");
const respDOM = document.getElementById("resultado");

/* class Alumno {
  constructor(nombre, edad, carrera) {
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
} */

btnIniciar.addEventListener("click", () => {
  const datoNombre = inputNombre.value;
  const datoEdad = inputEdad.value;
  const datoCarrera = inputCarrera.value;

  if (!datoNombre || !datoEdad || !datoCarrera) {
    respDOM.classList.remove("d-none");
    respDOM.innerHTML = `
        <div class="text-danger small fw-bold p-2 border border-danger rounded bg-light text-center">
            ⚠️ Todos los campos son obligatorios
        </div>
    `;
    return;
  }
  const nuevoAlumno = new Alumno(datoNombre, datoEdad, datoCarrera);
  nuevoAlumno.saludar(respDOM);

  inputNombre.value = "";
  inputEdad.value = "";
  inputCarrera.value = "";
});
