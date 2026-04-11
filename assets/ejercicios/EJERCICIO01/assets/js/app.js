// Clases a importar
import { Alumno } from "./Alumno.js";
import { Banda } from "./Banda.js";
import { Perro } from "./Perro.js";

// Elementos del DOM
const inputNombreAlumno = document.getElementById("inputNombreAlumno");
const inputEdadAlumno = document.getElementById("inputEdadAlumno");
const inputCarreraAlumno = document.getElementById("inputCarreraAlumno");

const inputNombreBanda = document.getElementById("inputNombreBanda");
const inputGeneroBanda = document.getElementById("inputGeneroBanda");
const inputAlbumesBanda = document.getElementById("inputAlbumBanda");
const inputIntegrantesBanda = document.getElementById("inputIntegrantesBanda");

const inputNombrePerro = document.getElementById("inputPerro");
const inputRazaPerro = document.getElementById("inputRazaPerro");
const inputEdadPerro = document.getElementById("inputEdadPerro");
const inputColorPerro = document.getElementById("inputColorPerro");

const btnGuardarAlumno = document.getElementById("btnGuardarAlumno");
const btnGuardarBanda = document.getElementById("btnGuardarBanda");
const btnGuardarPerro = document.getElementById("btnGuardarPerro");
const mensaje = document.getElementById("resultado");


/*-------------------------------------------------------------------------------------*/
/*-------------------------------Inicio de Boton crear Alumno--------------------------*/
/*-------------------------------------------------------------------------------------*/
btnGuardarAlumno.addEventListener("click", () => {
  const datoNombreAlumno = inputNombreAlumno.value;
  const datoEdadAlumno = inputEdadAlumno.value;
  const datoCarreraAlumno = inputIntegrantesBanda.value;

  if (!datoNombreAlumno || !datoEdadAlumno || !datoCarreraAlumno) {
    mensaje.classList.remove("d-none");
    mensaje.innerHTML = `
        <div class="text-danger small fw-bold p-2 border border-danger rounded bg-light text-center">
            ⚠️ Todos los campos son obligatorios
        </div>
    `;
    return;
  }
  const nuevoAlumno = new Alumno(datoNombreAlumno, datoEdadAlumno, datoCarreraAlumno);
  nuevoAlumno.saludar(mensaje);

  inputNombreAlumno.value = "";
  inputEdadAlumno.value = "";
  inputCarreraAlumno.value = "";
});

/*-------------------------------------------------------------------------------------*/
/*-------------------------------Inicio de Boton crear Banda---------------------------*/
/*-------------------------------------------------------------------------------------*/
btnGuardarBanda.addEventListener("click", () => {
  const datoNombreBanda = inputNombreBanda.value;
  const datoGeneroBanda = inputGeneroBanda.value;
  const datoAlbumesBanda = inputAlbumesBanda.value;
  const datoIntegrantesBanda = inputIntegrantesBanda.value;

  if (!datoNombreBanda || !datoGeneroBanda || !datoAlbumesBanda || !datoIntegrantesBanda) {
    mensaje.classList.remove("d-none");
    mensaje.innerHTML = `
        <div class="text-danger small fw-bold p-2 border border-danger rounded bg-light text-center">
            ⚠️ Todos los campos son obligatorios
        </div>
    `;
    return;
  }
  const nuevaBanda = new Banda(datoNombreBanda, datoGeneroBanda, datoAlbumesBanda, datoIntegrantesBanda);
  nuevaBanda.mostrarInfo(mensaje);

  inputNombreBanda.value = "";
  inputGeneroBanda.value = "";
  inputAlbumesBanda.value = "";
  inputIntegrantesBanda.value = "";
});

/*-------------------------------------------------------------------------------------*/
/*-------------------------------Inicio de Boton crear Perro---------------------------*/
/*-------------------------------------------------------------------------------------*/
btnGuardarPerro.addEventListener("click", () => {
    const datoNombrePerro = inputNombrePerro.value;
    const datoRazaPerro = inputRazaPerro.value;
    const datoEdadPerro = inputEdadPerro.value;
    const datoColorPerro = inputColorPerro.value;

    if (!datoNombrePerro || !datoRazaPerro || !datoEdadPerro || !datoColorPerro) {
        mensaje.classList.remove("d-none");
        mensaje.innerHTML = `
            <div class="text-danger small fw-bold p-2 border border-danger rounded bg-light text-center">
                ⚠️ Todos los campos son obligatorios
            </div>
        `;
        return;
    }
    const nuevoPerro = new Perro(datoNombrePerro, datoRazaPerro, datoEdadPerro, datoColorPerro);
    nuevoPerro.mostrarInfo(mensaje);

    inputNombrePerro.value = "";
    inputRazaPerro.value = "";
    inputEdadPerro.value = "";
    inputColorPerro.value = "";
})