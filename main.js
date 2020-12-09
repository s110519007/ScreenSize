$(document).ready(function () {
    var w=$(window).width();
    var h=$(window).height();
    $('.container').html("寬度: "+w+"px, 高度: "+h+"px");
    $(window).resize(function () { 
        w=$(window).width();
        h=$(window).height();
        $(".container").text("寬度: "+w+"px, 高度: "+h+"px");
    });
});