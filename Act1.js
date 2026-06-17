//Ejercicio 1

const cursos = [
  {
    titulo: "React Avanzado",
    categoria: "Desarrollo",
    esGratis: false,
    tieneCertificado: true,
  },
  {
    titulo: "Introducción a UX/UI",
    categoria: "Diseño",
    esGratis: true,
    tieneCertificado: false,
  },
  {
    titulo: "Node.js y MongoDB",
    categoria: "Desarrollo",
    esGratis: true,
    tieneCertificado: true,
  },
  {
    titulo: "Figma para Principiantes",
    categoria: "Diseño",
    esGratis: false,
    tieneCertificado: false,
  },
];

/*
//Reglas

const cursosDesarrollo=curso=>curso.
categoria==="Desarrollo";
const certificadoTrue=curso=>curso.
tieneCertificado===true;


//Combinaciones de Hechos

const desarrolloAndCertificado=curso=>
cursoDesarrollo(curso) && certificadoTrue(curso);

//Consultas
const resultado=cursos.filter(desarrolloAndCertificado)

console.log("Los cursos de desarrollo con certificado son:", resultado.map(curso=>curso.titulo))
 */

const devConCert = cursos.filter(
  (cur) => cur.categoria === "Desarrollo" && cur.tieneCertificado === true,
);

const gratisOdis = cursos.filter(
  (cur) => cur.esGratis === true || cur.categoria === "Diseño",
);

const sinCertificado = cursos.filter((cur) => cur.tieneCertificado === false);

const devBeneficio = cursos.filter(
  (cur) =>
    cur.categoria === "Desarrollo" &&
    (cur.esGratis === true || cur.tieneCertificado === true),
);

console.log("Dev + Certificado:", devConCert);
console.log("Gratis o Diseño:", gratisOdis);
console.log("Sin Certificado:", sinCertificado);
console.log("Dev + Beneficio:", devBeneficio);

console.log("-------------------------------");

//Ejercicio 2

const familia = [
  { padre: "Juan", hijo: "Luis" },
  { padre: "Juan", hijo: "Pedro" },
  { padre: "Abraham", hijo: "Juan" },
];

/*
//Reglas
const esHijo = (dato, per) => dato.hijo === per;
const esPadre = (dato, per) => dato.padre === per;

//Combinaciones de Hechos
const reglaHermanos = (p1, p2) => d1 => 
  p1 !== p2 && 
  esHijo(d1, p1) && 

const reglaAbuelo = (abu, nie) => dNie => 
  esHijo(dNie, nie) && 
  familia.some(dPad => esHijo(dPad, dNie.padre) && esPadre(dPad, abu));


//Consultas
const hnosLuisPedro = familia.some(reglaHermanos("Luis", "Pedro"));
const hnosLuisJuan = familia.some(reglaHermanos("Luis", "Juan"));
const hnosJuanPedro = familia.some(reglaHermanos("Juan", "Pedro"));

const abuAbrahamLuis = familia.some(reglaAbuelo("Abraham", "Luis"));
const abuJuanPedro = familia.some(reglaAbuelo("Juan", "Pedro"));

console.log("¿Luis y Pedro son hermanos?", hnosLuisPedro);
console.log("¿Luis y Juan son hermanos?", hnosLuisJuan);
console.log("¿Juan y Pedro son hermanos?", hnosJuanPedro);

console.log("¿Abraham es abuelo de Luis?", abuAbrahamLuis);
console.log("¿Juan es abuelo de Pedro?", abuJuanPedro);
*/

function SonHermanos(persona1, persona2) {
  if (persona1 === persona2) return false;
  return familia.some(
    (dato1) =>
      dato1.hijo === persona1 &&
      familia.some(
        (dato2) => dato2.hijo === persona2 && dato2.padre === dato1.padre,
      ),
  );
}

function EsAbuelo(abuelo, nieto) {
  return familia.some(
    (datoNieto) =>
      datoNieto.hijo === nieto &&
      familia.some(
        (datoPadre) =>
          datoPadre.hijo === datoNieto.padre && datoPadre.padre === abuelo,
      ),
  );
}

console.log("Luis y Pedro son hermanos?", SonHermanos("Luis", "Pedro"));
console.log("Luis y Juan son hermanos?", SonHermanos("Luis", "Juan"));
console.log("Juan y Pedro son hermanos?", SonHermanos("Juan", "Pedro"));

console.log("Abraham es abuelo de Luis?", EsAbuelo("Abraham", "Luis"));
console.log("Juan es abuelo de Pedro?", EsAbuelo("Juan", "Pedro"));

console.log("-------------------------------");

//Ejercicio 3

/*
//Reglas
const verificarPadre = (dato, per) => dato.padre === per;
const verificarHijo = (dato, per) => dato.hijo === per;

//Combinaciones de Hechos
const relacionPadreHijo = (padre, hijo) => dato => 
  verificarPadre(dato, padre) && verificarHijo(dato, hijo);

const filtroHijo = (hijo) => dato => verificarHijo(dato, hijo);
const filtroPadre = (padre) => dato => verificarPadre(dato, padre);


//Consultas
const ansAbrahamJuan = familia.some(relacionPadreHijo("Abraham", "Juan"));

const regLuis = familia.find(filtroHijo("Luis"));
const padreDeLuis = regLuis ? regLuis.padre : "No encontrado";

const regHijosJuan = familia.filter(filtroPadre("Juan"));
const listaHijosJuan = regHijosJuan.map(dato => dato.hijo);

console.log("¿Abraham es padre de Juan?", ansAbrahamJuan);
console.log("El padre de Luis es:", padreDeLuis);
console.log("Los hijos de Juan son:", listaHijosJuan);
*/

const esPadreJuan = familia.some(
  (dato) => dato.padre === "Abraham" && dato.hijo === "Juan",
);

const registroLuis = familia.find((dato) => dato.hijo === "Luis");

const padreLuis = registroLuis ? registroLuis.padre : "No encontrado";

const hijosJuan = familia
  .filter((dato) => dato.padre === "Juan")
  .map((dato) => dato.hijo);

console.log("Abraham es padre de Juan?", esPadreJuan);
console.log("El padre de Luis es", padreLuis);
console.log("Los hijos de Juan son", hijosJuan);