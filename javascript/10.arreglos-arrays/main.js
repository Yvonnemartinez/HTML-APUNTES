const colores= []
//array vacío al que se le dan los valores más adelate//

const color1={
    nombre:"rojo",
}
const color2={
    nombre: "verde",
}

const color3={
    nombre: "azul",
}
const color4={
    nombre: "morado",
}

colores.push(color1);
colores.push(color2);
colores.push(color3);
console.table(colores);

//se elimina con el método pop, que elimina el último elemento del array//
colores.pop()
console.table(colores);

//con el método shitf() se elimina el primer elemento del array
colores.shift()
console.table(colores);

//metodo splice elimina los elementos desde donde se quiere empezar a contar hasta la que se quiere borrar
colores.splice(1,2);
console.table(colores);