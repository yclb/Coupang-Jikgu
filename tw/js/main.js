jQuery(document).ready(function(){
	jQuery('.navbar-expand-md .navbar-nav .nav-item').click(function(){
       jQuery(this).addClass('active').siblings().removeClass('active');
    });
	var bodyEl = jQuery("body");
	jQuery(window).on("scroll", function() {
		var scrollTop = jQuery(this).scrollTop();
		jQuery("main > div").each(function() {
			var el = jQuery(this),
				className = el.attr("id");
				if(className == "work"){
					if (el.offset().top < scrollTop) {
						jQuery('#work').addClass('active');
					} else {
						jQuery('#work').removeClass('active');
					}
				}
			
		});
	});
	// $(".owl-carousel-why-area").slick({
		
		// dots: false,
        // infinite: true,
		// arrows: false,
		// centerPadding: '250px',
        // centerMode: true,
        // slidesToShow: 3,
        // slidesToScroll: 3,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// responsive: [
			// {
			  // breakpoint: 1500,
			  // settings: {
				// centerPadding: '150px',
			  // }
			// },
			// {
			  // breakpoint: 1200,
			  // settings: {
				// centerPadding: '100px',
			  // }
			// },
			// {
			  // breakpoint: 1000,
			  // settings: {
				// centerPadding: '80px',
			  // }
			// },
			// {
			  // breakpoint: 900,
			  // settings: {
				// centerPadding: '60px',
			  // }
			// },
			// {
			  // breakpoint: 767,
			  // settings: {
				// centerMode: false,
				// rows: 2,
				// slidesToShow: 3,
				// slidesToScroll: 3,
			  // }
			// },
			// {
			  // breakpoint: 400,
			  // settings: {
				// centerMode: false,
				// rows: 2,
				// slidesToShow: 2,
				// slidesToScroll: 2,
			  // }
			// }
		// ]
	// });
	jQuery('#navbarmain').affix({
		  offset: {
			top: jQuery(window).height() * 1
		  }
	});	
	
	
	jQuery(".owl-carousel-work").owlCarousel({
		loop:false,
		margin:116,
		nav:true,
		slideBy: 3,
		// autoplay:true,
		// autoplayTimeout:3000,
		navText:['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>','<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>'],
		responsive:{
			0:{
				items:1,
				margin:72
			},
			600:{
				items:2,
				margin:72
			},
			767:{
				items:3,
				margin:72
			},
			1261:{
				items:3
			}
		}
	});

	jQuery('.owl-carousel-intro').owlCarousel({
		loop: false,
		nav: true,
		margin: 10,
		rewind: true,
		mouseDrag: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},            
			960:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});

	var owlIntro = jQuery('.owl-carousel-intro');
		owlIntro.on('mousewheel', '.owl-stage', function(e) {	
   	if (e.deltaY > 0) {
		owlIntro.trigger('prev.owl');
   	} else {
		owlIntro.trigger('next.owl');
   	}
   		e.preventDefault();
	});

	// var navbarSupportedContent = jQuery('#navbarSupportedContent .ul');
	

	// jQuery(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
	// 	console.log(scroll);
	// 	console.log(navbarSupportedContent);
    //     if (scroll >= 500) {
    //         navbarSupportedContent.removeClass('active').addClass("active");
    //     } else if(scroll >= 1200){
    //         navbarSupportedContent.removeClass("active").addClass('clearHeactiveder');
    //     }
    // });

});