var estado_botonsito = "pausado";
var sonidito = document.getElementById("sonido");
var botonsito = document.getElementById("boton");

function controlarmusica() {
    if (estado_botonsito == "pausado") {
      estado_botonsito ="encendido";
      reproducir_el_sonido();
      botonsito.classList.add("active");
      console.log("reproduciendo_la_musica");
    } else {
        estado_botonsito ="pausado"
        reproducir_el_sonido();
        botonsito.classList.remove("active");
        console.log("musica_pausada");
    }
}
function reproducir_el_sonido(){
    if( sonidito.paused ) {
      sonidito.play();
    } else {
        sonidito.pause();
    }
}


