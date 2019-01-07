$(document).ready(function() {

$(window).scroll(function() {
  var height = $(window).scrollTop();
  console.log(height);
  if(height  > 0) {
    $('.nav').addClass('sopra')
    $('.nav').addClass('bianco')
    $('.nav .log_g').addClass('alt_tot')

    $('.top-up img').addClass('sotto')
  } else if (height === 0) {
    $('.nav').removeClass('sopra')
    $('.nav').removeClass('bianco')
    $('.nav .log_g').removeClass('alt_tot')

    $('.top-up img').removeClass('sotto')
    $('.nav').addClass('transizione')

  }
});


$('.adress').click(function() {
  $(this).addClass('.adress-i')
});

$('.card').mouseenter(function() {
  $(this).find('.freccia').removeClass('nascosta')
  $(this).find('.iniziale').removeClass('nascosta')
  $(this).find('img').addClass('img_zoom')
});

$('.card').mouseleave(function() {
  $('.freccia').addClass('nascosta')
  $('.iniziale').addClass('nascosta')
  $(this).find('img').removeClass('img_zoom')
  $(this).find('img').addClass('transizione')
//NB se voglio fare si che ci sia una transizione nell add/remove class di jquery,
//mi basta aggiungere una classe css che abbia transition come proprieta, esattamente come ho fatto qui sopra.
});



});
