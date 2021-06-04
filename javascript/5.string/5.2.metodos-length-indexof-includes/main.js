//método length te mide los caracteres, o medir la longitud
const longitud= 'con este método cuento los caracteres des este estring';
console.log('esta cadena tiene: ',longitud.length,'caracteres');

//METODO INDEXOF, busca un elemento en específico y devuelve su posición
console.log('metodo indexOf:');
console.log(longitud.indexOf('este',0)); //busca la palabra y te especifica en que posición empieza la palabra este

//el string tiene dos palabras iguales, si queremos especificar que nos encuentre la segunda palabra, hay que especificarle la posición en la que empieza
console.log(longitud.indexOf('este',7));

//METODO INCLUDES: devolverá un booblean e indica si un elemento está o no
console.log(longitud.includes('este'));//traducen
//si la palabra no está en el string devolverá un false
console.log(longitud.includes('arriba'));