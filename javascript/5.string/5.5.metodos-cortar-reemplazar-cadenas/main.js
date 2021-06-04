//Método para reemplazar una cadena de texto
const articulos= 'Móvil Huawei';
//si el cliente deja de tener esta MediaStreamTrackAudioSourceNode, no hay quue crear otra ConstantSourceNode, se reemplaza con "replace"
console.log(articulos.replace('Huawei', 'Samsung')); //en consola ya no se vería "huawei" vemos diréctamente el nuevo nombre que se le ha dado.


//método slice() para extraer una parte de la cadena de texto, se puede elegir desde donde hasta donde se quiere extraer
console.log(articulos.slice(2, 7));//vil H
console.log(articulos);