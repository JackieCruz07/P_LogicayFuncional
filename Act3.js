// Ejercicio 5

const transacciones = [
  { id: 1, tipo: 'deposito', monto: 10000 },
  { id: 2, tipo: 'retiro', monto: 6000 },
  { id: 3, tipo: 'retiro', monto: 1500 },
  { id: 4, tipo: 'retiro', monto: 8000 }
];

// Reglas
const retiro = transaccion => transaccion.tipo === 'retiro';
const montoAlto = transaccion => transaccion.monto > 5000;
//const tarifaMulta = transaccion => transaccion.monto * 0.05;

// Combinaciones de Hechos
const transaccionRiesgosa = transaccion => retiro(transaccion) && montoAlto(transaccion);
const generarMulta = transaccion => ({
  ...transaccion,
  multa: transaccion.monto * 0.05
});

//const generarMulta = transaccion => ({...transaccion, 
// multa: transaccion.monto * 0.05});

// Consultas
const retirosAltos = transacciones.filter(transaccionRiesgosa);
const multas = retirosAltos.map(generarMulta);
const recaudo = multas.reduce((total, transaccion) => total + transaccion.multa, 0);


console.log("Retiros altos", retirosAltos);
console.log("Transacciones con multa", multas);
console.log("Total recaudado", recaudo);