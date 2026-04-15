const temperatura = document.getElementById("inputCelsius");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultadoTemp");

btnConvertir.addEventListener("click", () => {
  const celsius = parseFloat(temperatura.value);

  if (isNaN(celsius)) {
    resultado.classList.remove("d-none");
    resultado.innerHTML = `<span class="text-danger fw-bold">Por favor, ingresa un número válido.</span>`;
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;

  resultado.classList.remove("d-none");
  resultado.innerHTML = `
        <h4 class="h6 text-muted mb-1">Resultado:</h4>
        <p class="h3 mb-0 text-primary">${fahrenheit.toFixed(1)} °F</p>
    `;

  temperatura.value = "";
});
