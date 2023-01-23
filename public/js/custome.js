 $(function() {
    var nav = $(".norm");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            nav.removeClass('norm').addClass("navfixed");
        } else {
            nav.removeClass("navfixed").addClass('norm');
        }
    });
});


/* sliders */

$(document).ready(function () {
  var owl = $('.whygridsphn');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
		stagePadding: 10,
		margin: 10,
        nav: false,
		 center: false,
       dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 4,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


/* sliders for video pages  */

$(document).ready(function () {
  var owl = $('.videopgsl');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
		stagePadding: 10,
		margin: 10,
        nav: false,
		 center: false,
       dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".site-header").toggleClass('heightexps');
  $("body").toggleClass('fixbd');
});

$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".openhdas").toggleClass('crossshwos');
});

$(".cross").click(function (e) {
  e.stopPropagation();
  $(".site-header").removeClass('heightexps'); 
  $("body").removeClass('fixbd');
});