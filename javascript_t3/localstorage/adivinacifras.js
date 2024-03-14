function iniciar(){
    random(100, 999)
    document.getElementById("input").innerHTML = 
    let respuesta = document.getElementById()
}

// Notesé que también en este caso `min` será incluido y `max` excluido
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  document.getElementById("numero").innerHTML = Math.floor(Math.random() * (max - min) + min);
}
