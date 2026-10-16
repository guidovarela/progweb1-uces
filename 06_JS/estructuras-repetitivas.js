let user1 = "Marcela"
let user2 = "Juan"
let user3 = "Pedro"
let user4 = "Maria"

let users = ["Marcela", "Juan", "Pedro", "Maria"]

// mostrar una secuencia de numeros del 1 al 10
// for (variableInicio;condicion;incremento) {
    // iteracion...
for (let i = 1; i <= 10; i++) {
    // document.write(i + "<br>")
    document.body.innerHTML = document.body.innerHTML + i + "<br>"
}
// For of
for (let user of users) {
    // console.log(user)
}
// for in
for (let index in users) {
    // console.log(users[index])
}   

// While
// mostrar una secuencia de numeros del 1 al 10
let j = 1
while (j <= 10) {
    document.body.innerHTML = document.body.innerHTML + j + "<br>"
    j++
}   
// let j = 1
// Do While
do{
    document.body.innerHTML = document.body.innerHTML + j + "<br>"
    j++
}   while (j <= 10)

// foreach
users.forEach(function(user) {
    console.log(user)
});



