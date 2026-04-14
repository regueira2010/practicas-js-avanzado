const formTra = document.getElementById("formTradicional");
const formPar = document.getElementById("formParticular");
const formCar = document.getElementById("formCargo");
const titulo = document.getElementById("tituloCard");
const tabTra = document.getElementById("tabTradicional");
const tabPar = document.getElementById("tabParticular");
const tabCar = document.getElementById("tabCargo");
const divResultado = document.getElementById("resultado");

export function limpiarCampos() {
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => (input.value = ""));
}

export function mostrarFormularioTradicional() {
  limpiarCampos();
  titulo.innerText = "Registro de Taxi Tradicional";
  tabTra.classList.add("active");
  tabPar.classList.remove("active");
  tabCar.classList.remove("active");
  formTra.classList.remove("d-none");
  formPar.classList.add("d-none");
  formCar.classList.add("d-none");
  divResultado.classList.add("d-none");
}

export function mostrarFormularioParticular() {
  limpiarCampos();
  titulo.innerText = "Registro de Taxi Particular";
  tabTra.classList.remove("active");
  tabPar.classList.add("active");
  tabCar.classList.remove("active");

  formTra.classList.add("d-none");
  formPar.classList.remove("d-none");
  formCar.classList.add("d-none");
  divResultado.classList.add("d-none");
}

export function mostrarFormularioCargo() {
  limpiarCampos();
  titulo.innerText = "Registro de Taxi Carga";
  tabTra.classList.remove("active");
  tabPar.classList.remove("active");
  tabCar.classList.add("active");

  formTra.classList.add("d-none");
  formPar.classList.add("d-none");
  formCar.classList.remove("d-none");

  divResultado.classList.add("d-none");
}
