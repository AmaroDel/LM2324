
var cajap = document.getElementById("padre");


setInterval(function completar(){
    for (var i = 1; i <= 20; i++) {
        var texto = document.createElement("p");

        texto.textContent = "Elemento " + i;

        cajap.appendChild(texto);
    }
}, 3000)

