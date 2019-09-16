
export default class Home {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    this.slidePhotoFor = $('.slide-photo-for');
    this.slidePhotoNav = $('.slide-photo-nav');
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    console.log('page home')
    this.SlickPhoto();
  }


  /* ===================================
   *  METHODS
   * =================================== */
  SlickPhoto() {
    this.slidePhotoFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slide-photo-nav'
    });

    this.slidePhotoNav.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slide-photo-for',
      dots: false,
      centerMode: true,
      centerPadding: 20,
      focusOnSelect: true,
    });
  }
}
