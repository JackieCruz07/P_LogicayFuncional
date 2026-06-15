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
