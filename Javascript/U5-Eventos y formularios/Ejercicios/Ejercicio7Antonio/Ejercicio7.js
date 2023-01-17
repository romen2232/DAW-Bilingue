function coordenadas(event) {
    let x = event.clientX;
    let y = event.clientY;
    let anchura = window.innerWidth;
    let altura = window.innerHeight;
    if(x>anchura/2 && y>altura/2){

        document.getElementById("demo").innerHTML = "Derecha Abajo";

    }else if(x>anchura/2 && y<altura/2){

        document.getElementById("demo").innerHTML = "Derecha Arriba";

    }else if(x<anchura/2 && y<altura/2){

        document.getElementById("demo").innerHTML = "Izquierda Arriba";

    }else if(x<anchura/2 && y>altura/2){

        document.getElementById("demo").innerHTML = "Izquierda Abajo";

    }
  }


document.addEventListener("click", coordenadas, false);