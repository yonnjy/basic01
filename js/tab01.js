$(function () {
    // 이건 나오는지 확인해본거임
    // console.log(event, event.target, event.currentTarget, $(this), $(this).index());
    // event의 전파? 때문에 li누르면 a link가 같이 눌려
    $('.tab_link li').on('click', function (event) {
        // 그래서 이거 적어서 li만 눌리게 해주나봐
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on')
            .siblings().removeClass('on');

        // $('.tab_content .con').removeClass('on'); 방향주의
        $('.tab_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.tab_map_link li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();

        $('.tab_map_location li').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });
});