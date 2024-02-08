var vector =[]

function anadir() {
    var numero = parseFloat(document.getElementById("elemento").value);

    //Borramos cualquier mensaje de error previo
    document.getElementById("aviso").innerHTML= ""

    if (isNaN(numero)){  //Si true significa que no es un número
        document.getElementById("aviso").innerHTML= "Debes introducir un número"
    }
    else{
    vector.push(numero);
    document.getElementById("mostrar").innerHTML = vector
    }
}

function mayor(){
    let mayor=vector[0]; //por defecto el primer elemento es el mayor
    for (var i=0; i<vector.length;i++){
        if (vector[i]>mayor)
        mayor = vector[i];

    }
    return document.getElementById("mostrar").innerHTML = mayor;
  
    
    
}