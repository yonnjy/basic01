$(function () {
    $('.product_slide').slick({
        // 가로로5개 보여주고 슬라이드
        arrows: false,
        dots: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // 모바일 크기면 1개만 보여줘라
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });
});