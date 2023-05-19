$(function () {
    $('.top_banner .btn').on('click', function () {
        // 버튼 누르면 올라갔다 내려갔다 해라
        $('.top_banner').toggleClass('on');
    });
    $('.right_banner .btn').on('click', function () {
        $('.right_banner').toggleClass('on');
    });
    $('.left_banner .btn').on('click', function () {
        $('.left_banner').toggleClass('on');
    });
});