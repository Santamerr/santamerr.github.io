(function($){
   	
    // Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        $('#countdown').addClass('animated bounceInDown');  
    }); 

	$(document).ready(function() {

        // $('.carousel-spotlight').slick({
        //     infinite: true,
        //     dots: true,
        //     autoplay: true,
        //     autoplaySpeed: 3000,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     arrows: true
        // });


        // Background slideshow
        $.backstretch([
            'assets/images/bg3.jpg',
            'assets/images/bg11.jpg', 
            'assets/images/bg2.jpg',
            'assets/images/bg5.jpg', 
            'assets/images/bg10.jpg',
            'assets/images/bg6.jpg',
            'assets/images/bg8.jpg',
            'assets/images/bg7.jpg',
            'assets/images/bg12.jpg',
            'assets/images/bg1.jpg'
        ], {duration: 3000, fade: 750});

        // Countdown
		$('#countdown').countdown('2016/08/20', function(event) {	// your date here 
        	$(this).html(event.strftime(''
            	+ '<div><div>%D</div><i>Days</i></div>' 
            	+ '<div><div>%H</div><i>Hours</i></div>'
            	+ '<div><div>%M</div><i>Minutes</i></div>'
            	+ '<div><div>%S</div><i>Seconds</i></div>'
        	));
    	});

        // Google Map 
        map = new GMaps({
            el: '#map',
            scrollwheel: false,
            lat: 43.435461,
            lng: -80.425824
        });

	});

})(jQuery);
