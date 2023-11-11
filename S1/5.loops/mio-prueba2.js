/*
// Iteración sobre Array

var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
for (const justice of justiceLeague) {
  console.log(justice);
}
*/

/*
// Iteración sobre String

var clark = 'Superman';
for (var who of clark) {
	console.log(who);
}
*/



//Ejemplo de Array
const numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
  console.log(numero);
}

//Ejemplo de String
const mensaje = "Hola";
for (const letra of mensaje) {
  console.log(letra);
}


//Ejemplo de Conjunto
const mapa = new Map
([['a', 1], ['b', 2], ['c', 3]]);
  for (const [clave, valor] of mapa) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
  }

  

  //Ejemplo de Argumentos
  function mostrarArgumentos() {
    const argsArray = Array.from(arguments);
    for (const argumento of argsArray) {
      console.log(argumento);
    }
  }
  mostrarArgumentos('Hola', 42, ['a', 'b'], { nombre: 'Ejemplo' });
  




// Iteración sobre Arguments (los argumentos/parámetros de una función) 🤯

var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
var clark = 'Clark Kent';

function crazyContainer() {
    for (var value of arguments) {
        console.log(value);
    }
}
crazyContainer(justiceLeague, 8, clark);
