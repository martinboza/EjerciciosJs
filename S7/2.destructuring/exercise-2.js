const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
};

const { name, race } = animalFunction();

console.log(name); // Salida: 'Bengal Tiger'
console.log(race); // Salida: 'Tiger'
