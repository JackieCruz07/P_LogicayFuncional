//Ejercicio 1

function* generarIds() { 
  let contador = 1; 
  while (true) {
    yield `TEC-2026-${contador}`; 
    contador++;
  }
}

const obtenerIds = generarIds();
console.log("Primer ID:", obtenerIds.next().value);
console.log("Segundo ID:", obtenerIds.next().value);

console.log("---------------------------")

//Ejercicio 2

const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

function* obtenerTodoElFeed(posts) {
    let index = 0;
    while (index < posts.length) {
        console.log("-> Procesando e indexando todos los posts en el cliente");
        yield posts.slice(index, index + 3).map(p => `<html>${p}</html>`);
        index += 3;
    }
}

const feed = obtenerTodoElFeed(dbPosts);
console.log("Primer scroll:", feed.next().value);
console.log("Segundo scroll:", feed.next().value);

console.log("---------------------------")

//Ejercicio 3

const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"];

function* buscarTodosLosErrores(logs) {
    for (let log of logs) {
        if (log.includes("500")) {
            yield log;
        }
    }
}

const detectarErrores = buscarTodosLosErrores(logsServidor);
console.log("Resultado 1:", detectarErrores.next().value);
console.log("Resultado 2:", detectarErrores.next().value);
console.log("Resultado 3:", detectarErrores.next().value);

console.log("---------------------------")

//Ejercicio 4

function* serieFibonacciLazy() {
    let secuencia = [0, 1];
    yield secuencia[0];
    yield secuencia[1];

    while (true) {
        let siguiente = secuencia[0] + secuencia[1];
        yield siguiente;

        secuencia[0] = secuencia[1];
        secuencia[1] = siguiente;
    }
}

const fibonacci = serieFibonacciLazy();
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value); 
console.log(fibonacci.next().value); 

//Ejercicio 5

console.log("---------------------------")

const preciosAlmacen = [100, 200, 300, 400, 500];

function* aplicarIvaATodo(precios) {
    for (let precio of precios) {
        console.log(`Cobrando producto: $${precio}`);
        yield precio * 1.16;
    }
}

const caja = aplicarIvaATodo(preciosAlmacen);
console.log("Total cliente 1:", caja.next().value);
console.log("Total cliente 2:", caja.next().value);