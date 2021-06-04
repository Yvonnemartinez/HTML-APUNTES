const numeros=["uno","dos","tres","cuatro","cinco"]
console.table(numeros);
//para agregar un elemento más 
numeros[6]="siete";
console.table(numeros);
//las formas anteriores no son dinamicas
//el método push: arregla el elemento al final del array y sin necesidad de conocer cuantos elementos hay en el array
numeros.push("ocho")
console.table(numeros);