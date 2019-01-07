$(document).ready(function() {

$(window).scroll(function() {
  $('.nav').addClass('sopra')
  $('.nav').addClass('bianco')
  $('.nav .log_g').addClass('alt_tot')

  $('.top-up img').addClass('sotto')
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
});



});
