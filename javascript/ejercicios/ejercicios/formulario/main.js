enviarAlerta = () => {
    let dato= document.getElementsByName('texto')
    [0].value;
    alert(dato);
}
//llamamos a una función "enviar alerta", capturamos los inputs del html designados como texto, y capturamos la información de la posición "0" del array que es el input de usuario
enviarAlerta = () => {
    let dato= document.getElementsByName('direccion')
    [1].value;//Si empieza a recorrer desde la posición 1, que en este caso sería la dirección 2, la posición 0 sería el primer input de dirección
    alert(dato);
}