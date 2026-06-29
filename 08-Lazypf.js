//combinar programación lazy con funcional

//Definir los predicados atómicos
const llenadoTanque=Object.freeze([
    "01 Magna",
    "02 Premium",
    "03 Magna",
    "04 Premium",
    "05 Premium",
])

//Definir la regla
const esPremium=id=>id.includes("Premium")

//Definir la funcion
function* filtrarTipo(iterable,predicado){
    for(let gasolina of iterable){
        console.log("Analiza el arreglo:",gasolina)
        if(predicado(gasolina)){
            yield gasolina
        }
    }
}

//Definir la consulta
const bombaGasolina=filtrarTipo(llenadoTanque,esPremium)
console.log("primero Premium:", bombaGasolina.next().value)
console.log("segundo Premium:", bombaGasolina.next().value)
console.log("tercero Premium:", bombaGasolina.next().value)
console.log("--------------------------------------------")


