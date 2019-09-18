
export default class Home {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    this.slidePhotoFor = $('.slide-photo-for');
    this.slidePhotoNav = $('.slide-photo-nav');
    this.slideNews = $('.news-slide');
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    console.log('page home')
    new WOW().init();
    this.SlickPhoto();
    this.SlickNews();
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
      centerPadding:20,
      arrows: true,
      prevArrow:'<div class="prev"><img src="./assets/images/arrow-white-left.png" src="arrow"/></div>',
      nextArrow:'<div class="next"><img src="./assets/images/arrow-white-right.png" src="arrow"/></div>',
      focusOnSelect: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed:4000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  SlickNews() {
    this.slideNews.slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }
}
