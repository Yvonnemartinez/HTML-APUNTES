const nombre= 'Yvonne ';
const apellido='Martínez';
//1º manera de concatenar con el método concatenar
console.log(nombre.concat(apellido));

//2º manera de concatenar es una mejora ECMAScript6 con Templates literals
console.log(`${nombre}${apellido}`)