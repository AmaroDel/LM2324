var Numeros = []

function add() {
    var n = parseInt(document.getElementById("n").value);
    if(n>=0){
    Numeros.push(n);
    document.getElementById("mostrar").innerHTML = Numeros
} else  document.getElementById("mostrar").innerHTML = "Este número no es positivo"
}


function suma() {
    var s = 0
    for (var i = 0 ; i< Numeros.length; i++) {
        if(Numeros[i]%2==0){
            s += Numeros[i];
        }
    }
    document.getElementById("mostrar").innerHTML = s

}