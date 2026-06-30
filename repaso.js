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

console.log("-------------------")

//repaso lazypf
const numeros = [5, 12, 8, 21, 30];

// Predicados o reglas
const esPar = num => num % 2 === 0;
const esMayor10 = num => num > 10;
const esMenor20 = num => num < 20;

// combinacion
const cumpleCondicion = num => esPar(num) && esMayor10(num);
const menor20 = num => esPar(num) && esMenor20(num);

// Funcion
function* filtrar(iterable, predicado) {
  for (let elemento of iterable) {
    if (predicado(elemento)) {
      yield elemento;
    }
  }
}

// consulta
const resultado = filtrar(numeros, cumpleCondicion);
const resultMenor = filtrar(numeros, menor20)

console.log("primer par", resultado.next().value);
console.log("segundo par", resultado.next().value);

console.log("-------------------")

console.log("primer par que es menor a 20", resultMenor.next().value)