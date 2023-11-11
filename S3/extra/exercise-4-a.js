const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.getElementById('container');

// Iterar sobre el array de objetos
countries.forEach(country => {
    // Crear un nuevo div
    const divElement = document.createElement('div');

    // Crear un elemento h4 para el título
    const h4Element = document.createElement('h4');
    h4Element.textContent = country.title;

    // Crear un elemento img para la imagen
    const imgElement = document.createElement('img');
    imgElement.src = country.imgUrl;
    imgElement.alt = country.title;

    // Agregar el h4 y el img al div
    divElement.appendChild(h4Element);
    divElement.appendChild(imgElement);

    // Agregar el div al contenedor en el HTML
    container.appendChild(divElement);
});