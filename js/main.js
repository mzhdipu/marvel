/* jQuery Preloader
 -----------------------------------------------*/
$(window).load(function(){
	$('.preloader').fadeOut(3000); // set duration in brackets
});



/****
=============================================
			for slider section
=============================================
*****/

$('.carousel').carousel({
  interval: 2000
})





/****
=============================================
			for Stick nav
=============================================
*****/

$(document).ready(function() {
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
});




/*
==========================================
			For Mixitup
==========================================
*/

var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
	selectors: {
		target: '[data-ref~="mixitup-target"]'
	}
});








/****
 =============================================
 for owlCarousel
 =============================================
 *****/
$(document).ready(function(){
        $('.slider-active').owlCarousel({
            loop:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            nav:true,
            autoplay:true,
            smartSpeed:1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        $('.header_slide_active').owlCarousel({
            loop:true,
            navText:false,
            nav:true,
            autoplay:true,
            smartSpeed:1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
       
    });


/****
 =============================================
 for Stick nav
 =============================================
 *****/

$(document).ready(function() {
	var s = $("#sticker");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			s.addClass(".stick");
		} else {
			s.removeClass(".stick");
		}
	});
});



/****
 =============================================
 enllax for parallax effect
 =============================================
 *****/
(function($){

	//Plugin activation
	$(window).enllax();

//            $('#some-id').enllax();

//            $('selector').enllax({
//                type: 'background', // 'foreground'
//                ratio: 0.5,
//                direction: 'vertical' // 'horizontal'
//            });

})(jQuery);


/****
 =============================================
 For counterUp
 =============================================
 *****/
$('.counter').counterUp({
	delay: 10,
	time: 1000
});


/****
 =============================================
for animated form input box validateion
 =============================================
 *****/
$(document).on('click','#trigger',function(){
	var blank_input = $('input.checkerr').filter(function(){
		return !this.value;
	});
	blank_input.addClass('animated bounce err');

	setTimeout(function(){
		blank_input.removeClass('animated bounce err');
	},1000);

	return false
});




/****
 =============================================
 for ScrollBar
 =============================================
 *****/

var scrollTimer = null;

$(window).scroll(function() {
	var viewportHeight = $(this).height(),
		scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
		progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
		distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scrollbubble').height() / 2
		;

	$('#scrollbubble')
		.css('top', distance)
		.text('Progress (' + Math.round(progress * 100) + '%)')
		.fadeIn(100)
	;

	// Fade out the annotation after 1 second of no scrolling.
	if (scrollTimer !== null) {
		clearTimeout(scrollTimer);
	}
	scrollTimer = setTimeout(function() {
		$('#scrollbubble').fadeOut();
	}, 500);
});

/****
 =============================================
 for Scroll Up
 =============================================
 *****/

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
});




