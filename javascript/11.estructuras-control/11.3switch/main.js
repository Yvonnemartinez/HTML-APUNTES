//switch> para espicificar qué bloque del código se ejecutará en caso de que se cumpla la condición
const formaPago= prompt('elige la forma de pago:metalico, credito, paypal o débito')
switch(formaPago){
    case 'metalico': pagar();
    break;
    case 'credito':
        console.log(`has elegido pagar con ${formaPago}`);
    break;
    case 'paypal': 
    console.log(`has elegido pagar con ${formaPago}`);
    break;
    case 'debito': 
    console.log(`has elegido pagar con ${formaPago}`);
    break;
    default:
        console.log('Debes elegir una forma de pago')
}

function pagar(){
    console.log('pagando...')
}