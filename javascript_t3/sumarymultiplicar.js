var Numeros = []

function add() {
    var n = parseFloat(document.getElementById("n").value);
    Numeros.push(n);
    document.getElementById("mostrar").innerHTML = Numeros

}

var s = 0 /* Se ejecuta solo una vez, por lo que no sirve, aquí está mal*/

function suma() {
    s = 0 /* Cada vez que le doy al botón */
    for (var i = 0 ; i< Numeros.length; i++) {
        s += Numeros[i];
    }
    document.getElementById("mostrar").innerHTML = s

}



function multi() {
    var m = 1;

    for (var i = 0; i < Numeros.length; i++) {
        m *= Numeros[i];
    }

    document.getElementById("mostrar").innerHTML = m;   
}