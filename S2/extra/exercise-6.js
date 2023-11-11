function swap(array, index1, index2) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    } else {
        console.log("Los índices están fuera del rango del array.");
    }
    return array;
}

const miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const resultado = swap(miArray, 1, 3);

console.log(resultado);