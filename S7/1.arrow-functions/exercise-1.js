const suma = (a = 10, b = 5) => {
    console.log(a + b);
};

suma();
suma(7); // Salida: 12 (7 + 5)
suma(3, 8); // Salida: 11 (3 + 8)
