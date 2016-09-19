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
// calesita.js

$(document).ready(function() {
    var arrayCalesitas = llenarArrayCalesitas(); //creo un array con todas las calesitas del html
    var posicion = 0;
    encendidoTotal(arrayCalesitas); //inicio la secuencia de encendido de las calesitas
});


function encendidoCalesita(calesita, posicion) {
    var velocidad = 5000; //velocidad por defecto
    var elementosCalesita = armarCalesitas(calesita); //creo un array con todos los elementos que tiene la calesita
    if ($(calesita).data("timer") != undefined) { //pregunta si el maquetador quiere modificar la velocidad por defecto
        velocidad = $(calesita).data("timer");
    }
    setInterval(function() { //inicio el loop de calesitas
        if (posicion < elementosCalesita.length) {
            cambiadorCalesita(calesita, posicion);
            posicion = posicion + 1;
        } else {
            posicion = 0;
            cambiadorCalesita(calesita, posicion);
            posicion = posicion + 1;
        }
    }, velocidad);
}

function llenarArrayCalesitas() {
    return document.getElementsByClassName('calesita');
}

function armarCalesitas(calesita) {
    var elementosCalesita = calesita.getElementsByClassName('elemento');
    return elementosCalesita;
}


function encendidoTotal(arrayCalesitas) {
    var calesita = arrayCalesitas; //creo un array de calesitas
    for (var i = 0; i < calesita.length; i++) { //recorro el array encendiendo cada calesita
        encendidoCalesita(calesita[i], 0);
    }
}

function cambiadorCalesita(calesita, posicion) {
    var arrayImagenes = calesita.getElementsByClassName('elemento'); //creo un array con los elementos de la calesita
    $(arrayImagenes).css("display", "none"); //quito todos los elementos de la calesita
    $(arrayImagenes[posicion]).fadeIn("slow"); //muestro el elemento de la calesita actual
}
