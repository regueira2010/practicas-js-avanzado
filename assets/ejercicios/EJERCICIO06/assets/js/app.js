const output = document.getElementById('log-output');


const mensajePantalla = (mensaje) => {
    console.log(mensaje);
    output.innerHTML += `<br>> ${mensaje}`;
}

// ---1: Promesa con setTimeout ---
const ejecutarSimulacionDB = () => {
    output.innerHTML = ""; 
    mensajePantalla("creando promesa");

    const miPromesa = new Promise((resolve) => {
        mensajePantalla("registrando promesa");
        mensajePantalla("esperando respuesta");
        
        setTimeout(() => {
            const persona = { 
                nombre: "Mario", 
                apellido: "Bros", 
                edad: 55, 
                ciudad: "Reino Champiñon" 
            };
            resolve(persona);
        }, 3000); 
    });

    miPromesa.then(res => {
        mensajePantalla(`RESPUESTA: ${JSON.stringify(res)}`);
    });
}

// ---2: Segundos del Sistema ---
const ejecutarValidacionSegundos = () => {
    output.innerHTML = "";
    
    const validarTiempo = new Promise((resolve, reject) => {
        const ahora = new Date();
        const seg = ahora.getSeconds();
        const horaStr = ahora.toLocaleTimeString();

        mensajePantalla(`Segundos actuales: ${seg}`);

        if (seg > 30) {
            (seg % 2 === 0) ? resolve(`Es PAR (${horaStr})`) : reject("Error: Es IMPAR");
        } else {
            (seg % 2 !== 0) ? resolve(`Es IMPAR (${horaStr})`) : reject("Error: Es PAR");
        }
    });

    validarTiempo
        .then(res => mensajePantalla(`ÉXITO: ${res}`))
        .catch(err => mensajePantalla(`RECHAZADO: ${err}`));
}

// ---3: Proceso Pesado ---
const ejecutarProcesoPesado = () => {
    output.innerHTML = "";
    mensajePantalla("creando promesa de carga");

    const proceso = new Promise((resolve) => {
        mensajePantalla("Iniciando bucle de 1.000.000.000 de iteraciones...");
             
        for (let i = 0; i < 1e9; i++) {
            // NOTA: Si colocas un clg de i muere el navegador
        } 

        resolve("Listo");
    });
    proceso.then(res => mensajePantalla(`RESPUESTA: ${res}`));
}