var contenedor = document.getElementsByClassName("gallery-img");
contenedor.addEventListener("click",function (e){
    var i = e.target;
    if (i.style.width  == "200px"){
        i.style.width  = "500px";
    }else{
        i.style.width  = "200px";
    }

});