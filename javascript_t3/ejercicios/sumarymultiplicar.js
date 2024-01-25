var Numeros = []

function add() {
    var n = parseFloat(document.getElementById("n").value);
    Numeros.push(n);
    document.getElementById("mostrar").innerHTML = Numeros

}

var a = 0

function suma() {
    var a = 0
    for (var i = 0 ; i< Numeros.length; i++) {
        a += Numeros[i];
    }
    document.getElementById("mostrar").innerHTML = a

}



function multi() {
    
}