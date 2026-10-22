//**map()**: Recorre cada elemento del arreglo, ejecuta una función sobre cada uno y devuelve un **nuevo arreglo** de la misma longitud con los valores transformados por la función

const preciosOriginales = [1000,5000]; // Transformamos cada valor aplicando la fórmula 
const preciosConAumento = preciosOriginales.map(precio => precio * 1.1); 
console.log(preciosConAumento); // Resultado:

// La diferencia principal entre map() y filter() (en lenguajes como JavaScript o Python) es que map() transforma cada elemento y mantiene la misma cantidad de elementos, mientras que filter() selecciona solo los elementos que cumplen una condición y puede reducir el tamaño del array.







// map() + filter()
const productos = [ 
    { 
        nombre: "teclado", 
        precio: 50, 
        enStock: true 
    }, 
    {
        nombre: "mouse",
        precio: 20, 
        enStock: false 
    }, 
    { 
        nombre: "monitor", 
        precio: 200, 
        enStock: true 
    }
];

const nombresDisponibles = productos .filter(producto => producto.enStock)
 // 1\. Filtra solo los productos con enStock === true 
 .map(producto => producto.nombre.toUpperCase());
  // 2\. Transforma el resultado obteniendo solo el nombre en mayúsculas
//   console.log(nombresDisponibles); // Resultado: ["TECLADO", "MONITOR"]