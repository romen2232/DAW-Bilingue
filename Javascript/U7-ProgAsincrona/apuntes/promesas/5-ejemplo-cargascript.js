
//PROMESA PARA CARGAR UN SCRIPT DE LA WEB Y AÑADIRLO EN LA CABECERA UNA VEZ CARGADO
//Código productor
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Error de carga de script para $ {src}`));
  
      document.head.append(script);
    });
  }

  
//Consumimos la promesa  
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/loda.js");

promise.then(
  script => console.log(`${script.src} está cargado!`),
  error => console.error(`Error: ${error.message}`)
);

promise.then(script => alert('Otro manejador...'));