$( document ).ready(function() {
  
   
    $('.m').hide();
	$('#carousel-example-generic,.banner').hover(function(){
			$('.m').slideUp("slow");
	});
	
	//menu one
	$('#menu-1').hover(function(){
	 	$('#m1').slideDown("fast");
		$('#m2,#m3,#m4,#m5,#m6').slideUp("fast");
	}); 
	$('#m1').mouseleave(function(){
		$('#m1').slideUp("slow");
	});	
	
   //  menu two
	$('#menu-2').hover(function(){
	 	$('#m2').slideDown("fast");
		$('#m1,#m3,#m4,#m5,#m6').slideUp("fast");
		
	}); 
	$('#m2').mouseleave(function(){
		$('#m2').slideUp("slow");
		
	});	
	
   //  menu three
	$('#menu-3').hover(function(){
	 	$('#m3').slideDown("fast");
		$('#m2,#m1,#m4,#m5,#m6').slideUp("fast");
				
	}); 
	$('#m3').mouseleave(function(){
		$('#m3').slideUp("slow");
	});	
	
	
	   //  menu four
	$('#menu-4').hover(function(){
	 	$('#m4').slideDown("fast");
		$('#m2,#m3,#m1,#m5,#m6').slideUp("fast");
	
	}); 
	
	$('#m4').mouseleave(function(){
		$('#m4').slideUp("slow");
	});	
	
	
	   //  menu five
	$('#menu-5').hover(function(){
	 	$('#m5').slideDown("fast");
		$('#m2,#m3,#m4,#m1,#m6').slideUp("fast");		
	
	});
	
	$('#m5').mouseleave(function(){
		$('#m5').slideUp("slow");
	});		
	
	   //  menu six
	$('#menu-6').hover(function(){
	 	$('#m6').slideDown("fast");
		$('#m2,#m3,#m4,#m5,#m1').slideUp("fast");
	}); 
	
	$('#m6').mouseleave(function(){
			$('#m6').slideUp("slow");
	});

	
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

