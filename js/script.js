$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });
    
    if( wScroll > $('.foto').offset().top - 200) {
        $('.foto .card').addClass('muncul');
    }   
        

        
    
});

$(window).on('load', function() {
    $('.pi').addClass('pmuncul');
    $('.pa').addClass('pmuncul');
});