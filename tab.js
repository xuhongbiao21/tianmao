$(function () {
    $('.shenghuo').mousemove(function () {
        var c = $(this).index();
        $('.aishenghuo').eq(c).show().siblings('.aishenghuo').hide()
      $('.lingshi .shenghuo').eq(c).css({'border-bottom': '1px solid #000000'}).siblings('.shenghuo').css({'border-bottom': '0'})
    })
})
