 //suma de dos variables y mostrarlo en el mavegador mediante el id (demo1)del hmtl, dentro de un h2
let x=5;
let y= 2;
let resultado= x+y;
document.getElementById("demo1").innerHTML= `${resultado}`;

 
 //concatenar texto mediante id, y mostrar por el navegor
 let txt1= "Yvonne";
 let txt2= "Martinez";
 document.getElementById("demo3").innerHTML= txt1+" "+txt2;

let num1= 5+5;//10
let num2= "5"+5;//555
let resultado2= "Hello"+5;//hello5
document.getElementById("demo4").innerHTML= num1 +"<br>"+num2+"<br>"+resultado2;

//muestra por consola el tipo de dato
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof resultado2);