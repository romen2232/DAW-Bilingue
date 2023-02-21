/*Importante:
El método Fetch devuelve una promesa, lo que quiere decir que podemos utilizar el método 
.then cuando la promesa sea resuelta de manera correcta y 
vamos a recibir una función con la respuesta de la petición.
*/

//PETICIÓN GET
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(respuesta => respuesta.json()) //recibimos en un objeto Response: el metodo Response.json() también devuelve una promesa
    .then(json => console.log(JSON.stringify(json))); //resolución de la promesa anterior



//PETICIÓN POST
/*fetch('https://jsonplaceholder.typicode.com/todos', 
{ 
    method: 'POST', 
    body: JSON.stringify({ name: "Taylor", surname: "Swift" }), 
    headers: { "Content-type":"application/json"}
}).
    then(response => response.json()).
    then(json => console.log(json));*/



//OTRA PETICIÓN GET: a tailor swift (si funcionara la api, claro)
/*fetch('https://jsonplaceholder.typicode.com/users/11')
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)));*/



//PETICIÓN PUT: para modificar
/*fetch('https://jsonplaceholder.typicode.com/todos', 
{ 
    method: 'PUT', 
    body: JSON.stringify({ id: 1, name: "Taylor", surname: "Swift" }), 
    headers: { "Content-type": "application/json" }
})
    .then(response => response.json()) 
    .then(json => console.log(json));*/



//PETICIÓN DELETE: para eliminar al usuario con id 10
/*fetch('https://jsonplaceholder.typicode.com/users/10',
{ 
    method: 'DELETE' 
});*/



/* ALTERNATIVA A LAS PROMESAS CON ASYNC WAIT 
* para evitar la excesiva anidacion de then
* Ojo: no es compatible con todos los navegadores
*/
/*async function getUser(name) { 
    let response = await fetch(`https://api.github.com/users/${name}`); 
    let data = await response.json();
    return data; 
}*/