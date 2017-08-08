$(function () {
    var c=0;
    var timer=setInterval(add,1000)
    function add() {
        c++;
        if (c == 3) {
            $(".ndul").stop().animate({"left": -450 + "px"}, 1000);
        } else if (c == 6) {
            c = 0;
            $(".ndul").stop().animate({"left": 0 + "px"}, 1000);
        }
        $('.ndul li').eq(c).find('.nd777').show();

        $('.ndul li').eq(c).siblings('li').find('.nd777').hide();

        $('#ndbox .ndtpp img').eq(c).fadeIn(400).siblings('img').fadeOut(400);

    }

    $('.ndyb').click(function () {
        c++;
        $(".ndul").stop().animate({"left": -450 + "px"}, 1000);
    })

    $('.ndzb').click(function () {
        c--;
        $(".ndul").stop().animate({"left": 0 + "px"}, 1000);
    });

    $(function(){
//	给li加鼠标移入事件

        $(".ndul li").mouseenter(function(){
            clearInterval(timer)
//		获得序号
            var xh = $(this).index();
//		让xh号con显示,兄弟隐藏
            $(".ndtpp img").eq(xh).show().siblings('img').hide();
            $('.ndul li').eq(xh).find('.nd777').show();

            $('.ndul li').eq(xh).siblings('li').find('.nd777').hide();


        })

    })
})



