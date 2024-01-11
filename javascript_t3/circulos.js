/*
function ocultarRojo(){
    document.getElementById("rojo").style.visibility = "hidden";

}

function ocultarVerde(){
    document.getElementById("verde").style.visibility = "hidden";

}

function ocultarAzul(){
    document.getElementById("azul").style.visibility = "hidden";

}
*/

/* Versión mejorada*/
function ocultar(x){
    document.getElementById(x).style.visibility = "hidden"
}
function mostrar(x){
    document.getElementById(x).style.visibility = "visible"
}

/* Versión con un solo botón*/
function ocultar_o_mostrar(x){
    if (document.getElementById(x).style.visibility == "visible" || document.getElementById(x).style.visibility =="" )
        document.getElementById(x).style.visibility = "hidden";
    else
    document.getElementById(x).style.visibility = "visible";
}