const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');

// Crear una lista ul
const ulElement = document.createElement('ul');

// Recorrer el array y crear elementos li para cada elemento del array
cars.forEach(car => {
    const liElement = document.createElement('li');
    liElement.textContent = car;
    ulElement.appendChild(liElement);
});

// Agregar la lista al div con el atributo data-function="printHere"
printHereDiv.appendChild(ulElement);