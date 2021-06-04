//con el operador && se tienen que cumplir todas las condiciones
//acá sacará debes ser mayor de 18 años
const usuario = false;
const edad = 18; 

//acá sacará puedes darte de altar
/* const usuario = true;
const edad = 18; */

//acá indicará que debes indicar tu usuario
/* const usuario = false;
const edad = 18; */

if (usuario === true && edad >= 18) {
  console.log("puedes darte de alta");
} else if (!usuario && edad >= 18) {
  console.log("debes indicar tu usuario");
} else if (usuario === true && edad < 18) {
  console.log("debes ser mayor de 18 años");
}