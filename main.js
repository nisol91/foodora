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

$('.card img').mouseenter(function() {
  $(this).siblings('.freccia').removeClass('nascosta')
  $(this).siblings('.iniziale').removeClass('nascosta')
  $(this)
});

$('.card img').mouseleave(function() {
  $('.freccia').addClass('nascosta')
  $('.iniziale').addClass('nascosta')
});



});
