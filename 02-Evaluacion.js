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

const peticionesHttp = deepFreeze([
  { id: "REQ-01", metodo: "GET", ipOrigen: "192.168.1.50", latenciaMs: 45, tamanioPayloadKb: 2, payload: "SELECT * FROM users" },
  { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" }, 
  { id: "REQ-03", metodo: "GET", ipOrigen: "192.168.1.55", latenciaMs: 12, tamanioPayloadKb: 1, payload: "ping" },
  { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950, payload: "normal_profile_update" },
  { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" }, 
  { id: "REQ-06", metodo: "GET", ipOrigen: "172.16.25.40", latenciaMs: 50, tamanioPayloadKb: 500, payload: "exec MaliciousScript" } 
]);

//predicados
const esMetodoEscritura = peticion => peticion.metodo === "POST";
const esLatenciaAlta = peticion => peticion.latenciaMs >= 2000;
const esPayloadSospechoso = peticion => peticion.payload.includes("DROP") || peticion.payload.includes("SELECT") || peticion.payload.includes("MaliciousScript");

//reglas
const detectarAmenazaPotencial = peticion => esMetodoEscritura(peticion) && (esLatenciaAlta(peticion) || esPayloadSospechoso(peticion));

//funcion
function* analizadorSeguridadLazy(flujo, regla) {
  for (let peticiones of flujo) {
    if (regla(peticiones)) {
      yield peticiones;
    }
  }
}

//consultas
const amenazas = analizadorSeguridadLazy(peticionesHttp, detectarAmenazaPotencial);
const detectadas = [amenazas.next().value, amenazas.next().value];
const promedioPayload = detectadas.reduce((acc, peti) => acc + peti.tamanioPayloadKb, 0) / detectadas.length;

console.log("amenaza 1:", detectadas[0]);
console.log("amenaza 2:", detectadas[1]);
console.log("Promedio de Payload (KB):", promedioPayload);

console.log("------------------------------------")

//Ejercicio 2

const ordenesEnvio = deepFreeze([
  { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado: false },
  { id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado: true }, 
  { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado: false },
  { id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false },
  { id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado: false }, 
  { id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado: true } 
]);

//predicados
const esEnvioExpress = ordenes => ordenes.tipo === "express";
const esPaquetePesado = ordenes => ordenes.pesoKg >= 15;
const esRutaForanea = ordenes => ordenes.destino !== "Tabasco";

//reglas
const esDespachoPrioritario = ordenes => esEnvioExpress(ordenes) && (esPaquetePesado(ordenes) || esRutaForanea(ordenes));

//funcion
function* despachadorOrdenesLazy(flujo, regla) {
  for (let orden of flujo) {
    if (regla(orden)) {
      yield orden;
    }
  }
}

//consultas
const ordenesEnviar = despachadorOrdenesLazy(ordenesEnvio, esDespachoPrioritario);
const despacho = [ordenesEnviar.next().value, ordenesEnviar.next().value];
const promedioDistancia = despacho.reduce((acc, orde) => acc + orde.distanciaKm, 0) / despacho.length;

console.log("paquete 1:", despacho[0]);
console.log("paquete 2:", despacho[1]);
console.log("promedio de distancia (Km):", promedioDistancia);

