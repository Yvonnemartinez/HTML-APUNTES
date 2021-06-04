//undefined: variable declarada pero que no tiene asignado ningún valores

let nombre;
console.log(nombre);//undefined
console.log(typeof nombre);//undefined porque al no tener valor la variable, js no puede reconocer su valor

//*NULL: a diferencia de undefined lo que si se hace es asignarle un valor null y para js el tipo de variable es object*/

let nombre1 = null;
console.log(nombre);//null
console.log(typeof nombre1);//object
