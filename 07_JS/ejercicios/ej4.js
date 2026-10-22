// Utiliza el método de array correspondiente para agregar un nuevo estudiante al final de la lista.

const estudiantes = ["Ana", "Carlos", "Federico", "Lucía", "María"];

let nuevoEstudiante = prompt("ingresar nuevo estudiante")

//  version malas practicas
// let newIndice= estudiantes.length
// estudiantes[newIndice]=nuevoEstudiante

console.log(estudiantes.push(nuevoEstudiante))


// Utiliza el método .forEach() para recorrer el array y mostrar cada nombre en mayúsculas precedido por su posición (índice), por ejemplo: "0: ANA".

estudiantes.forEach(function(estudiante, indice) {
    // template strings
    console.log(`${indice}: ${estudiante.toUpperCase()}`);
    // console.log("Indice Nro: "+indice+", el nombre es: "+estudiante.toUpperCase())
    
});

