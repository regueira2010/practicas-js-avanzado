const result = document.getElementById("resultado");

// --- 1.- VALIDAR EL NUMERO INGRESADO POR EL USUARIO---
function ejecutarValidar() {
  validar_numero(callback_mensaje_validacion);
}

function validar_numero(callback) {
  const numeroIngresado = document.getElementById("inputNumero").value;
  callback(numeroIngresado);
}

function callback_mensaje_validacion(valor) {
  if (valor.trim() === "" || isNaN(valor) || valor <= 0) {
    result.innerHTML = `<span class="text-danger">Ingrese solo numeros validos mayores a cero ( 0 )</span>`;
  } else {
    result.innerHTML = `<span class="text-success">Numero válido ingresado: ${valor}</span>`;
  }
}

// --- 2.- SUMATORIA IMPARES CON 5 SEGUNDOS ---
function ejecutarSumatoriaImpar() {
  const num = parseInt(document.getElementById("inputNumero").value);
  if (isNaN(num)) return alert("Ingresa un número válido primero");

  calcular_y_avisar_despues(num, (resultado) => {
    result.innerHTML = `El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos.`;
  });
}

function calcular_y_avisar_despues(numero, callback) {
  let acumulador = 0;
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      acumulador += i;
    }
  }
  result.innerHTML = "Calculando... por favor espere 5 segundos.";
  setTimeout(() => {
    callback(acumulador);
  }, 5000);
}

// --- 3.- SUMATORIAS ---
function ejecutarSucesivas() {
  const num = parseInt(document.getElementById("inputNumero").value);
  if (isNaN(num)) return alert("Ingresa un número válido primero");

  const exito = (respTotal, n) => {
    result.innerHTML = `Las sumatorias sucesivas de ${n} es ${respTotal}.`;
  };

  const error = (respTotal) => {
    result.innerHTML = `<span class="text-warning">El resultado sobrepasa de 1000.</span><br>El resultado obtenido: ${respTotal}`;
  };

  calcular_y_avisar_dependiendo(num, exito, error);
}

function calcular_y_avisar_dependiendo(numeroIngresado, callbackExito, callbackError) {
  let total = 0;

  for (let i = 1; i <= numeroIngresado; i++) {
    let sumaParcial = 0;
    for (let j = 1; j <= i; j++) {
      sumaParcial += j;
    }
    total += sumaParcial;
  }

  if (total < 1000) {
    callbackExito(total, numeroIngresado);
  } else {
    callbackError(total);
  }
}
