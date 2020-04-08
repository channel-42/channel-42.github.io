$(document).ready(function() {
  $('.fa-bars').on('click', function() {
    $('header nav ul').toggleClass('open');
    $('#progress-bar').toggleClass('open');
    $('#scroll-ind').toggleClass('open');
    $('#logo img').toggleClass('open');
  });
  $('header nav ul li').on('click', function() {
    $('header nav ul').toggleClass('open');
    $('#scroll-ind').toggleClass('open');
    $('#logo img').toggleClass('open');
  });
});
