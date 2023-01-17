var textarea = document.getElementById("textarea");
var caracter = 3; 

    textarea.onkeypress = function(evento) {
        if (evento.target.value.length >= caracter) {
            return false;
        }
        return true;
    }