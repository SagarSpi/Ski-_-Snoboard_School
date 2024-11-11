$(document).ready(function(){
	
	$('#counter-block').ready(function(){
      $('.fb').animationCounter({
        start: 0,
        end:1600,
        step: 1,
        delay: 10
      });
      $('.gb').animationCounter({
        start: 0,
        end:18,
        step: 1,
        delay: 400
      });
      $('.cb').animationCounter({
        start: 0,
        end:213,
        step: 1,
        delay: 60
      });
  });

	var masonry = new Macy({
          container: '#macy',
          trueOrder: false,
          waitForImages: false,
          useOwnImageLoader: false,
          debug: true,
          mobileFirst: true,
          columns: 1,
          margin: {
              y: 0,
              x: '0%',
          },
          breakAt: {
              1200: 3,
              940: 3,
              520: 3,
              400: 1
          },
      });

  var owl = $('.owl-carousel');
        owl.owlCarousel({
          margin: 10,
          nav: true,
          loop: true,
          autoplay:true,
          autoplayTimeout:5000,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        });


});