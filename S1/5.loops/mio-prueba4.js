// Definimos un objeto con los datos de una spiderman
var spiderman = {nombre: "Peter", apellido:"Parker", pais: "USA", trabajo: "SuperHeroe"} 

for (const key in spiderman) {
    console.log("Spiderman tiene un " + key + " con valor: " + spiderman[key]);
}



//Ejemplo 1
let persona = {nombre: "John", edad: 30, ciudad: "Nueva York"};

for (const propiedad in persona) {
    console.log(`La propiedad ${propiedad} tiene el valor: ${persona[propiedad]}`);
}


//Ejemplo 2

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

const propiedadBuscada = "modelo";

for (const propiedad in coche) {
    if (propiedad === propiedadBuscada) {
        console.log(`Sí, el coche tiene la propiedad ${propiedadBuscada}`);
        break;
    }
}


//Ejemplo 3
let datos = {nombre: "Alice", edad: 25, telefono: "+1234567890"};

for (const propiedad in datos) {
    if (typeof datos[propiedad] === "number") {
        console.log(`${propiedad} es un número: ${datos[propiedad]}`);
    } else if (typeof datos[propiedad] === "string") {
        console.log(`${propiedad} es una cadena: ${datos[propiedad]}`);
    }
}

let funcion = function() {
    console.log("Hola, mundo!");
};

if (typeof funcion === "function") {
    console.log("Es una función");
}

