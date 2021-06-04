function menuBoton(){
    console.log('funciona el boton cuando hago click')
    let ancla=document.getElementsByClassName('nav-enlace');
    for(let i = 0; i< ancla.length; i++){
        ancla[i].classList.toggle('desaparecer');
    }
}