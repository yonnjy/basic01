$(function () {

    const model = ['blue', 'white', 'green']

    $('.main_slide').on('init afterChange', function (e, s, c) {
        // 잘모르겠다 일단외워 나중에 이해해...
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1);
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});