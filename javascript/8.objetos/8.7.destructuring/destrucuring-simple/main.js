l//1ºlet
et movil={
    nombre: "Samsung";
    precio: 200;
}

let movilNombre= movil.nombre;
let movilPrecio= movil.precio;

console.log(`marca del movil ${novilNombre} y su precio es de ${movilPrecio}`);

//otra forma de hacerlo ***con destructuring****: devolverá//
//entre

let{nombre,precio}= movil;
console.log(nombre);
console.log(precio);

//añadimos otra propiedad a movil, en este caso el stock
let {stock}=movil;
console.log(stock=false);// atribuimos un booleano false, que luego se puede sustitur arriba en el primer let, con el valor que se quiera xcantidades, true.. etc