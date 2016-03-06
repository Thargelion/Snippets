// Calesita: un cambiador sencillo de imágenes. Incluye dos manijas para aumentar o disminuir y el switcer propiamente dicho.
// Las clases css a usar son: #calesita (el contenedor de las imágenes) #manijaizq - #manjader (las manijas)
// La variable total sirve para definir  manualmente la cantidad de imágenes que componen la calesita.
// manijas
var actualCal = 1;
var total = 8;
// calesita
function cambiadorCal(actualCal) {
  $("#calesita>div:visible").css("display", "none");
  $("#calesita div:nth-child(" + actualCal + ")").fadeIn("slow");
}
$("#manijaizq").click(function() {
  actualCal = actualCal - 1;
  if (actualCal === 0) {
    actualCal = total;
  }
  cambiadorCal(actualCal);
});
$("#manijader").click(function() {
  actualCal = actualCal + 1;
  if (actualCal > total) {
    actualCal = 1;
  }
  cambiadorCal(actualCal);
});
