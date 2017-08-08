/**
 * Created by TCKJ on 2017/6/14.
 */
$(function () {

    $('.ashright li').mouseenter(function () {
        var pvc = $(this).index();
        $('.ashright li img').eq(pvc).stop().animate({'right': '10px'}, 200).siblings().css({'right': '0'});
    })
    $('.ashright li').mouseleave(function () {
        $('.ashright li img').stop().animate({'right': '0'}, 200)
    })

})