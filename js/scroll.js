// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        //console.log($($anchor.attr('href')).offset().top);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 666, 'easeInOutExpo');
        event.preventDefault();
    });
});