$(function () {
    $('#header .gnb>ul>li').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        }
        // w768이상일때 on을 지워주면 되는거같은디
    });
    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });
});