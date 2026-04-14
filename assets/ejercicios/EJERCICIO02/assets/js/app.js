import { TaxiTradicional } from "./TaxiTradicional.js";
import { TaxiParticular } from "./TaxiParticular.js";
import { TaxiCargo } from "./TaxiCargo.js";
import { mostrarFormularioCargo, mostrarFormularioTradicional, mostrarFormularioParticular, limpiarCampos} from "./ui.js";

const divResultado = document.getElementById("resultado");

//Taxi Tradicional
document.getElementById("btnGuardarTradicional").addEventListener("click", () => {
    const p = document.getElementById("patenteTrad").value;
    const m = document.getElementById("marcaTrad").value;
    const mod = document.getElementById("modeloTrad").value;
    const c = document.getElementById("conductorTrad").value;

    if (!p || !m || !mod || !c) {
      divResultado.classList.remove("d-none");
      divResultado.innerHTML = `<div class="text-danger small fw-bold text-center">Completa todos los campos</div>`;
      return;
    }

    const taxi = new TaxiTradicional(p, m, mod, c);
    taxi.pintarDOM(divResultado);
    limpiarCampos();
});

//Taxi Particular
document.getElementById("btnGuardarParticular").addEventListener("click", () => {
    const p = document.getElementById("patentePart").value;
    const cat = document.getElementById("categoriaPart").value;
    const m = document.getElementById("marcaPart").value;
    const mod = document.getElementById("modeloPart").value;
    const c = document.getElementById("conductorPart").value;

    if (!p || !cat || !m || !mod || !c) {
      divResultado.classList.remove("d-none");
      divResultado.innerHTML = `<div class="text-danger small fw-bold text-center">Completa todos los campos</div>`;
      return;
    }

    const taxi = new TaxiParticular(p, m, mod, c, cat);
    taxi.pintarDOM(divResultado);
    limpiarCampos();
});

//Taxi de Encomiendas
document.getElementById("btnGuardarCargo").addEventListener("click", () => {
  const p = document.getElementById("patenteCargo").value;
  const m = document.getElementById("marcaCargo").value;
  const mod = document.getElementById("modeloCargo").value;
  const c = document.getElementById("conductorCargo").value;

  if (!p || !m || !mod || !c) {
    divResultado.classList.remove("d-none");
    divResultado.innerHTML = `<div class="text-danger small fw-bold text-center">Completa todos los campos</div>`;
    return;
  }

  const taxi = new TaxiCargo(p, m, mod, c);
  taxi.pintarDOM(divResultado);
  limpiarCampos(); 
});

document.getElementById("tabCargo").addEventListener("click", mostrarFormularioCargo);
document.getElementById("tabParticular").addEventListener("click", mostrarFormularioParticular);
document.getElementById("tabTradicional").addEventListener("click", mostrarFormularioTradicional);
