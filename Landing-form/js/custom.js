



function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}


var numProd = 1;

$(document).ready(function(){
	$(".agregar").click(function(){
		$(".toClone").first().clone().appendTo(".cloned");
		numProd++;
		$(".num").append("<h4>Producto Nº: " + numProd + "</h4>");

		/*if ((".num").hasChild == true) {
			$(".num").remove("<h4>Producto Nº: " + numProd + "</h4>");
		}*/

	});
});