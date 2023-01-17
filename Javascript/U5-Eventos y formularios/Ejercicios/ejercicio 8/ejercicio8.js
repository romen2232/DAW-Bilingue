var textarea = document.getElementById("textarea");
var caracter = 3; 
    /**intentar no usar esta forma de crear eventos */
    textarea.onkeypress = function(evento) {
        if (evento.target.value.length >= caracter) {
            return false;
        }
        return true;
    }