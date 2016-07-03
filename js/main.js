$(document).ready(function () {
    $('a.arrows').on('click', function (e) {
        e.preventDefault();

        var $link = $(this),
            $item = $link.closest('.main-item'),
            $itemList = $item.find('.sub-menu'),
            $list = $link.closest('.container-item'),
            duration = 250,

            $activeItem,
            $activeItemList,
            $arrow = $('a.arrows');
            

        // если текущий элемент неактивен
        if (!$item.hasClass('active')) {

            $activeItem = $list.find('.main-item.active');
            $activeItemList = $activeItem.find('.sub-menu');
            $activeItem.removeClass('active');
            $arrow.removeClass('active');
            $activeItemList.slideUp(duration);

            $link.addClass('active');
            $item.addClass('active');
            $itemList.slideDown(duration);

        } else {
        	$link.removeClass('active');
            $item.removeClass('active');
            $itemList.slideUp(duration);
        }
    });

});