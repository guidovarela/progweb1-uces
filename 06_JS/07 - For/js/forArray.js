const paises = [
    'Argentina', //0
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Perú',
    'Surinam',
    'Uruguay',
    'Venezuela',
    'México',
    'Costa Rica',
    'Cuba', //14
]
// !Metodo 1

for(let i = 0; i < paises.length; i++){

    console.log(`${i+1} - ${paises[i]}`)
} 

for(let i = paises.length-1; i >= 0; i--){
    console.log(`${paises.length - i} - ${paises[i]}`);
}

// !Metodo 2
for(let pais of paises){
    console.log(pais)
}

// !Metodo 3
paises.forEach(function(pais, indice, arrayOriginal){ //primer parametro es el valor, el indice, el arrayoriginal en ese orden
    console.log(pais, indice, arrayOriginal)
})


//Ejercicio

let paisesConA =[];
//Recorremos el array pais por pais
paises.forEach(function (pais, index){
    //Voy a evaluar si el pais tiene una letra "a" en su nombre
    //En base a esa evaluación voy a agregarlo o no a mi array paisesConA
    const tieneA = pais.toLowerCase().includes("a");
    if(tieneA){
        paisesConA.push(pais);
    }
})

//Mostrar el array
console.log(paisesConA);