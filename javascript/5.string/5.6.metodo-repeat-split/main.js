//repeat permite repetir una cadena de texto, las veces que se quiera
const alumno='Maria:';
const asistencia='ok ';
console.log(asistencia.repeat(5));
console.log(`${alumno} ${asistencia}`.repeat(5));//se hace la interpolación de asistencia y alumno, y se indica la cantidad de veces que se quiere repetir
//lo ponemos en el navegador
document.querySelector('h2').innerHTML = `${alumno}${asistencia}`.repeat(5);

//método splite() me permite dividir los caracteres o palabras de un string
const curvaFrontend='html css javascript react'
console.log(curvaFrontend.split(" "));//con un espacio divide por palabras, la longitud será de 4 palabras

//splite sin espacio, separa por cada caracter. La longitus será de 25 caracteres, empezando desde el 0
console.log(curvaFrontend.split(''));
document.querySelector('p').innerHTML= `${curvaFrontend.split(" ")}`; //mostrarlo por el navegador, vemos por pantalla:html,css,javascript,react
document.querySelector('h3').innerHTML= `${curvaFrontend.split("")}`;//muestra cada caracter separado por comas, incluyendo los espacios
document.querySelector('h4').innerHTML= `${curvaFrontend}`;// se ve: "html css javascript react" no se separa con comas, porque no aplicamos split