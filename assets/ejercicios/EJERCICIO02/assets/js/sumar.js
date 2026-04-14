import { Sumatoria } from "./Sumatoria.js";

const numeroBase = Math.floor(Math.random() * 10) + 1;
const miSumatoria = new Sumatoria(numeroBase);

const pantalla = document.getElementById("pantalla");
pantalla.innerHTML += `<div class="mb-1 text-info">> ${miSumatoria.obtenerMensajeInicial()}</div>`;

const boton = document.getElementById("btnEjecutar");
boton.addEventListener("click", () => {
  const resultado = miSumatoria.sumar();
  pantalla.innerHTML += `<div class="mb-1">> ${resultado}</div>`;
  pantalla.scrollTop = pantalla.scrollHeight;
});
