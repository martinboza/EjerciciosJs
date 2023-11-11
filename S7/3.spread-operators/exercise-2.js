const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

// Crear un nuevo array uniendo los dos arrays usando spread operator
const combinedPoints = [...pointsList, ...pointsList2];

// Imprimir el nuevo array combinado
console.log(combinedPoints);
