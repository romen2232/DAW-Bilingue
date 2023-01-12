const map = new Map();

//Añadimos datos al map
map.set("JS", "Entorno Cliente");
map.set("PHP", "Entorno Servidor");
map.set("EiE", "Empresa e iniciativa Emprendedora");
map.set("DIW", "Diseño de interfaces web");

//Almacenamos el div
const div = document.getElementsByTagName("div")[0];

//Mostramos el tamaño del map
div.innerHTML += map.size;

div.innerHTML += `<br> <br>`;

//Mostramos los pares clave valor
display();

div.innerHTML += `<br>`;

//Mostramos las keys
for (const clave of map.keys()) {
    div.innerHTML += `${clave} <br>`;
}
div.innerHTML += `<br>`;

//Mostramos los nombres completos
for (const valor of map.values()) {
    div.innerHTML += `${valor} <br>`;
}

div.innerHTML += `<br>`;

//Si DIW existe lo eliminamos
if (map.has("DIW")) map.delete("DIW");

//Volvemos a mostrar los elementos
display();

div.innerHTML += `<br>`;

//Borramos el map entero
for (const key of map.keys()) {
    map.delete(key);
}

//Tambien se puede con map.clear();

display();

//Funcion para mostrar todos los elementos con sus pares
function display() {
    for (const key of map.entries()) {
        div.innerHTML += `${key} <br>`;
    }
}
