function deepFreeze(obj) {
  Object.freeze(obj)
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null 
        && typeof obj[prop] === 'object' 
        && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop])
    }
  })
  return obj
}

//Ejercicio 1
const transacciones = deepFreeze([
  { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
  { id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' }, 
  { id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
  { id: 104, tipo: 'retiro', monto: 55000, pais: 'México' }, 
  { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
  { id: 106, tipo: 'retiro', monto: 75000, pais: 'Espana' } 
]);

// predicados
const esRetiro = transaccion => transaccion.tipo === 'retiro';
const esMontoSospechoso = transaccion => transaccion.monto >= 50000;
const esZonaDeRiesgo = transaccion => transaccion.pais !== 'México';

// reglas
const alertaFraude = transaccion => esRetiro(transaccion) && (esMontoSospechoso(transaccion) || esZonaDeRiesgo(transaccion));

// funcion
function* filtrarFraude(iterable, predicado) {
  for (let transaccion of iterable) {
    if (predicado(transaccion)) {
      yield transaccion;
    }
  }
}

// Consultas
const flujoFraudes = filtrarFraude(transacciones, alertaFraude);
console.log("alerta 1", flujoFraudes.next().value);
console.log("alerta 2", flujoFraudes.next().value);

console.log("-------------------------------------------")

//Ejercicio 2
const aspirantes = deepFreeze([
  { nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true }, 
  { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true }, 
  { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false }, 
  { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true }, 
  { nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true } 
]);

const conPuntaje = aspirantes.map(aspirante => ({
  ...aspirante,
  puntajeFinal: (aspirante.examen * 0.70) + (aspirante.entrevista * 0.30)
}))

// regla
const calificaParaBeca = aspirante => aspirante.puntajeFinal >= 85 && aspirante.estudioSocioeconomico === true;

// funcion
function* filtrarBecados(iterable, predicado) {
  for (let aspirante of iterable) {
    if (predicado(aspirante)) {
      yield aspirante;
    }
  }
}

//consultas
const becados = filtrarBecados(conPuntaje, calificaParaBeca);
const listaBecados = [becados.next().value, becados.next().value]
const promedio = listaBecados.reduce((acc, e) => acc + e.puntajeFinal, 0) / listaBecados.length

console.log("Primer becado:", listaBecados[0])
console.log("Segundo becado:", listaBecados[1])
console.log("Promedio puntajes:", promedio)

console.log("-------------------------------------------")

//Ejercicio 3
const paquetes = deepFreeze([
  { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
  { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
  { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
  { tracking: 'ZA4', estado: 'Yucatán', peso: 25 }, 
  { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
  { tracking: 'ZA6', estado: 'Oaxaca', peso: 30 } 
])

// predicados
const esDestinoLocal = paquete => paquete.estado === 'Tabasco'
const esPesado = paquete => paquete.peso >= 15

// regla
const envioPrioritarioLocal = paquete => !esDestinoLocal(paquete) && esPesado(paquete)

// funcion
function* filtrarPaquetes(iterable, predicado) {
  for (let paquete of iterable) {
    if (predicado(paquete)){
        yield paquete
    }
  }
}

// consultas
const despacho = filtrarPaquetes(paquetes, envioPrioritarioLocal)
console.log("Paquete 1:", despacho.next().value)
console.log("Paquete 2:", despacho.next().value)




