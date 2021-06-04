// Con math se hacen las operaciones matemáticas
let total;
//esto da por consola el valor de pi
total= Math.PI;
console.log(total);

// para redondear números
total= Math.round(2.3);
console.log(total);

//redondea el 2 hacia arriba, por consola vemos 3
total=Math.round(2.5);
console.log(total);

//redondea hacia arriba con "ceil", en este caso se redondea a la siguiente cifra
total=Math.ceil(2.1);
console.log(total);

//redondeo hacia abajo con "floor", en este caso se redonde a la cifra anterior
total= Math.floor(2.9);
console.log(total);

//raíz cuadrada con "sqrt"
total= Math.sqrt(25);
console.log(total);

//convertir un número negativo en positivo con "abs", cons cambia el -185 a 185
total=Math.abs(-185);
console.log(total);

//potencias con "pow" primero ponemos el número y seguido de una coma el número al que queremos elevarlo; en este caso sería 2 elevado a 3
total=Math.pow(2,3);
console.log(total);

//con Math también se trabajan arrays de números
//en este ejemplo buscamos el número menor de este array
total= Math.min(3,2,4,5,7)
console.log(total);

//números aleatorios con el método "ramdom", nos dará un número aleatorio hasta el número 1, al ser aleatorio no hay que darle ningún valor por lo que los paréntisis estarán vacíos
total=Math.random();
console.log(total);

//aleatorio dentro de un rango distinto a 1, en este caso será un número aleatorio hasta 5

total=Math.floor(Math.random()*5);
console.log(total);