//declaramos dos variables
function miPrimeraVariable(p1,p2){
    return p1*p2;
}
//usamos el dom y llamamos al p con id de html
//damos el valor a p1 y p2 y lo mostramos por el navegador
document.getElementById("demo").innerHTML = miPrimeraVariable(4,3);