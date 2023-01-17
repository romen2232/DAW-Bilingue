var contenedor = document.querySelector(".gallery-container");
/*contenedor.addEventListener("click",function (e){
   console.log(e.target.style.width);
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
        if (e.target.style.width  == "200px"){
            e.target.style.width  = "500px";
        }else{
            console.log("entro en el else")
            e.target.style.width  = "200px";
        }
    }
  });
