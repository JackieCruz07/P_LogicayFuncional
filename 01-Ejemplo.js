const hechos=[
    {relacion:"es_humano",
    sujeto:"Juancho"},

    {relacion:"es_humano",
    sujeto:"Daniela"},

    {relacion:"estudiante",
    sujeto:"Mario"},

    {relacion:"estudiante",
    sujeto:"Yesi"},

    {relacion:"perro",
    sujeto:"Guapo"}
]

//Programacion Imperativa
const nuevoArreglo=[ ];
for(let i=0; i < hechos.length; i++) {
    if(hechos[i].
        relacion==="estudiante"){
            nuevoArreglo.push(hechos[i])
        }
}

//console.log(nuevoArreglo)

//Programacion Funcional
const datosEstudiantes=hechos.filter
(estudiante=>estudiante.
relacion==="estudiante");
//console.log(datosEstudiantes);

const datEstudiantes=hechos.find(
est=>est.relacion==="estudiante")
//console.log(datEstudiantes)

const datEst=hechos.some(es=>es.
relacion==="estudiante")
//console.log(datEst)

const nuevosDatos=hechos.map
(data=>data.relacion)
//console.log(nuevosDatos)

//regla: "Qué hara el programa si se cumple la condicion"
function EsMortal(sujeto){
    const esHumano=hechos.some(
    humano=>humano.
    relacion==="es_humano"&& humano.
    sujeto===sujeto)

    return esHumano
}
//console.log(EsMortal("Juancho"))
//console.log(EsMortal("Guapo"))

//
function EsMortal(sujeto){
    const esPerro=hechos.some(
    perro=>perro.
    relacion==="perro"&& perro.
    sujeto===sujeto)

    return esPerro
}
console.log(EsMortal("Juancho"))
console.log(EsMortal("Guapo"))

