$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll: 1,
		speed:700,
		autoplaySpeed:800,
		isFinite:true,
		swipe: true,
		asNavFor:".sliderbig",
		waitForAnimate:false,
		centerMode: true,
		focusOnSelect: true
	});

	

	$('.sliderbig').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
 		fade: true,
  		asNavFor: '.slider',
		speed:700,
		autoplaySpeed:800,
		isFinite:true,
		swipe: true,
		waitForAnimate:false,
		});
	});


});

