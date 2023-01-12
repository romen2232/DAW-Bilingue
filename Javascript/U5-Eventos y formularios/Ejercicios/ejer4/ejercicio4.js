const elemento = document.getElementById('contenidos');

elemento.addEventListener('mouseover', resalta, false);

elemento.addEventListener('blur', resalta, false);


function resalta(e){
	switch(e.type){

	case 'mouseover':
		e.target.style.borderColor = "green";
	break;
	case 'blur':
		e.target.style.borderColor = "gray";
	break;

	default:
	break;
}