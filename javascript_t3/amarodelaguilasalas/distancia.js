function calcular()
 {
   let numeros = document.getElementById("distancia").value
   const myArray = numeros.split(",");   

   var s = 0 /* Cada vez que le doy al botón */
    for (var i = 0 ; i< myArray.length; i++) {
        s += parseFloat(myArray[i]) ; 
    }
    document.getElementById("mostrar").innerHTML = "La distancia es " + s
}