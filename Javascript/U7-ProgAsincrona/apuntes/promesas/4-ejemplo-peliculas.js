// EJEMPLO DE PROMESAS CON THEN CATCH FINALLY

const peliculas = [ 
    { id: 1, title: "titulo 1", sinopsis: "contenido titulo1", }, 
    { id: 2, title: "titulo 2", sinopsis: "contenido titulo 2", },
 ];

 /*Necesitamos realizar una búsqueda de la información de ese Array de Objetos. 
 Para ello me creo una promesa (new Promise) a la que hay que pasar como parámetros 
 resolve y reject (o cualquier nombre, teniendo presente lo que simbolizan):
 
    - Resolve simboliza la consecución de la promesa.
    - Reject simboliza la no consecución de la promesa.

 Cuando vamos a consumir una promesa debemos de tener presentes los métodos 
 a los que se puede invocar para traernos el resultado de la acción a la que se le asignó una promesa.
    .then(): Trabajaríamos con los datos obtenidos cuando la promesa ha sido satisfecha correctamente.
    .catch(): Trabajaríamos con los datos obtenidos cuando la promesa no ha sido satisfecha.
    .finally():  Aquí se accedería siempre tanto si la promesa ha sido satisfecha como si no lo ha sido.
 */

//producimos la promesa
const buscarPeliculasId = (id) => 
    new Promise((resolve, reject) => { 
        const pelicula = peliculas.find((item) => item.id === id); 
        if (pelicula) { 
            resolve(pelicula); 
        } else { 
            reject("No se encontró el id " + id); 
        } 
}); 
// para consumir la promesa 
/*buscarPeliculasId(3)
    .then((pelicula) => console.log(pelicula)) 
    .catch((error) => console.error(error))
    .finally(console.log("Gracias por participar"));*/


//PROBLEMA - POR EJEMPLO: SI QUISIERAMOS ENCADENAR CÓDIGO DE ESTE MODO SE DIFICULTA SU COMPRENSIÓN
buscarPeliculasId(1) 
    .then((pelicula) => { 
        console.log(pelicula); 
        return buscarPeliculasId(2); 
    }) 
    .then((pelicula) => {
        console.log(pelicula); 
        return buscarPeliculasId(4); 
    }) 
    .then((pelicula) => { 
        console.log(pelicula); 
        return buscarPeliculasId(5); 
    }) 
    .catch((error) => console.error(error));

