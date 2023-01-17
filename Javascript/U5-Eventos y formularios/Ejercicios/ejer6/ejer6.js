var contenedor = document.querySelector(".gallery-container");

/*contenedor.addEventListener('click', e => {
    if(e.target.classList.contains('gallery-img')){
        if (e.target.style.width  == "200px"){
            e.target.style.width  = "500px";
        }else{
            console.log("entro en el else")
            e.target.style.width  = "200px";
        }
    }
  });*/

  contenedor.addEventListener('click', e => {
    if(e.target.classList.contains('gallery-img')){
      e.target.style.width="400px";
    }
  });
