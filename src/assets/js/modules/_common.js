
export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        // This File Contain The Behavior Of All The Pages
        this.btnNavbarToggleMobile =  $('.navbar-toggler');
        this.navbarCollapse = $('.navbar-collapse');
        this.navbarToggleIcon = $('.navbar-toggler-icon');
        this.headerHeight = $('#header').height();
        this.navLink = $('.navbar .nav-prevent');
        this.pageScroll = $('html,body');
        this.bannerHome = $('#banner-home');
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('Common JS')
        this.AddActiveNavbarToggle();
        this.ScrollTopBody();
        this.bannerHome.css('marginTop',Math.round(this.headerHeight));
    }

    /* ===================================
     *  METHODS
     * =================================== */
    AddActiveNavbarToggle () {
        let self = this;
        this.btnNavbarToggleMobile.on('click', function () {
            if(!self.navbarCollapse.hasClass('show')) {
                self.navbarToggleIcon.addClass('active');
            }else if(self.navbarCollapse.hasClass('show')){
                self.navbarToggleIcon.removeClass('active');
            }
        })
    }

    ScrollTopBody () {
        let self = this;
        this.navLink.on('click', function (e) {
            //set prevent default
            e.preventDefault()
            //condition scroll
            if($(this).html() === 'Home') {
                self.pageScroll.animate({
                    scrollTop: 0
                }, 'slow');
            }
            if($(this).html() === 'About') {
                self.pageScroll.animate({
                    scrollTop: $('#banner-about').offset().top
                }, 'slow');
            }
            if($(this).html() === 'Contest') {
                self.pageScroll.animate({
                    scrollTop: $('#banner-contest').offset().top
                }, 'slow');
            }
            if($(this).html() === 'Sponsors') {
                self.pageScroll.animate({
                    scrollTop: $('#sponsors').offset().top - 80
                }, 'slow');
            }
        })
    }

    ResetClassActiveNavLink () {
        this.navLink.each(function (index,value) {
            if($(value).parent().hasClass('active')) {
                $(value).parent().removeClass('active')
            }
        })
    }
}
