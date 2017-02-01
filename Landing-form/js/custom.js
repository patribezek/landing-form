



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
	
$(document).ready(function(){

	var numProd = 1;


	$(".agregarSlide").click(function(){
		$(".toCloneSlide").first().clone().appendTo(".clonedSlide");
return false;
		/*numProd++;
		var classNum = "nombre"+numProd;

		$(".num").append("<h4 class="+classNum+">Producto Nº: " + numProd + "</h4>");*/

	});


	$(".agregarProd").click(function(){
		$(".toClone").first().clone().appendTo(".cloned");

		numProd++;
		var classNum = "nombre"+numProd;

		$(".num").append("<h4 class="+classNum+">Producto Nº: " + numProd + "</h4>");

	});









});






