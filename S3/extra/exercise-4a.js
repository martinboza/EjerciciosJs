const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.getElementById('container');

countries.forEach(country => {
    // Crear un nuevo div
    const divElement = document.createElement('div');

    const h4Element = document.createElement('h4');
    h4Element.textContent = country.title;

    const imgElement = document.createElement('img');
    imgElement.src = country.imgUrl;
    imgElement.alt = country.title;

    divElement.appendChild(h4Element);
    divElement.appendChild(imgElement);

    container.appendChild(divElement);
});