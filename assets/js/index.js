(function($){
	$(document).ready(function() {

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

        // Google Map 
        map = new GMaps({
            el: '#map',
            scrollwheel: false,
            lat: 43.435461,
            lng: -80.425824
        });

	});

})(jQuery);
