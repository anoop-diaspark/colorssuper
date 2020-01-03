/*========== Home Banner slider  =========*/
$('.home-slider').owlCarousel({
    center: true,
    loop:true,
    nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],  
    stagePadding: 215,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1
        }
    }
});

/*========== Tranding slider  =========*/
    $('.trending-slider').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:10,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1.20
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
/*========== Shows Slider  =========*/
    $('.shows-slider').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        margin:10,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1.20
            },
            600:{
                items:4
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

/*========== Promos Slider  =========*/
    $('.promos-slider').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        margin:10,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1.20
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


/* Drop Down Menu */
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );

});

/* Search Box */
jQuery(document).ready(function() {    
    jQuery(".header-search").click(function(){
       jQuery(".search-inner").slideToggle('slow');
        jQuery("input[type='search']").focus();
      
    }); 
});

/* Menu Tab */
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* Header Sticky to scroll from bottom to top */

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}