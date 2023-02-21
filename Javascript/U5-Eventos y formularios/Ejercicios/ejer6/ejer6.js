

/* 
* PEQUEÑO CAMBIO AL EJEMPLO DE HUGO PARA QUE FUNCIONE: 
* INICIALIZAMOS LAS IMÁGENES A 200 DE ANCHO
*/

//Guardamos contenedor
var contenedor = document.querySelector(".gallery-container");
//Cogemos las imágenes del documento y le ponemos tamaño
const imagenes=document.querySelectorAll(".gallery-img");
for (let imagen of imagenes){
  imagen.style.width="200px";
}
 
//Ya podemos hacer el evento con las comparaciones de estilo
  contenedor.addEventListener('click', e => {
    
        if (e.target.style.width  == "200px"){
            e.target.style.width  = "500px";
        }else{
            e.target.style.width  = "200px";
        }
    
  });
    