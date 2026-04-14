// Seleccionamos los elementos una sola vez
const formAlu = document.getElementById("formAlumno");
const formBan = document.getElementById("formBanda");
const formPer = document.getElementById("formPerro");
const titulo = document.getElementById("tituloCard");
const tabAlu = document.getElementById("tabAlumno");
const tabBan = document.getElementById("tabBanda");
const tabPer = document.getElementById("tabPerro");

export function mostrarFormularioAlumno() {
    titulo.innerText = "Gestión de Alumnos";
    tabAlu.classList.add("active");
    tabBan.classList.remove("active");
    tabPer.classList.remove("active");
    formAlu.classList.remove("d-none");
    formBan.classList.add("d-none");
    formPer.classList.add("d-none");
}

export function mostrarFormularioBanda() {
    titulo.innerText = "Gestión de Bandas";
    tabAlu.classList.remove("active");
    tabBan.classList.add("active");
    tabPer.classList.remove("active");
    
    formAlu.classList.add("d-none");
    formBan.classList.remove("d-none");
    formPer.classList.add("d-none");
}

export function mostrarFormularioPerro() {
    titulo.innerText = "Gestión de Mascotas";
    tabAlu.classList.remove("active");
    tabBan.classList.remove("active");
    tabPer.classList.add("active");
    
    formAlu.classList.add("d-none");
    formBan.classList.add("d-none");
    formPer.classList.remove("d-none");
}