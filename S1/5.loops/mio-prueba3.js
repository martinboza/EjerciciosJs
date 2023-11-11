// //Para que sirve
// Array.from(objetoIterable[, mapeoDeElementos[, contexto]]);


//Ejemplo a partir de String
const str = "hello";
const arrayDeCaracteres = Array.from(str);
console.log(arrayDeCaracteres);


//Ejemplo a partir de un NodeList
const nodos = document.querySelectorAll('p'); 
const arrayDeParrafos = Array.from(nodos);
console.log(arrayDeParrafos);


//Ejemplo a partir de un mapeo
const numeros = [1, 2, 3, 4];
const arrayDuplicado = Array.from(numeros, num => num * 2);
console.log(arrayDuplicado);
