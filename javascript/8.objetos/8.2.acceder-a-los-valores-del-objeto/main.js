const articulo={
    nombre:"Samsung",
    precio:"200",
    stock:"true",
}
console.table(articulo);//muestra por consola la tabla de las variables y sus valores

//para accerder a una sola variable de este objeto se puede hacer mediante tres formas distintas. En este caso buscamos acceder al nombre

console.log(articulo.nombre);//por consola el nombre1

//también se puede hacer con corchetes, aunque no es una forma muy usada

console.log(articulo['precio']);//devuelve solo el precio
