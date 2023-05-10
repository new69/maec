import $ from 'jquery';
$('.scroll').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

$('.scroll-mobile').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      setTimeout(function(){
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }, 500);
  }
});
