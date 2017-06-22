$(document).ready(function() {

  $(window).resize(function(){location.reload();});

  $('.mobile-quote').hide();

  if ( $( window ).width() > 708 ){
    

    $('.quote').typeIt({
     strings: ["Hi, I am Iryna.", "I believe a great design can make a good idea even better.", "I create websites that have both:", "BEAUTY and BRAIN."],
     speed: 80,
     autoStart: true
  });

    $(".move-ahead").delay(14000).show("fade", 2000);
  }

  

  
  if ( $( window ).width() < 708 ){
   

   $('.mobile-quote').show();
   $('.mobile-quote').typeIt({
     strings: ["Hi, I am Iryna. I believe a great design can make a good idea even better.", "I create websites that have both:", "BEAUTY and BRAIN."],
     speed: 80,
     autoStart: true
  });
  $(".move-ahead").delay(7000).show("fade", 2000);
}
  
});

