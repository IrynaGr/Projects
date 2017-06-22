$(document).ready(function() {
	$('.start').each(function(){
		var closeTrigger = $(this).find('.close-block').length;
		if (closeTrigger < 1) {
			$(this).append('<span class="close-block"></span>');
		} else {
			return '';
		}
		$('.close-block').on('click', function(){
			$(this).closest('.start').fadeOut(100);
		});
	});
})