$(document).ready(function () {
    // 隱藏連結列
    if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
        bodyTag = document.getElementsByTagName('body')[0];
        bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
    }
    setTimeout(function() {
        window.scrollTo(0, 1)
    }, 0);
    var w=$(window).width();
    var h=$(window).height();
    $('.container').html("寬度: "+w+"px, 高度: "+h+"px");
    $(window).resize(function () { 
        w=$(window).width();
        h=$(window).height();
        $(".container").text("寬度: "+w+"px, 高度: "+h+"px");
    });
});