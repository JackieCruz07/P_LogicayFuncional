const num = [1, 2, 3];
const total = num.reduce((acc, valor) => acc + valor, 0);
console.log(total);

console.log("--------------------------------");    

const frutas = ["manzana", "pera", "manzana"];

const totalFrutas = frutas.reduce((acc, fruta) => {acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

console.log(totalFrutas);

console.log("--------------------------------");

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Luis" }
];

const totalUsuarios = usuarios.reduce((acc, user) => {acc[user.id] = user.nombre;
  return acc;
}, {});

console.log(totalUsuarios);