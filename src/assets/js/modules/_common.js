
export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        // This File Contain The Behavior Of All The Pages
        this.btnNavbarToggleMobile =  $('.navbar-toggler');
        this.navbarCollapse = $('.navbar-collapse');
        this.navbarToggleIcon = $('.navbar-toggler-icon');
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('Common JS')
        this.AddActiveNavbarToggle();
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
}
