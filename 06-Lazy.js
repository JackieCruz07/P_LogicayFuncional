// Obtener turnos
let contador = 1;

function obtenerTurno() {
    const turno = `Turno ${contador}`
    contador++
    return turno
}

console.log(obtenerTurno())
console.log(obtenerTurno())
console.log(obtenerTurno())

//lazy

function* obtenerTurnoY() {
    let contador = 1
    while (true) {
        yield `Turno ${contador}`
        contador++
    }
}

const cajero=obtenerTurnoY()
console.log(cajero.next().value)
console.log(cajero.next().value)
console.log(cajero.next().value)

console.log("---------------------------")

//Procesador de palabras
function procesarPalabras(frase) {
  const palabras = frase.split(" ");
  const resultado = [];
  
  for (let palabra of palabras) {
    console.log(`Procesando completo: ${palabra}`);
    resultado.push(palabra.toUpperCase());
  }
  return resultado; 
}

const palabrasEscritas = procesarPalabras("Hola mundo como estas");
console.log("resultado:", palabrasEscritas[0]);

console.log("---------------------------")

//lazy
function* procesarDatos(frase) {
    const palabras=frase.split(" ")

    for(let palabra of palabras){
       console.log(`Procesando datos: ${palabra}`)
       yield palabra.toUpperCase()
    }

}

const textoLeido= procesarDatos("Hola mundo como estas")
console.log("Solo da lectura a la primera")
console.log("resultado",textoLeido.next().value)

console.log("Solo da lectura a la segunda")
console.log("resultado",textoLeido.next().value)
