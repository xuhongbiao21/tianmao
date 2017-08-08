$(function () {
    var c = 0;

    function foo() {
        c++;
        c = c == 6 ? 0 : c;

        $("#dakuang .box").eq(c).stop().fadeIn(400).siblings('.box').stop().fadeOut(400);

        $("#dakuang .lbul  .lbli").eq(c).css({
            'background': '#FBF3EE',
            'box-sizing': 'border-box',
            'border': '2px solid #7E9E95'
        }).siblings('.lbli').css({'background': '#A2A2A2', 'border': '0'})

    }

    var timer = setInterval(foo, 1000);

//     // 给点加移入事件

    $('#dakuang .lbul .lbli').mouseenter(function () {
        clearInterval(timer);

        c = $(this).index();

        t = setTimeout(function () {

            $("#dakuang .box").eq(c).stop().fadeIn(400).siblings('.box').stop().fadeOut(400);

            $("#dakuang .lbul  .lbli").eq(c).css({
                'background': '#FBF3EE',
                'box-sizing': 'border-box',
                'border': '2px solid #7E9E95'
            }).siblings('.lbli').css({'background': '#A2A2A2', 'border': '0'})
        }, 200)
    });

    $('#dakuang .lbul .lbli').mouseleave(function () {
        clearTimeout(t);
        timer = setInterval(foo, 1000);
    })
});
