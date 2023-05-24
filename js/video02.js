$(function () {
    // vdo에 = 뒤에꺼 넣어서 짧게쓰는방법
    const vdo = $('#bgndVideo').YTPlayer({
        videoURL: 'OzkJqjFwcyc',
        containment: '#main_visual',
        autoPlay: true,
        // 기본 재생바 같은거 없어져라
        showControls: false,
        // 안볼때는 돌아가지마라
        playOnlyIfVisible: true,
    });
    $('#con_video').YTPlayer({
        videoURL: 'OzkJqjFwcyc',
        containment: '#bgmv',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#con_video2').YTPlayer({
        videoURL: 'OzkJqjFwcyc',
        containment: '#bgmv2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#con_video3').YTPlayer({
        videoURL: 'OzkJqjFwcyc',
        containment: '#bgmv3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#main_visual .pause').on('click', function () {
        vdo.YTPPause();
        // 이름에 넣어서 짧게쓰기 가능함
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
        // 안넣으면 이렇게 씀
    });
});