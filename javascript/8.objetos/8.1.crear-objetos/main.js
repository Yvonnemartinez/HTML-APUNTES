// los objetos nos permiten agrupar  las variables dentro de una misma variable en vez de hacerlo de la siguiente manera:

const nombre="Huawei";
const precio=200;
const stock=true;

console.log(nombre);
console.log(precio);
console.log(stock);
//hay que sacarlos por consola una a una.

//En cambio con los objetos todas estas variables se pueden agrupar en una sola variables. A la izq tendríamos las propiedades y a la derecha los valores que reciben esas propiedades
const moviles ={
    nombre:"Samsung", 
    precio:200,
    stock:true,

}
console.table(moviles); //sacaría por consola toda la "tabla"