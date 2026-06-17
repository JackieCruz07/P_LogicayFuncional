// Ejercicio 3

const usuarios = [
  { nombre: "Ana", edad: 25, rol: "admin", activo: true },
  { nombre: "Carlos", edad: 17, rol: "user", activo: true },
  { nombre: "Beto", edad: 30, rol: "user", activo: false },
];

// Reglas
const esActivo = usuario => usuario.activo === true;
const esMayor = usuario => usuario.edad >= 18;
const esAdmin = usuario => usuario.rol === "admin";

// Combinaciones de Hechos
const cuentaInactiva = (usuario) => !esActivo(usuario);
const accesoSeccion = (usuario) => esMayor(usuario) && esActivo(usuario);
const usrEspecial = (usuario) => esAdmin(usuario) && !esMayor(usuario);
const puedeEditar = (usuario) => esActivo(usuario) && (esAdmin(usuario) || esMayor(usuario));

// Consultas
const correos = usuarios
 .filter(cuentaInactiva)
 .map((usuario) => usuario.nombre);

const seccion = usuarios
 .filter(accesoSeccion)
 .map((usuario) => usuario.nombre);

const especiales = usuarios
 .filter(usrEspecial)
 .map((usuario) => usuario.nombre);

const editores = usuarios
 .filter(puedeEditar)
 .map((usuario) => usuario.nombre);

console.log("Correos a cuentas deshabilitadas", correos);
console.log("Usuarios que entran a la sección:", seccion);
console.log("Usuarios especiales:", especiales);
console.log("Usuarios que editan:", editores);

console.log("------------------------------");

// Ejercicio 4

const clientes = [
  { nombre: "Luis", historialLimpio: true, ingresosEstables: true },
  { nombre: "María", historialLimpio: true, ingresosEstables: false },
  { nombre: "Jorge", historialLimpio: false, ingresosEstables: true },
];

// #Reglas
const histoBien = cliente => cliente.historialLimpio === true;
const ingreBien = cliente => cliente.ingresosEstables === true;

// Combinaciones de Hechos
const tarjetaBlack = (cliente) => histoBien(cliente) && ingreBien(cliente);
const reactivacion = (cliente) => !histoBien(cliente) || !ingreBien(cliente);
const riesgoMedio = (cliente) => ingreBien(cliente) && !histoBien(cliente);
const riesgoCritico = (cliente) => !histoBien(cliente) && !ingreBien(cliente);
const perfilSeguro = (cliente) => !riesgoCritico(cliente);

// Consultas
const listBlack = clientes
  .filter(tarjetaBlack)
  .map((cliente) => cliente.nombre);

const listReact = clientes
  .filter(reactivacion)
  .map((cliente) => cliente.nombre);

const listRiesgoMedio = clientes
  .filter(riesgoMedio)
  .map((cliente) => cliente.nombre);

const alerta = clientes
 .some(riesgoCritico);

const certificado = !clientes
 .some((cliente) => !perfilSeguro(cliente));

console.log("Clientes para tarjeta Black", listBlack);
console.log("Clientes para reactivación:", listReact);
console.log("Clientes de riesgo medio", listRiesgoMedio);
console.log("Alerta general por riesgo crítico?", alerta);
console.log("Certificación internacional de calidad?", certificado);
