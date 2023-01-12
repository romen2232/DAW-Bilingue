var miFormulario = document.getElementById('contentFormulario');

function GenerarFormulario() {
    var br = document.createElement("br"); 

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
  
    var inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "nombre");
    inputName.setAttribute("placeholder", "Nombre");

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "Email");

    var textareaMensaje = document.createElement("textArea");
    textareaMensaje.setAttribute("type", "text");
    textareaMensaje.setAttribute("name", "textArea");
    textareaMensaje.setAttribute("placeholder", "Mensaje");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(inputName); 
    form.appendChild(br.cloneNode());
    form.appendChild(inputEmail); 
    form.appendChild(br.cloneNode());
    form.appendChild(textareaMensaje); 
    form.appendChild(br.cloneNode());
    form.appendChild(s); 

    document.getElementsByTagName("body")[0].appendChild(form);
}