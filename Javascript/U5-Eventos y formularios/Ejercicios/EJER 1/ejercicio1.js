function modifyText() {
    const t2 = document.getElementById("t2");
    const isNodeThree = t2.firstChild.nodeValue === "three";
    t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

function consola() {
    console.log("Hola que tal");
}

function saludar1(){
    alert("saludar 1: "+this.id);
}

function saludar2(evento){
    alert(evento.target.id);
}

function cambiaColor(e){
    e.target.style.color === "black" ? e.target.style.color="blue":e.target.style.color="black";
}


window.onload = function(){
    const el = document.getElementById("outside");
    el.addEventListener("click", modifyText, false);
    
    // Add second event listener to table
    el.addEventListener("click", consola, false);
    
    // Add second event listener to table
    el.addEventListener("click", () => { document.getElementById("t1").style.background = "#0000FF" }, false);
    
    //Otra forma sin función flecha:
    /*el.addEventListener("click", function() { 
        document.getElementById("t1").style.background = "#0000FF" 
    }, 
    false);*/
    
    el.addEventListener("click", saludar1, false);
    el.addEventListener("click", saludar2, false);
    el.addEventListener("click", cambiaColor, false);
}
// Add event listener to table
