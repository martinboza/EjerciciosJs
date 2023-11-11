const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
  ];
  
  let totalVentas = 0;
  
  for (const product of products) {
    totalVentas += product.sellCount;
  }
  
  console.log(`El total de ventas de todos los productos es: ${totalVentas}`);
  