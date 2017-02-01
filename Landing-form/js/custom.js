



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
        $(".toClone").clone().appendTo(".cloned");
        numProd++;
        $(".well").append("<p>Producto Nº:" + numProd + "</p>");
    });
});