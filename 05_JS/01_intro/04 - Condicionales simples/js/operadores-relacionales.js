// La necesidad de respondernos preguntas y tomar decisiones es una de las tareas más comunes en la programación. Esto lo definimos con condicionales. Cuyos valores se evaluan como verdadero o falso = true o false (dato tipo booleano).

// Operadores relacionales

// > Mayor que
console.log(18 > 11)    // ✅ true
console.log(18 > 25)    // ❌ false
console.log(100 > 200)  // ❌ false
console.log(100 > 100)  // ❌ false

// < Menor que
console.log(18 < 11)    // ❌ false
console.log(18 < 25)    // ✅ true
console.log(100 < 100)  // ❌ false

// Igual que
// Siempre vamos a usar el triple igual === para comparar valores y tipo de dato
console.log(100 === 100)    // ✅ true
console.log(100 === 200)    // ❌ false
console.log(100 === "100")  // ❌ false

const user = {
    name: "Pepito",
    status: "premium2"
}

console.log(user.status === "premium")  // ❌ false
console.log(user.status === "premium2") // ✅ true

// Mayor que o igual que
console.log(100 >= 50);    // ✅ true
console.log(100 >= 100);   // ✅ true
console.log(100 >= 200);   // ❌ false

// Menor que o igual que
console.log(100 <= 50);    // ❌ false
console.log(100 <= 100);   // ✅ true
console.log(100 <= 200);   // ✅ true

// Distinto de
console.log(100 !== 100);           // ❌ false
console.log(100 !== 200);           // ✅ true
console.log("perro" !== "gato");    // ✅ true
console.log("perro" !== "perro");   // ❌ false