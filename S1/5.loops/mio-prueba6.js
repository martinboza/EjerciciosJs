//La principal diferencia es que for-of puede iterar en cualquier tipo de objeto iterable, en cambio, .forEach solamente puede en arrays.

var backToTheFutureArray = [21, 10, 2015, 'Delorean'];
var backToTheFutureString = 'Dr.Emmett Brown';
 
// Iterar un Array
for (value of backToTheFutureArray) {
  console.log(value);  
}
 
backToTheFutureArray.forEach(function(value, index) {
  // podemos acceder al índice
  console.log(value, index);
});
 
 
// Iterar un String
for (value of backToTheFutureString) {
  console.log(value);  
}
 
backToTheFutureString.forEach(function(value, index) {
  console.log(value, index);
});