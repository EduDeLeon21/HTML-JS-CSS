function onblurButton()
{
	alert("has hecho un onblur");
}

function onblurText()
{
	var texto = document.getElementById("myTexto");
	texto.value = texto.value.toUpperCase();
}

function onblurSelect()
{	
	var evento =  window.event;
	
	switch(evento.type)
	{
		case "blur":
			alert ("onblur")
			break;

	}
	var texto = document.getElementById("mySelect")
	document.getElementById("textSel").value = texto.value;
}

function onblurTextArea()
{
	var texto = document.getElementById("myTextArea");
	texto.value = texto.value.toLowerCase();
}

window.onload = function(){

	document.getElementById("section1").onmouseover = resalta;
	document.getElementById("section1").onmouseout = resalta;
}

function resalta(TheEvent) {
  var evento =  TheEvent;

  switch(evento.type) {

  	case "mouseover":
    	this.style.backgroundColor  = "#0B610B";
      	break;
    case "mouseout":
      	this.style.backgroundColor  = "silver";
     	break;
  }
}

window.onload = function() {
  //alert(document.forms.length)
  document.getElementById("opcionSi").checked = true;
  
  document.onkeypress = muestraInformacion;
  document.onkeydown = muestraInformacion;
}

function muestraInformacion(elEvento) {
  var evento = window.event || elEvento;
 
  var mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
 
//  info.innerHTML += "<br>--------------------------------------<br>" + mensaje
}

function ImprimirValores()
{
	
	var pregunta = document.getElementsByName("pregunta");

	var respuesta = "";

	for (var i=0; i<pregunta.length;i++)
	{
		
	    if (pregunta[i].value =="SI" && pregunta[i].checked)
	    {
	    	 AgregarValores();
	    }
	    else if (pregunta[i].value =="NO" && pregunta[i].checked)
	    {
	    	alert("dijo no")
	    }
		
	}
}
 
 function AgregarValores()
 {
 	 var nombre  = document.createTextNode(document.getElementById("nombre").value);
 	 var apellido = document.createTextNode(document.getElementById("apellido").value);
 	 var section = document.getElementById("valores");
 	 var lista = document.getElementById("sexo");

 	 var index = lista.selectedIndex;
 	 var opcionSel = lista.options[index];

 	 var sexo = document.createTextNode(opcionSel.text)


 	 var div = document.createElement("div");
 	 var divA = document.createElement("div")
 	 var divS = document.createElement("div")

 	 div.appendChild(nombre);
 	 divA.appendChild(apellido);
 	 divS.appendChild(sexo);

 	 section.appendChild(div);
 	 section.appendChild(divA);
 	 section.appendChild(divS);
 }

function MaxCaracteres(max)
{

	var textArea = document.getElementById("myTextArea")
	
	if (textArea.value.length >= max )
	{
		return false;
	}
	else
	{
		var caracteres = document.getElementById("caracteres");
		var cantidad = max - textArea.value.length;

		var text = document.createTextNode(cantidad);
		
		caracteres.appendChild(text);
		return true;
	}
}
 function muestraInformacion(elEvento) {
  var evento = elEvento || window.event;
  // Detectar si el navegador es Internet Explorer
var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
 
if(ie) {
  coordenadaX = evento.clientX + document.body.scrollLeft;
  coordenadaY = evento.clientY + document.body.scrollTop;
}
else {
  coordenadaX = evento.pageX;
  coordenadaY = evento.pageY;
}

info.innerHTML = "Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY + " respecto de la página web";

}

document.onmouseover = muestraInformacion;


