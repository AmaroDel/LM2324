function iniciar(){
    random(100, 999)
    console.time(contando);

    document.getElementById("input").innerHTML = "<input placeholder='Introduce un número'>"+"<br>";
}

// Notesé que también en este caso `min` será incluido y `max` excluido
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  document.getElementById("numero").innerHTML = Math.floor(Math.random() * (max - min) + min);
}


function comprobar(){
  let intento = document.getElementById("input").value

  let correcto =document.getElementById("numero").innerHTML
  if ( intento == correcto){
    let tiempo = console.timeEnd(contando);
    alert("acertaste en " + tiempo + " segundos")
  }

}