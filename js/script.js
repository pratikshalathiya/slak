$(document).ready(function(){

    // --------------main active menu-------------

    $('.main-menu > li > a').click(function(){

        $('.main-menu').find('li a').removeClass('active');

        $(this).addClass('active');

    })

    // ---------------pre-loader----------------

    setTimeout(function(){

        $('.pre-loader').fadeOut();

    },500);

//   ----------------scroll event----------------

    $(window).on('scroll',function(){

        x = $(Window).scrollTop();
        // console.log(x);

        if(x>=200){
             $('#scroll-top').css('opacity','1');
        }
        else{
             $('#scroll-top').css('opacity','0');
        }

   })

   $('#scroll-top').click(function(){

        $(window).scrollTop({top:0})

   });

//    --------------Slider------------------

     $('.owl-carousel').owlCarousel({
         loop:true,
         autoplay:false,
         margin:10,
     //     nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1000:{
                 items:1
             }
         }
     })

    // -------------------- Counter---------------

     window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,66);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
     }

    //  -------------portfolio-----------------------

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.filter-button-group').find('button').removeClass('active');
        $(this).addClass('active');

        });

        $("a.layer").fancybox({
             'transitionIn'	:	'elastic',
             'transitionOut'	:	'elastic',
             'speedIn'		:	600, 
             'speedOut'		:	200, 
             'overlayShow'	:	false
        });
     

});