function coordenadas(event) {
    let x = event.clientX;
    let y = event.clientY;
    let anchura = window.innerWidth;
    let altura = window.innerHeight;
    if(x>altura/2 && y>anchura/2){

        document.getElementById("demo").innerHTML = "Derecha Abajo";

    }else if(x>altura/2 && y<anchura/2){

        document.getElementById("demo").innerHTML = "Derecha Arriba";

    }else if(x<altura/2 && y<anchura/2){

        document.getElementById("demo").innerHTML = "Izquierda Arriba";

    }else if(x<altura/2 && y>anchura/2){

        document.getElementById("demo").innerHTML = "Izquierda Abajo";

    }
  }


document.addEventListener("click", coordenadas, false);