var Numeros = []

function add() {
    var n = parseFloat(document.getElementById("n").value);
    if(n>=0 && n<=10 ){
    Numeros.push(n);
    document.getElementById("mostrar").innerHTML = Numeros;
} else if (n>10){
    document.getElementById("mostrar").innerHTML = "Este número es mayor que 10"
} else  document.getElementById("mostrar").innerHTML = "Este número no es positivo"
}


function borrar() {
    Numeros = [];
    document.getElementById("mostrar").innerHTML = Numeros;
}

function media() {
    s = 0 /* Cada vez que le doy al botón */
    for (var i = 0 ; i< Numeros.length; i++) {
        s += Numeros[i];
    }
    document.getElementById("mostrar").innerHTML = s/Numeros.length

}
