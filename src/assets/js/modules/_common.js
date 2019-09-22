
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
        this.bannerHome = $('#banner-home');
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('Common JS')
        new WOW().init();
        // this.HideCollapseMobile();
        this.AddActiveNavbarToggle();
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

    // HideCollapseMobile () {
    //     this.navbarCollapse.on('click', 'a' , function () {
    //         this.navbarCollapse.collapse('hide');
    //     })
    // }
}
