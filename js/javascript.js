$(function(){
    const $indicator = $(".slides>.slides-pagination>li>a");
    $indicator.on('click', function(evt){
        const nowIdx = $indicator.index(this);
        $(".slides>.slides-line").stop().animate({
            left:-1920*nowIdx
        }, 1500, 'easeInOutCubic');
        $(this).parent().addClass('on').siblings().removeClass('on');
        evt.preventDefault();
    });
});