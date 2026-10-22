// **filter()**: Evalúa cada elemento del arreglo con una función que retorna un valor booleano (`true` o `false`) y devuelve un **nuevo arreglo** que contiene únicamente los elementos que aprobaron dicha condición

// La diferencia principal entre map() y filter() (en lenguajes como JavaScript o Python) es que map() transforma cada elemento y mantiene la misma cantidad de elementos, mientras que filter() selecciona solo los elementos que cumplen una condición y puede reducir el tamaño del array.

const numeros = [16,45,76,23,1,23,6,90]; // Filtramos solo los elementos mayores a 50 
const mayoresA50 = numeros.filter(numero => numero > 50); 
console.log(mayoresA50); 
console.log(numeros)