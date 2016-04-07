/**
 *
 * 	Animations CSS -
 *
 * 	Generate default classes for CSS3 Animations.
 * 	Gera classes padrões de animações CSS 3.
 *
 * 	@author Lenon Azzi
 * 	@version 1.0
 *
 * 	@copyright Copyright (c) 2016, AGÊNCIA GH - http://agenciagh.com.br/
 * 
 */

if ("undefined" == typeof jQuery) {

	throw new Error("Animations CSS requires jQuery");

} else {

	(function($){

		$(window).load(function() { dieidi.triggerAnim(); });
		$(window).bind('scroll', function() {  dieidi.triggerAnim(); });

		dieidi = {
			triggerAnim: function() {
				//console.log('Animations CSS - Running');

				if ($('.top-to-fade').length > 0) {
					var i = 0;
					$('.top-to-fade').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('top-to-fade-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('top-to-fade-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.right-to').length > 0) {
					var i = 0;
					$('.right-to').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('right-to-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('right-to-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.right-to-fade').length > 0) {
					var i = 0;
					$('.right-to-fade').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('right-to-fade-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('right-to-fade-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.bottom-to-fade').length > 0) {
					var i = 0;
					$('.bottom-to-fade').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('bottom-to-fade-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s, '+i+'s');
								$(this).addClass('bottom-to-fade-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.left-to').length > 0) {
					var i = 0;
					$('.left-to').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('lef-to-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('left-to-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.left-to-fade').length > 0) {
					var i = 0;
					$('.left-to-fade').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('left-to-fade-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('left-to-fade-anim');

								i+=0.2;
							}
						}
					});
				}

				if ($('.center-to-fade').length > 0) {
					var i = 0;
					$('.center-to-fade').each(function() {
						if ($(this).is(":visible") && !$(this).hasClass('center-to-fade-anim')) {
							if ($(this).isOnScreen(0.5)) {
								$(this).css('transition-delay',i+'s');
								$(this).addClass('center-to-fade-anim');

								i+=0.2;
							}
						}
					});
				}
			}
		}

		/*
		 * isOnScreen original version by 
		 * Copyright (c) 2015 Mike Dunn
		 */

		$.fn.isOnScreen = function(y){
		    
		    if(y == null || typeof y == 'undefined') y = 1;
		    
		    var win = $(window);
		    
		    var viewport = {
		        top : win.scrollTop(),
		    };
		    viewport.bottom = viewport.top + win.height();
		    
		    var height = this.outerHeight();
		 
		    if(!height){
		        return false;
		    }
		    
		    var bounds = this.offset();
		    bounds.bottom = bounds.top + height;
		    
		    var visible = (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		    
		    if(!visible){
		        return false;   
		    }
		    
		    var deltas = {
		        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
		        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height)
		    };
		    
		    return (deltas.top * deltas.bottom) >= y;
		    
		};

	})(jQuery);

}