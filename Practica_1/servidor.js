console.log("Hola mundo desde js servidor")

/* Medir el tiempo del proceso */
console.time("miProceso")

for(let i = 0; i<1000000; i++){}

console.timeEnd("miProceso")

/* Objetos tipo tabla */
let usuarios = [
    {nombre: "Eduardo", edad: 38},
    {nombre: "Edu", edad: 38},
];

console.table(usuarios)