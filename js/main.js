$(document).ready(function(){
	$('.arrows').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.main-item'),
			list = $this.closest('.container-item'),
			triger = $this.closest('.arrows'),
			trigerItem = triger.find('.arrows'),
			items = list.find('.main-item'),
			content = item.find('.sub-menu'),
			otherContent = list.find('.sub-menu'),
			duration = 300;

		if (!item.hasClass('active')){
			item.removeClass('active');
			item.addClass('active');
			triger.addClass('arrowsActive')

			otherContent.stop(true,true).slideUp(duration);
			content.stop(true,true).slideDown(duration);
		} else{
			content.slideUp(duration);
			item.removeClass('active');
			triger.removeClass('arrowsActive');
		}

	});

});