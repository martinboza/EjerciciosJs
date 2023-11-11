const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}
  ];
  
  const peliculaPequena = [];
  const peliculaMediana = [];
  const peliculaGrande = [];
  
  for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
      peliculaPequena.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
      peliculaMediana.push(movie);
    } else {
      peliculaGrande.push(movie);
    }
  }
  
  console.log("Peliculas Pequeñas:");
  console.log(peliculaPequena);
  console.log("Peliculas Medianas:");
  console.log(peliculaMediana);
  console.log("Peliculas Grandes:");
  console.log(peliculaGrande);
  