// Calesita: un rotador sencillo de imágenes.
/*
  Requisitos para que funcione:
  0) Añadir jQuery a tu web.
  1) Tener al menos un div clase calesita.
  2) Tener al menos un div hijo de clase "elemento"
  3) Llamar a la funcion llenarArrayCalesitas en primera instancia.
  4) Llamar a la función encendidoTotal para arrancar.
  Cómo usar:
  1) Crear un div con clase "calesita" que servirá de contenedor, será nuestra calesita.
  2) Crear divs internos que irán a rotar con clase "elemento".
  3) Para encender nuestras calesitas, se puede descomentar el llamado a la función encendidoTotal.
  Bien se puede llamar a esta función en cualquier momento.
  4) Añadir a tu hoja de estilo las propiedades que están al final. Es idóneo hacerlo así para asegurarnos que siempre
  se vea al menos una imágen de tu galería.
  5) Para modificar el tiempo que tarde en cambiar de imágen, añadir el parámetro data-timer="####" a la etiqueta html
  (reemplazando los # por milisegundos).
  
  ventajas:
  +Flexible.
  +¿Escueto?
  
  desventajas:
  -Depende de jQuery :(
  
  css:
  
  .elemento{
  display:none;
}

.calesita > .elemento:first-of-type{
  display: block;
}
  
*/

$(document).ready(function() {
  var arrayCalesitas = document.getElementsByClassName('calesita');
  var posicion = 0;
  // encendidoTotal(arrayCalesitas);
});

function llenarArrayCalesitas(){
  return document.getElementsByClassName('calesita');
}

function encendidoCalesita(calesita, posicion) {
  var velocidad = 5000;
  if ($(calesita).data("timer") != undefined) {
    velocidad = $(calesita).data("timer");
  }
  setInterval(function() {
    if (posicion < calesita.length) {
      cambiadorCalesita(calesita, posicion);
      posicion = posicion + 1;
    } else {
      posicion = 0;
      cambiadorCalesita(calesita, posicion);
      posicion = posicion + 1;
    }
  }, velocidad);
}

function encendidoTotal(arrayCalesitas) {
  for (var i = 0; i < arrayCalesitas.length; i++) {
    encendidoCalesita(arrayCalesitas[i], 0);
  }
}

function cambiadorCalesita(calesita, posicion) {
  var arrayImagenes = calesita.getElementsByClassName('elemento');
  $(arrayImagenes).css("display", "none");
  $(arrayImagenes[posicion]).fadeIn("slow");
}
