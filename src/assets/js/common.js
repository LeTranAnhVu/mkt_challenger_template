$( document ).ready(function() {
    var btnNavbarToggleMobile =  $('.navbar-toggler');
    var navbarCollapse = $('.navbar-collapse');
    var navbarToggleIcon = $('.navbar-toggler-icon');
    var headerHeight = $('#header').height();
    var bannerHome = $('#banner-home');
    var loadingAnimate = $('.loading');
    // var count = 0

    function AddActiveNavbarToggle () {
        btnNavbarToggleMobile.on('click', function () {
            if(!navbarCollapse.hasClass('show')) {
                navbarToggleIcon.addClass('active');
            }else if(navbarCollapse.hasClass('show')){
                navbarToggleIcon.removeClass('active');
            }
        })
    }

    function bindEvents () {
        // runLoadingOnce();
        new WOW().init();
        AddActiveNavbarToggle();
        bannerHome.css('marginTop',Math.round(headerHeight));
    }

    // function runLoadingOnce () {
    //     if (count === 0) {
    //         loadingAnimate.addClass('loading-page');
    //         count++;
    //     }
    // }
    bindEvents();

});
