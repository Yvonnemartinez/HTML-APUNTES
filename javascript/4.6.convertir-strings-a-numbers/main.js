const numero1="1";
console.log(typeof numero1);//indica por consola que es un string
//convertir un string a un número entero
console.log(Number.parseInt(numero1));//saca por consola en 1 pero ya como string sino como entero int

const numero2="5.2";
console.log(Number.parseFloat(numero2));//saca por consola el 5.2 pero como número decimal ya no como string, esto lo hace el parcefloat

//si los números están escritos con letras el parceint no funciona daría error e indicaría que es un string

//comprobar si un número es o no entero> booblean
const numero4= 4;
console.log(Number.isInteger(numero4));//isIntegernos dirá si es o no es un número entero//true
console.log(Number.isInteger(numero1));//false, devuelve falso, porque esta variabla está declarada como string 