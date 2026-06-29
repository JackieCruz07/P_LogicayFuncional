//combinar programación lazy con funcional

//Definir los prdicados atómicos
const esPar=n=>n%2===0
const multiploCinco=n=>n%5===0

//Definimos la funcion
function* filtrarNumeros(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato
        }
    }
}

function* generarNumeros(){
    let i=0
    while(true)
        yield i++
}

//Generar los numeros a traves de una variable
const numerosAleatorios=generarNumeros()

//Filtrar los numeros pares
const generarPares=filtrarNumeros(numerosAleatorios,esPar)
console.log("primero par:", generarPares.next().value)
console.log("segundo par:", generarPares.next().value)
console.log("tercero par:", generarPares.next().value)
console.log("cuarto par:", generarPares.next().value)

console.log("---------------------------")

//Filtrar los numeros multiplos de 5
const generarMultiploCinco=filtrarNumeros(numerosAleatorios,multiploCinco)
console.log("primero multiplo de 5:", generarMultiploCinco.next().value)
console.log("segundo multiplo de 5:", generarMultiploCinco.next().value)
console.log("tercero multiplo de 5:", generarMultiploCinco.next().value)
console.log("cuarto multiplo de 5:", generarMultiploCinco.next().value)