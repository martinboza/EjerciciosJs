const car = { Name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { Name, itv } = car;
const [year1, year2, year3] = itv;

console.log('Nombre del coche:', Name);
console.log('Años de ITV:', year1, year2, year3);
