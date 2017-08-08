
$(window).scroll(function () {
    if (parseInt(scrollY) > 650) {
        $("#top").animate().fadeIn(200).css({'position': 'fixed', 'display': 'block','z-index': '66666666666'}, 1);
    } else {
        $("#top").animate().fadeOut(200).css({'display': 'none'}, 1);
    }

});

