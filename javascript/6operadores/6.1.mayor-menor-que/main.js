const numero1=50;
const numero2="50";
const numero3=70;
 //operador mayor que:
 console.log(numero1 > numero3);  // false
 console.log(numero3 > numero1); //true

 //operador menor que:
 console.log(numero1 < numero3); //true
 console.log(numero3 < numero1);//false

//comparar valor siempre con triple igual que es el comparador estricto, antes de decir si es true o false revisa que el tipo de dato a comparar sea el mismo
console.log(numero1===numero2);

console.log(numero1===parseInt(numero2));
//convertimos numero2 en entero, porque está en string

//compara una cadena de texto, por ejemplo para saber si un usuario se loguea correctamente
const password= "admin";
const compruebaTuPassword= "Admin";
console.log(password != compruebaTuPassword); //false