$(function () {
    var c = 0;

    function foo() {
        c++;
        c = c == 6 ? 0 : c;

        $("#nddiv .nd666").eq(c).stop().fadeIn(200).siblings('.nd666').stop().fadeOut(200);
        // $("#nddiv .lba").eq(c).stop().fadeIn(100).siblings('.nd666').stop().fadeOut(100);
        // $("#nddiv .lbspan").eq(c).stop().fadeIn(100).siblings('.nd666').stop().fadeOut(100);

    }

    var timer = setInterval(foo, 2000);


})
