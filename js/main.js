// Author's Js..

//Bootstrap Nav

$('.navbar-default .navbar-nav > li.dropdown').hover(
    function() {
      $('ul.dropdown-menu', this).stop(true, true).fadeIn('slow');
      $(this).addClass('open');
    }, function() {   
      $('ul.dropdown-menu', this).stop(true, true).fadeOut('slow');
      $(this).removeClass('open');
    }
);

//Animate Js

new WOW().init();

//Owl Carusel Js

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});


//Video Background Js

jQuery(function(){
  jQuery(".player").mb_YTPlayer();
   
});

var myVideo = document.getElementById("my-video");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}



//Progress Bar

$('.first.circle').circleProgress({
  value: .88,
  size: 70,
  thickness: 7,
  fill: {
  gradient: ['#E96656']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
});

$('.second.circle').circleProgress({
  value: .9,
  size: 70,
  thickness: 7,
  fill: {
  gradient: ['#34D293']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});

$('.third.circle').circleProgress({
  value: .8,
  size: 70,
  thickness: 7,
  fill: {
  gradient: ['#3AB0E2']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});

$('.fourth.circle').circleProgress({
  value: .7,
  size: 70,
  thickness: 7,
  fill: {
  gradient: ['#E7AC44']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});