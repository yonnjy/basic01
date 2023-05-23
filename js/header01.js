$(function () {
    //function()이거랑 ()=> 이거랑 같은거 화살표함수
    // {}객체 []배열 ()함수
    // 변수에 스크롤한 양을 담는다.
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }

    });
});