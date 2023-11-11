
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

// car1.name = 'Renault';
// car1.basePrice = 25000;
car1.finalPrice =  car1.basePrice + globalBasePrice;

// car2.name = 'Mazda';
// car2.basePrice = 35000;
car2.finalPrice = car2.basePrice + globalBasePrice;

// console.log('La marca BMW m&m ahora es: ' + car1.name);
// console.log('La marca Chevrolet Corbina ahora es: ' + car2.name);
console.log('El valor actualizado del precio final (variable globalBasePrice) ahora     es: ' + globalBasePrice);
console.log(`Valor actualizado de ${car1.name} a cambiado a ${car1.finalPrice}`);
console.log(`Valor actualizado de ${car2.name} a cambiado a ${car2.finalPrice}`);


    


// console.log('Nuevo valor de finalPrice para car1 es: ' + car1.finalPrice);
// console.log('Nuevo valor de finalPrice para car2 es: ' + car2.finalPrice);






//car1.finalPrice = car1.basePrice + globalBasePrice;
//car2.finalPrice = car2.basePrice + globalBasePrice;

// console.log("Valor actualizado de globalBasePrice: " + globalBasePrice);
// console.log("Nuevo valor de finalPrice para car1: " + car1.finalPrice);
// console.log("Nuevo valor de finalPrice para car2: " + car2.finalPrice);