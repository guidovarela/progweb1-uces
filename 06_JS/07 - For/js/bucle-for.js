// Realizar un console.log x cantidad de veces incrementando el valor en 1 por iteración

/* for(let counter = 1 ; counter <= 100 ; counter++){
    console.log("Iteración número " + counter)
}

for(let counter = 100 ; counter >= 1 ; counter--){
    console.log("Iteración número " + counter)
} */


/* Realizar un script que pida un número positivo >=0  y empezando desde 1 me indique todos los números uno por uno los cuales sean divisores por 3  */

let numero = prompt("Ingrese un número");
if(numero >= 1)
{
    for(let i = 1 ; i <= numero ; i++){
        if(i % 3 === 0){
            /* console.log("El " + i + " es divisible por 3"); */
            console.log(`El número ${i} es divisible por 3`); // Alternativa de concatenación
        }
    }
} else{ 
    alert("Ingrese un dato válido");
}
    

/* 
En while:

let counter = 1;
while(counter <= 100){
    console.log("Iteración número: " + counter);
    counter++;
}
*/