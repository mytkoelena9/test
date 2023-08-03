$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		speed:700,
		autoplaySpeed:800,
		isFinite:true,
		swipe: true,
		asNavFor:".sliderbig",
		waitForAnimate:false,
	});

	$('.sliderbig').slick({
		arrows:false,
		fade:true,
		asNavFor:".slider",
		speed:700,
		autoplaySpeed:800,
		isFinite:true,
		swipe: true,
		waitForAnimate:false,
	});
});

