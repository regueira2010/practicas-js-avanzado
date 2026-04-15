/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
const inputPalabra = document.getElementById("palabraRepetir");
const inputCantidad = document.getElementById("cantidadRepetir");
const btnEjecutar = document.getElementById("btnEjecutar");
const areaResultado = document.getElementById("resultadoRepeticion");

btnEjecutar.addEventListener("click", () => {
  const palabra = inputPalabra.value.trim();
  const cantidad = parseInt(inputCantidad.value);

  if (palabra === "" || isNaN(cantidad) || cantidad <= 0) {
    areaResultado.classList.remove("d-none");
    areaResultado.innerHTML = `<span class="text-danger small">Ingresa datos válidos.</span>`;
    return;
  }

  let resultadoFinal = "";
  for (let i = 0; i < cantidad; i++) {
    resultadoFinal += palabra + " ";
  }

  areaResultado.classList.remove("d-none");
  areaResultado.textContent = resultadoFinal;
});

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

const inputColor = document.getElementById("colorPicker");
const btnColor = document.getElementById("btnAplicarColor");
const cajaTexto = document.getElementById("textoParaColorear");

btnColor.addEventListener("click", () => {
  cajaTexto.style.backgroundColor = inputColor.value;
});

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const btnCalcular = document.getElementById("btnCalcular");
const areaCalculos = document.getElementById("areaCalculos");
const listaOp = document.getElementById("listaOperaciones");
const txtTotal = document.getElementById("sumaTotal");

btnCalcular.addEventListener("click", () => {
  const n1 = parseFloat(input1.value);
  const n2 = parseFloat(input2.value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, ingresa ambos números.");
    return;
  }
  const suma = n1 + n2;
  const resta = n1 - n2;
  const multi = n1 * n2;
  const divi = n2 !== 0 ? n1 / n2 : 0;

  const totalResultados = suma + resta + multi + divi;

  areaCalculos.classList.remove("d-none");

  listaOp.innerHTML = `
        <p class="mb-1">${n1} + ${n2} = ${suma}</p>
        <p class="mb-1">${n1} - ${n2} = ${resta}</p>
        <p class="mb-1">${n1} * ${n2} = ${multi}</p>
        <p class="mb-1">${n1} / ${n2} = ${divi.toFixed(2)}</p>
    `;

  txtTotal.innerHTML = `La suma de los resultados es ${totalResultados.toFixed(2)}`;
});

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/
const inputCadena = document.getElementById("inputCadena");
const btnInvertir = document.getElementById("btnInvertir");
const divResultado = document.getElementById("resultadoInversion");
const txtInvertido = document.getElementById("textoInvertido");

btnInvertir.addEventListener("click", () => {
  const cadenaOriginal = inputCadena.value.trim();

  if (cadenaOriginal === "") {
    divResultado.classList.remove("d-none");
    txtInvertido.innerHTML = `<span class="text-danger small">Por favor, ingresa un texto.</span>`;
    return;
  }

  const cadenaInvertida = cadenaOriginal.split("").reverse().join("");
  divResultado.classList.remove("d-none");
  txtInvertido.innerText = cadenaInvertida;
});
