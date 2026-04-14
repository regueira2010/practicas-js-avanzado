import { Televisor, Consola } from "./Producto.js";

const contenedor = document.getElementById("tiendaSony");

const catalogo = [
  new Televisor("Bravia XR", "X90K", 899990, "img_tv.jpg", 65, "4K Full Array"),
  new Televisor("OLED A80K", "A80K", 1299990, "img_oled.jpg", 55, "OLED"),
  new Consola("PlayStation 5", "Slim Edition", 549990, "ps5.jpg", "1TB SSD"),
];
//console.log(catalogo)

function renderizar(lista) {
  contenedor.innerHTML = "";
  lista.forEach((prod) => {
    contenedor.innerHTML += `
    <div class="col">
        <div class="card h-100 shadow-sm border-0 overflow-hidden">
            <div class="ratio ratio-4x3 bg-white p-4">
                <img src="../img/${prod.imagen}" class="object-fit-contain w-100 h-100" alt="${prod.nombre}">
            </div>
            <div class="card-body d-flex flex-column border-top">
                <h5 class="card-title fw-bold h6 mb-1">${prod.nombre}</h5>
                <p class="card-text text-muted small mb-3">${prod.modelo}</p>
                
                <div class="mt-auto">
                    <p class="h5 fw-light mb-3">$${prod.precio.toLocaleString("es-CL")}</p>
                    <button class="btn btn-dark btn-sm w-100 py-2">Comprar ahora</button>
                </div>
            </div>
        </div>
    </div>
        `;
  });
}

renderizar(catalogo);
