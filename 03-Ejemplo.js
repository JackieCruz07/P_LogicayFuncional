//Freeze

const nombres={nombre:"jackie", rol:"admin"};
nombres.rol="user";
console.log(nombres);

console.log("--------------------------------");

const nombres2=Object.freeze({nombre:"jackie", rol:"admin"});
const nombresModificado={...nombres2, rol:"user"};
console.log(nombres2);

console.log("--------------------------------");

const calificaciones=Object.freeze([80,90,100,95]);
const sumaTotal=calificaciones.reduce((a, valor) => a + valor, 0);
const promedio=sumaTotal/calificaciones.length;
console.log(sumaTotal, promedio);