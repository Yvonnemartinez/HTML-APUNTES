const estudiar= true;
console.log(estudiar);
console.log(typeof estudiar);

const trabajar=false;
console.log(trabajar);
console.log(typeof trabajar);

const estudiar2= "true";
console.log(typeof estudiar2);// dara string por las comillas en vez de boolean

// comparando booleans
console.log(estudiar==="true");//false

//*****SENTENCIAS: IF Y ELSE*****
const autenticado=false;
if(autenticado){
    console.log('puedes acceder')
    }else{
        console.log('debes autentificarte')
         }
//al ser false, por consola se muestra "debes autentificarte"


//***TERNARIO*** tiene menos código y es más moderno que if y else. El ternario solo permite dos posibilidades(true or false), solo para dos opciones, no permite la anidación como if y else

const loggin= true;
console.log(loggin ? 'puedes entrar': 'no estás autenticado'); //la ventaja del ternario es simpleza y ahorro en código, al ser true nos da="puedes entrar".  El IF se interpreta por la ?, y el else con los :

