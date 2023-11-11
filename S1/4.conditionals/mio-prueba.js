let accessAllowed;
let age = prompt('¿Qué edad tienes?', '');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);



let accessAllowed;
let age = prompt('¿Qué edad tienes?', '');
accessAllowed = (age > 18) ? true : false;
alert(accessAllowed);



let age = prompt('¿edad?', 18);
let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' : '¡Qué edad tan inusual!';
alert( message );



let bestMarvelCharacter = prompt('¿Mejor personaje de Marvel?', '');
(bestMarvelCharacter == 'SpiderMan') ?
   alert('¡Correcto!') : alert('Noob');