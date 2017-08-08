/**
 * Created by TCKJ on 2017/6/21.
 */
window.onload=function () {

    var c=$('.rightyc').hide()

$('#rightt img').mouseenter(function () {
    c.show().animate({'left':'-60px'},2000)


})



    $('#rightt img').mouseleave(function () {
        $('.rightyc').hide()

    })


}