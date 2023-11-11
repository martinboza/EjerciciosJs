//Una de las diferencias es que for-of solamente puede iterar en objetos iterables, en cambio, for-in puede iterar en cualquier tipo de objeto. Otra diferencia, es que for-in devuelve las claves y for-of los valores.

var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver'];

var dieHardObj = {
  name: 'John',
	surname: 'McClane',
  age: 37
};
 
// Iterar un Array
for (value of dieHardArray) {
  console.log(value);  
}

for (key in dieHardArray) {
  console.log(key);  
}

 
// Iterar un Objeto

for (key in dieHardObj) {
  console.log(key);  
}
 
for (value of dieHardObj) {
  console.log(value);  
}