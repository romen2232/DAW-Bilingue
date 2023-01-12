//     <-- Realizar una función para mostrar las diferentes propiedades del evento recibido al pulsar
// una tecla sobre un input.
// Las propiedades se mostrarán del modo:
// “la propiedad x tiene el valor y”
// dentro de un div con identificador “info”.
// Para ello usaremos el evento “onkeydown”. -->

function showProperties(event) {
    info.innerHTML = "Code-> "+event.code+"<br>";
    
    info.innerHTML += "Shift?-> "+event.shiftKey+"<br>";
    
    info.innerHTML += "Location-> "+event.location+"<br>";
    
    info.innerHTML += "AltKey?-> "+event.altKey+"<br>";
    
    info.innerHTML += "isComposing?-> "+event.isComposing+"\n";
}
let info = document.getElementById("info");
document.getElementById("input").addEventListener("keydown", showProperties, false);