    // funciones
function modifyText() {
    const t2 = document.getElementById("t2");
    const isNodeThree = t2.firstChild.nodeValue === "three";
    t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

function consola() {
    console.log("hola");
}

function saludo1() {
    alert(this.id);
}

function saludo2(e) {
    alert(e.target.id);
}

function cambiarColor(e) {
    e.target.style.color == "black" ? e.target.style.color = "blue" : e.target.style.color = "black";
}

    // variables
const el = document.getElementById("tabla");
const boton = document.getElementById("boton");
const t1 = document.getElementById("t1");

    // eventos
el.addEventListener("click", modifyText, false);
el.addEventListener("click", consola, false);

el.addEventListener("click", () => {
    t1.style.backgroundColor = "blue";
}, false);

el.addEventListener("click", saludo2, false);

el.addEventListener("click", cambiarColor, false);

function eliminar() {
    el.removeEventListener("click", saludo1);
    el.removeEventListener("click", saludo2);
}

boton.addEventListener("click", eliminar, false);