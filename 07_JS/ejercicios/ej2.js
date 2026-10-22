
// Muestra todos los números pares entre el 1 y el 20.
// Desafío opcional: Si el número es igual a 10, muestra junto al número el mensaje: "(Número clave encontrado)".

for (let index = 0; index < 20; index++) {
    if(index % 2 === 0){
        if(index === 10){
            // console.log("(Número clave encontrado), es "+index)
            console.log(`(Número clave encontrado): ${index}`)
        }else{
            console.log(index)
        }
    }
}