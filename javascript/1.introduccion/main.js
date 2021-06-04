//1.probamos para qué sirve prompt, es una función para empezar a aprender
const escribeTuNombre= prompt('Cuál es tu nombre?');
//2. captura la variable y trabajo con ella (equivalente a scanner)
document.querySelector("#primer-programa").innerHTML = `${escribeTuNombre}!! has escrito tu primer hola mundo en javascript.`