$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll / 100 ;
            $("#b-header-container").css('background-color', 'rgba(203,190,190, ' + opacity + ')');
        } else {
            opacity = 1;
            $("#b-header-container").css('background-color', 'rgba(203,190,190, ' + opacity + ')')
        }
    })
});