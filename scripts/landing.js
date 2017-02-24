
var revealPoint = function() {
    

    var animatePoints = function() {
 
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(O)'
        });
    
    }; 

    $.each($('.point'), animatePoints)
};

$(window).load(function(){
    if($(window).height() > 950){
        revealPoint();
    }
    
    
    var scrollDistance = $('.selling').offset().top - $(window).height() + 200;
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= scrollDistance){
            revealPoint();
        }
    });
});