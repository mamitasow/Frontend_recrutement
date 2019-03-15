$(document).ready(function(){
    var directions = ['Toutes les directions','DGA','RH','DMGP','DG','DDE','DFC','A','B','C','D','E','F','G'];
    var first = directions.slice(1,7)    
    for (var i = 0; i < first.length; i++) {
        $('#scrollable').append("<span class='filter-item font-weight-bold align-middle w-35 d-block'>"+directions[i]+"</span>")
    }

    $('#scroll-right').click(function(){  
        var right = directions.slice(7)
        $('#scrollable').html('');
        for (var i = 0; i < right.length; i++) {
            if (i == 0) {
                $('#scrollable').append("<span class='filter-item font-weight-bold active align-middle w-35 d-block'>"+right[i]+"</span>")
            }else{
            $('#scrollable').append("<span class='filter-item font-weight-bold align-middle w-35 d-block'>"+right[i]+"</span>")
            }
        }
    })

    $('#scroll-left').click(function(){  
        var left = directions.slice(1,7)
        $('#scrollable').html('');
        for (var i = 0; i < left.length; i++) {
            console.log(left[i])
            $('#scrollable').append("<span class='filter-item font-weight-bold align-middle w-35 d-block'>"+left[i]+"</span>")
        }
    })

    $('.filter-item').click(function(){
        $(this).addClass('active');
        $(this).siblings('.active').removeClass('active');
    });

})