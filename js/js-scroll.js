$( document ).ready(function() {
  
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 750) {
            $('#top').show('.top');
			$(".banner").removeClass("banner-margin");
		}
		else {
			$('#top').hide('.top');
		$(".banner").addClass("banner-margin");
			
		}	
    }
    
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    	 
});

  //jQuery to collapse the navbar on scroll
   $(window).scroll(function() {
    if ($(".top2").offset().top > 100) {
     		$(".top2").addClass("top3");
		
    } else {
		
		$(".top2").removeClass("top3");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

