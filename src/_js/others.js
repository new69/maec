import $ from 'jquery';
$(document).ready(function(){
  // carousel
  window.$(".owl-carousel").owlCarousel({
    responsive:{
      0:{
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true
      },
      768:{
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true
      },
      1000:{
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true
      }
    }
  });
  // tabs
  window.$(".tablinks").click(function(evt){
      var tab = $(this).attr('data-id'), i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tab).style.display = "block";
      evt.currentTarget.className += " active";
      if (tab === 'family') {
        $('[data-id="company"]').find('.separator').addClass('noseparator');
      }
      else {
        $('[data-id="company"]').find('.separator').removeClass('noseparator');
      }
      if (tab === 'house') {
        $('[data-id="family"]').find('.separator').addClass('noseparator');
      }
      else {
        $('[data-id="family"]').find('.separator').removeClass('noseparator');
      }
  });
  $('[data-id="house"]').mouseover(function(){
    $('[data-id="family"]').find('.separator').addClass('noseparator');
  });
  $('[data-id="house"]').mouseout(function(){
    if (!$(this).hasClass('active')) {
      $('[data-id="family"]').find('.separator').removeClass('noseparator');
    }
  });
  // collapse
  function collapse() {
    var itens = $('.box-btn-tab');
    for (var i = 0; i < itens.length; i++) {
      $(itens[i]).click(function(){
        var content = $(this).find('.content');
        var arrow = $(this).find('.head');
        var height = $(content).find('p').innerHeight();
        if ( content.hasClass('active') ) {
          content.css('height','0');
          content.removeClass('active');
          arrow.removeClass('active');
        }
        else {
          $('.box-btn-tab').find('.content').removeClass('active');
          $('.box-btn-tab').find('.head').removeClass('active');
          $('.box-btn-tab').find('.content').css('height','0px');
          content.css('height', height+'px');
          content.addClass('active');
          arrow.addClass('active');
        }
      });
    }
  }
  // menu mobile
  function mobile_menu() {
    var btn = $('.navbar-toggler'), menu = $('.menu-mobile'), body = $('body');
    btn.click(function(){
      if ( menu.hasClass('active') ) {
        menu.removeClass('active');
        body.css('overflow','inherit');
      }
      else {
        menu.addClass('active');
        body.css('overflow','hidden');
      }
    });
  }
  // click action menu mobile
  function mobile_menu_actions() {
    var itens = $('.mobile_menu_actions'), menu = $('.menu-mobile'), body = $('body');
    for (var i = 0; i < itens.length; i++) {
      $(itens[i]).click(function(){
        if ( menu.hasClass('active') ) {
          menu.removeClass('active');
          body.css('overflow','inherit');
        }
      });
    }
  }
  // call functions
  collapse();
  mobile_menu();
  mobile_menu_actions();
});
