const saldo=1600;
const gastos=1800;

if(saldo>gastos){
    console.log('puedes pagar')
}else{
    console.log('no puedes pagar')
}

if(gastos>saldo){
    console.log('no puedes pagar')
}else{
    console.log('puedes pagar')
}

//mayor o igual a:
const saldo1=500;
const gastos1=600;
if(saldo1>=gastos1){
    console.log('puedes pagar 500')
}else{
    console.log('no puedes pagar 500')
}

//menor o igual a:
const saldo2 = 700;
const gastos2 =700;

if(saldo2<=gastos2){
    console.log('puedes pagar 700')
}else{
    console.log('no puedes pagar')
} 

//trabajamos la funcion "clicar" del hmtl
function clicar(){
    const hora=prompt('hora')
    if(hora<=12){
        console.log('buenos días');
    }else if(hora<=18){
        console.log('buenas tardes');

    }else{
        console.log('buenas noches');
    }
}