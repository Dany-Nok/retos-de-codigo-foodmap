$(document).ready(function(){

// FUNCION PARA SPLASH (O PRELOADER)
  $(function(){
    setTimeout(function() {
        $('#splash').fadeOut(500);
      }, 3000);
    });

});

// FUNCION PARA MOUSEOVER EN FOTOS COMIDA
  $('.hovereffect').hover(function () {
    $(this).children('.z-text').fadeToggle(600);
  });

// FUNCION PARA LLAMAR MODAL DE RESTAURANT Y CERRAR (MOMENTANEAMENTE) AL HACER CLICK EN "PEDIR AHORA"
  $(".button-food").click(function(){
    $("#descripcion-mami").modal("hide");
    $("#descripcion-sangurucho").modal("hide");
    $("#descripcion-alos").modal("hide");
    $("#descripcion-sopita").modal("hide");
    $("#descripcion-empanadas").modal("hide");
    $("#descripcion-helado").modal("hide");
    $("#descripcion-sushi").modal("hide");
    $("#descripcion-pastelazos").modal("hide");
    $("#descripcion-wrapman").modal("hide");
  });
