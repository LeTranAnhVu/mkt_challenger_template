
export default class Home {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    this.slidePhotoFor = $('.slide-photo-for');
    this.slidePhotoNav = $('.slide-photo-nav');
    this.slideNews = $('.news-slide');

    this.listButtonSeason = $('.btn-season');
    this.listLogoSeason = $('.logo-season');

    this.navItem = $('.navbar .nav-item');
    this.navItem01 = $('.navbar .nav-item:nth-child(1)');
    this.navItem02 = $('.navbar .nav-item:nth-child(2)');
    this.navItem03 = $('.navbar .nav-item:nth-child(3)');
    this.navItem04 = $('.navbar .nav-item:nth-child(4)');
    this.navItem05 = $('.navbar .nav-item:nth-child(5)');

    this.bannerAbout = $('#banner-about');
    this.bannerContest = $('#banner-contest');
    this.sponsors = $('#sponsors');
    this.news = $('#news');

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
    this.AddActiveButtonSeason();
    this.ActiveRefresh();
    this.ScrollSpyActive();
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

  AddActiveButtonSeason () {
    let self = this;
    this.listButtonSeason.on('click', function (e) {
      e.preventDefault();
      self.ResetClassActiveSeason(self.listButtonSeason);
      $(this).addClass('active');
      let currentAttr = $(this).attr('data-season');
      self.ShowLogoSeason(currentAttr);
    })
  }

  ShowLogoSeason (currentAttr) {
    let self = this;
    for (let i = 0; i < this.listLogoSeason.length; i++) {
      if($(this.listLogoSeason[i]).attr('data-logo-season') === currentAttr) {
        self.ResetClassActiveSeason(self.listLogoSeason);
        $(this.listLogoSeason[i]).addClass('active');
      }
    }
  }

  ResetClassActiveSeason (elementLoop) {
    elementLoop.each(function (index, value) {
      if($(value).hasClass('active')) {
        $(value).removeClass('active')
      }
    })
  }

  ActiveRefresh () {
    let currentOffset = $(window).scrollTop();
    if(currentOffset >= 0 ) {
      this.ResetClassActiveNavItem();
      this.navItem01.addClass('active')
    }
    if(currentOffset >= this.bannerAbout.offset().top - 50) {
      this.ResetClassActiveNavItem();
      this.navItem02.addClass('active')
    }
    if(currentOffset >= this.bannerContest.offset().top - 50) {
      this.ResetClassActiveNavItem();
      this.navItem03.addClass('active')
    }
    if(currentOffset >= this.sponsors.offset().top - 100) {
      this.ResetClassActiveNavItem();
      this.navItem04.addClass('active')
    }
    if(currentOffset >= this.news.offset().top - 50) {
      this.ResetClassActiveNavItem();
      this.navItem05.addClass('active')
    }
  }

  ScrollSpyActive () {
    let self = this;
    $(window).on('scroll', function () {
      let currentOffset = $(window).scrollTop();
      if(currentOffset >= 0 ) {
        self.ResetClassActiveNavItem();
        self.navItem01.addClass('active')
      }
      if(currentOffset >= self.bannerAbout.offset().top - 50) {
        self.ResetClassActiveNavItem();
        self.navItem02.addClass('active')
      }
      if(currentOffset >= self.bannerContest.offset().top - 50) {
        self.ResetClassActiveNavItem();
        self.navItem03.addClass('active')
      }
      if(currentOffset >= self.sponsors.offset().top - 100) {
        self.ResetClassActiveNavItem();
        self.navItem04.addClass('active')
      }
      if(currentOffset >= self.news.offset().top - 50) {
        self.ResetClassActiveNavItem();
        self.navItem05.addClass('active')
      }
    })
  }

  ResetClassActiveNavItem () {
    this.navItem.each(function (index, value) {
      if($(value).hasClass('active')) {
        $(value).removeClass('active')
      }
    })
  }
}
