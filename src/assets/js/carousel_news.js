var cmoved = 0;
var $carousel = $(".carousel_scroll");
var $indicator = $(".carousel_indicator");
$indicator.on("click","span",function(){
    var $span = $(this);
    cmoved = $span.index();
    $carousel.stop(true).animate({
        left : -cmoved*LIWIDTH
    },function(){
        $span.addClass("current").siblings().removeClass("current");
    })
});
function move(){
    if(cmoved==0)
        cmoved=1;
    else
        cmoved=0;
    $carousel.stop(true).animate({
        left : -cmoved*LIWIDTH
    },function(){
        $indicator.children(":eq("+cmoved+")").addClass("current").siblings().removeClass("current")
    })
}
function autoMove(){
    timer = setInterval(function(){
        // if(cmoved==0)
        //     cmoved=1;
        // else
        //     cmoved=0;
        // $carousel.animate({
        //     left : -cmoved*LIWIDTH
        // },function(){
        //     $indicator.children(":eq("+cmoved+")").addClass("current").siblings().removeClass("current")
        // })
        move();
    },wait+interval)
}
autoMove();
var $carouselBody = $(".carousel>.area");
$carouselBody.hover(function(){
    clearInterval(timer);
    timer = null;
},function(){
    autoMove();
});
var $aRight = $(".arrow_next");
var $aLeft = $(".arrow_prev");
$aRight.click(function(e){
    e.preventDefault();
    move();
});
$aLeft.click(function(e){
    e.preventDefault();
    move();
});