
document.cookie?alert("Hola "+document.cookie.split("=")[1]):alert("No hay cookies");

function GestionarFormulario(){

   
    var error=false;
    
    var nuevaVentana;
    var formulario = document.getElementsByTagName("form")[0];

    //Vemos si hay error: no se ha indicado la edad o el checkbox
    if((document.getElementById("user_age").value=="") || !document.getElementById("condiciones").checked){
        let result=document.getElementById("resultado");
        result.style.backgroundColor="yellow";
        result.innerHTML+="<p>Ha habido errores:</p>";
        result.innerHTML+='<p style="color:red">La edad o las condiciones no se han completado</p>';
        error=true;
    }

    //Si no hay error
    if (!error){
        
        var elementos=formulario.length;        
        var nuevoTexto="<p>En numero de elementos del formulario es: "+elementos+"<p>";
        nuevoTexto+="<h3>Los elementos de texto o de correo electrónico son:</h3>";
        for (let i=0;i<elementos;i++){
            if (formulario.elements[i].type=="text" || formulario.elements[i].type=="email"){
                nuevoTexto+="<strong>"+formulario.elements[i].name+"</strong>";
                nuevoTexto+=' Valor: ';
                nuevoTexto+=formulario.elements[i].value;		
                nuevoTexto+="<br/>";
            }
        } 

        nuevoTexto+="<p><b>Tu profesion es:  </b>"+formulario.profesion.options[formulario.profesion.selectedIndex].text+"</p>";
       

        //Fecha de hoy:
        var ahora=new Date();
        var fecha=+ahora.getDate()+" del mes "+ahora.getMonth()+ " del año "+ahora.getFullYear();
        nuevoTexto+='<p style="color:red">La fecha de hoy es: '+fecha+"</p><br>";

        //Cookie
        nuevoTexto+="<p>La cadena contenida en la cookie es: </p>";
        document.cookie="username="+formulario.user_name.value.split(" ")[0];
        nuevoTexto+=document.cookie;


        //Abrimos la nueva ventana y mostrarmos el texto
        nuevaVentana= window.open("","Nueva Ventana","height=400,width=500");       
        nuevaVentana.document.write(nuevoTexto);
     
    }
}

//Marca los checkbox necesarios
function cambiarEdad(){
    //var formulario = document.getElementsByTagName("form")[0];
    let edad=document.getElementById("user_age").value;
    let seleccionado="", texto="";
    if (edad<18){
        seleccionado=document.getElementById("menor");
        texto=document.getElementById("textoMenor");
    }
    else{
        seleccionado=document.getElementById("mayor");       
        texto=document.getElementById("textoMayor");
    }
    seleccionado.checked=true;
    texto.style.color="green";
}

//Confirmación de la profesión
function cambiarProfesion(sel){
    let respuesta=confirm("Eres "+sel.options[sel.selectedIndex].text+"?");
    if (!respuesta){
        sel.selectedIndex=0;
    }
}

function borraCookie(){
    document.cookie="username=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
}