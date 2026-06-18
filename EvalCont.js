// Ejercicio 2

const servicios = Object.freeze([
  {
    id: 1,
    nombre: "Autenticación",
    zona: "us-east",
    consultasPorMinuto: 12000,
    activo: true,
    tecnologias: ["Node", "Redis"],
  },
  {
    id: 2,
    nombre: "Procesamiento Pagos",
    zona: "us-west",
    consultasPorMinuto: 4500,
    activo: true,
    tecnologias: ["Java", "Spring"],
  },
  {
    id: 3,
    nombre: "Recomendaciones AI",
    zona: "us-east",
    consultasPorMinuto: 25000,
    activo: false,
    tecnologias: ["Python", "TensorFlow"],
  },
  {
    id: 4,
    nombre: "Notificaciones",
    zona: "eu-central",
    consultasPorMinuto: 8500,
    activo: true,
    tecnologias: ["Node", "RabbitMQ"],
  },
  {
    id: 5,
    nombre: "Reportes Históricos",
    zona: "us-west",
    consultasPorMinuto: 500,
    activo: false,
    tecnologias: ["Python", "MongoDB"],
  },
]);

// Reglas
const estaActivo = servicio => servicio.activo === true;
const esZonaUS = servicio => servicio.zona === "us-east" || servicio.zona === "us-west";
const esAltaCarga = servicio => servicio.consultasPorMinuto >= 10000;
const usaNode = servicio => servicio.tecnologias.includes("Node");

// Combinaciones de Hechos

const requiereMantenimientoUrgente = (servicio) =>
  !estaActivo(servicio) && esAltaCarga(servicio);

const esServicioCriticoUS = (servicio) =>
  estaActivo(servicio) && (esZonaUS(servicio) || esAltaCarga(servicio));

const migrarACloudflare = (servicio) =>
  esZonaUS(servicio) && usaNode(servicio) && !esAltaCarga(servicio);

//Consultas

const criticosUS = servicios
  .filter(esServicioCriticoUS)
  .map((servicio) => servicio.nombre);

const mantenimiento = servicios
  .filter(requiereMantenimientoUrgente)
  .map((servicio) => servicio.nombre);

const totalConsultas = servicios
  .filter(estaActivo)
  .reduce((acum, servicio) => acum + servicio.consultasPorMinuto, 0);

console.log("Críticos en US", criticosUS);
console.log("Mantenimiento Urgente", mantenimiento);
console.log("Total de consultas por min de servicios activos", totalConsultas);
