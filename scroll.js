$(document).ready(function(){
    $('#scroll-left').click(function(){
        var element = $(".first");
        console.log(element.width())
        element.animate({marginLeft: -element.width()}, 'fast');
        element.next().addClass('first');
        element.removeClass('first')
        // $('#scrollable').scrollLeft(300);
        // document.getElementById('scrollable').scrollLeft -= 155;
    })

    $('#scroll-right').click(function(){
        var element = $(".last");
        element.animate({marginRight: -200}, 'fast');
        element.prev().addClass('last');
        element.removeClass('last')
        // document.getElementById('scrollable').scrollLeft -= 155;
    })

    $('.filter-item').click(function(){
        $(this).addClass('active');
        $(this).siblings('.active').removeClass('active');
    });

})