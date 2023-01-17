const element = document.getElementById(cuerpo); // Obtenemos el body

cuerpo.addEventListener('click', coordenadas, false); // Aplicamos el listener al body

function coordenadas(event){
	let x = event.screenX; // cogemos la coordenada X
	let y = event.screenY; // y la coordenada Y
	let coordenadas = "Coordenada X: " + x + " , coordenada Y: " + y; // sacamos el resultado
	document.getElementById("texto").innerHTML = coordenadas; // se lo agregamos al parrafo
}