const datos = {
    nombre: "Luis",
    edad: 37,
    ciudad: "Balancán",
    intereses: ["Tecnología", "Pizza"]
};

// Ocultar propiedad "edad"
Object.defineProperty(datos, "edad", {
    enumerable: false
});

console.log(datos);

function deepFreeze(obj) {
    // Validamos que sea un objeto
    if (obj === null || typeof obj !== "object" || Object.isFrozen(obj)) {
        return obj;
    }

    // Obtener todas las propiedades
    const propiedadesObjetos = Object.getOwnPropertyNames(obj);

    // Recorrer cada propiedad del objeto
    for (const nombre of propiedadesObjetos) {
        const propiedadHijo = obj[nombre];

        // Aplicamos función recursiva
        if (propiedadHijo && typeof propiedadHijo === "object") {
            deepFreeze(propiedadHijo);
        }
    }

    // Congelar el objeto con sus hijos
    return Object.freeze(obj);
}

// Pasar el objeto a la función recursiva
const datosInmutables = deepFreeze(datos);

// Intentar modificar el objeto
datosInmutables.nombre = "Jackie"; 
datosInmutables.intereses.push("Gatos");

console.log(datosInmutables.nombre);
console.log(datosInmutables.intereses);
console.log(datos);
