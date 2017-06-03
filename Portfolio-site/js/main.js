$(document).ready(function() {
	$('.profile').removeClass('profile_hidden').addClass('slideInDown');

	events.getAnimation(animateShadow);
	events.clickOpenWindow('profile__btn');
	events.clickCloseWindow('about__more');
	
	getHeight();

	$(window).resize(function(){
		getHeight();
	});
});

var events = {
	clickOpenWindow: function(selector){
		$('.' + selector).click(function(){
			$(this).children().toggleClass('read-btn__caption_active');
			$('.about__more').toggleClass('about__more_active');
		}); 
	},
	clickCloseWindow: function(selector) {
		$('.' + selector).click(function(){
			$(this).removeClass(selector + '_active');
			$('.profile__btn').children().removeClass('read-btn__caption_active');
		});
	},
	
	getAnimation: function(func) {
		var timeId = func();

		
	}
};

function animateShadow(){
	var timeId = setInterval(function(){},1000);
	return timeId;
};
function getHeight() {
	var heightHead = $('.header').height(),
	heightDocument = $(document).innerHeight(),
	heightWrappper = $('.wrapper').height(parseFloat(heightDocument));
	
};
