const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
  ];
//   const modifiedCities = cities.map(city => {
//     if (city.isVisited) {
//       return { ...city, name: city.name + ' (Visitado)' };
//     }
//     return city;
//   });
//   console.log(modifiedCities);
  

const modifiedCities = cities.map(city => (city.isVisited ? { ...city, name: city.name + ' (Visitado)' } : city));
console.log(modifiedCities);