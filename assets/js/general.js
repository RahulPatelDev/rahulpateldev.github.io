/***Add browser specific class***/
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});

function mobile_menu() {
    /*For main menu*/
    if ($(window).innerWidth() <= 1023) {
        $('.menu-handler').unbind('click').click(function() {
            $(this).toggleClass('open');
            $('.main-navigation').slideToggle();
            $('body').toggleClass('no-scroll');
            if ($('.sub-menu').is(':visible')) {
                $('.sub-menu').slideUp();
                $('.has-sub-menu').removeClass('active-nav');
            }
        });
    }
}

// side-bar-top
function side_bar() {
    var header_h = $('header').innerHeight();
    $('.side-bar').css({
        top: header_h,
    });
    $('.main-content-wrapper').css('padding-top', header_h);
}

/***Document Ready***/
$(document).ready(function() {

    mobile_menu();
    side_bar();
    if ($('.loader-container').length) {
        setTimeout(function() {
            $('.loader-container').addClass('active');
        }, 1600);
    }
    $('.main-nav li.has-sub-menu').each(function() {
        if ($(this).hasClass('has-sub-menu')) {
            $(this).append('<span class="dropdown-arrow"></span>');
        }
    });

    $('.mobile-side-toggle').unbind('click').click(function(event) {
        $(this).toggleClass('open-side-bar');
        $('.side-bar').toggleClass('open-side-bar');
    });
    $('.main-nav li.has-sub-menu .dropdown-arrow').unbind('click').click(function(event) {
        if ($(window).innerWidth() < 1024) {
            if ($(this).siblings('.sub-menu').is(':visible')) {
                $(this).siblings('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').children('.has-sub-menu').find('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').children('.has-sub-menu').removeClass('active-nav');
                $(this).parent('.has-sub-menu').removeClass('active-nav');
            } else {
                $(this).siblings('.sub-menu').slideDown();
                $(this).parents('.has-sub-menu').siblings('.has-sub-menu').children('.sub-menu').slideUp();
                $(this).parents('.has-sub-menu').siblings('.has-sub-menu').removeClass('active-nav');;
                $(this).parent('.has-sub-menu').addClass('active-nav');
            }
        } else {
            $('.sub-menu').css({ 'display': '' });
        }
    });

    // Search open
    $('.top-header .search-div').click(function() {
        $(this).toggleClass('open-search');
        $('.search-input').fadeToggle();
    });
    $('.search-form').click(function(event) {
        event.stopPropagation();
    });

    // nice scroll
    // $('.scroll-bar').each(function() {
    //     var _this = $(this);
    //     _this.niceScroll({
    //         cursorcolor: '#dadce0',
    //     });
    // });

});

// Apply nice scroll bar to mouseover

// $('.scroll-bar').mouseover(function() {
//     $('.scroll-bar').each(function() {
//         var _this = $(this);
//         _this.niceScroll({
//             cursorcolor: '#dadce0',
//         });
//     });
//     $('.scroll-bar').getNiceScroll().resize();
// });


/***Window Resize***/
$(window).resize(function() {
    mobile_menu();
    side_bar();
    if ($(window).innerWidth() < 1024) {} else {
        $('.sub-menu').css({ 'display': '' });
        $('.main-navigation').css({ 'display': '' });
        $('.menu-handler').removeClass('open');
        $('body').removeClass('no-scroll');
        $('li.has-sub-menu').removeClass('active-nav');
    }
});