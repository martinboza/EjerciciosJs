/*for (var index = 0; index < array.length; index++) {
    var element = array[index];
  }
  */


//Ejemplos
for (var i = 0; i <= 5; i++)  {
console.log(i);
}

var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];
myArray.forEach(
  function (element) {
    console.log(element);
  }
);

/* Otro ejemplo */

var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

var imprime = function(element) {
  console.log(element);
}

myArray.forEach(imprime);






/*var i = 0;
for (;;) {
  if (i >= 5) {
    break;   
  }
  // Código
  i++;
  console.log(i);
}
*/


//Bucle sin todas las partes:
/*var i = 0;
for (;;) {
  if (i >= 5) {
    break;
  }
  // Código
  i++;
  console.log(i);
}
*/


/*Bucle for...of para recorrer elementos de un array
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}
*/


