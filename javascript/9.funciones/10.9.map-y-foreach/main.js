/*array de objetos*/
const alumnos=[
{nombre: "Laura", edad:16},
{nombre:"Camila", edad:14},
{nombre:"Violeta", edad:12},
{nombre:"Gabi", edad:12},
{nombre:"Miguel", edad:16},
{nombre:"Juan", edad:16},

]
console.log(alumnos.length);
console.table(alumnos);

/*creamos un array de edades*/
const alumnosEdad= alumnos.map(persona =>`${persona.edad}`);//["16", "14", "12", "12", "16", "16"] muestra algo en específico, en este caso solo la edad de cada miembro del array
//concateno edad con alumnos y con la sintaxis de punto traes el método map. Dentro de map llamo al parámetro persona, creo la sintaxis de flecha y llamo a las llaves, al objeto persona y con punto señalo a qué propiedad quiero traer por consola
console.log(alumnosEdad);

//otra forma de hacerlo:
const alumnosEdad1 = alumnos.map(function(persona){
    console.log(persona.edad);
});

//***FOR EACH**** sólo recorre las variables, las muestra, no permite hacer nada con ellas

//Nuevo array con forEach de solo los nombres, es un método que llama una función cada vez para cada elemento de la matriz
const alumnosNombre= alumnos.forEach(persona=>{
    console.log(`${persona.nombre}`);//aparece por consola la lista de los nombres, del parámetro al que denominamos "persona" que corresponde a cada objeto del array. 
})

