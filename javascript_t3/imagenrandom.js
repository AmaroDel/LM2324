let archivos=["arbolverde.jpg", "arbolamarillo.jpg", "arbolotono.jpg", "arbolnevado.jpg", "arbolrosa.jpg"]


function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function seleccionaArbol(){
    let numero = random(0,archivos.length - 1);
    document.getElementById("arbol").src = "../images/" + archivos[numero];
}