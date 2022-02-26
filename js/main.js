$(document).ready(function(){

  $('.lang-box').on('click', function() {
    var lb_h = $("lang-box-header");
    var lb_s = $(this).find(".lang-box__select");
    lb_s.toggleClass('lang-box__select--active');
  });

  $('.lang-box-item').on('click', function () {
    var  h = $(this).attr('target');
    $(h).text($(this).attr("value"));

    var parent = $(this).parent().parent();

    parent.find(".lang-box-item").each(function () {
      $(this).attr("lang-box-status", "");
    });

    $(this).attr("lang-box-status", "selected");
  });





  $('[data-attr="show-content"]').on('click', function() {
    $('[data-attr="show-content"]').each( function () {
      if($(this).is(':checked')) {
        $($(this).attr('target')).addClass('open');
      } else {
        $($(this).attr('target')).removeClass('open');
      }
    });
  });

});