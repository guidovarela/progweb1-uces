// let numeroMes = prompt("Ingrese mes de nacimiento")

// while( numeroMes < 1 || numeroMes > 12 || isNaN(numeroMes)    ) {
//     // Volver a solicitar que ingrese el mes
//     console.log("Temporada incorrecta")
//     numeroMes = prompt("Ingrese mes de nacimiento") 

// }
let numeroRandom;
let counter = 1;
do { 
    // Generar numeros aleatorios entre 0 y 100 hasta que obtenga 87
    // 0 y 0.999999
    numeroRandom = Math.random() * 100;  //0.3213123213
    // Trunco el número para dejarme la parte entera
    numeroRandom = Math.round(numeroRandom)
    console.log(counter + " - Numero obtenido aleatoriamente: " + numeroRandom)
    counter++;

} while(numeroRandom !== 87)

console.log("Obtuve el número random")





