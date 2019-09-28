$( document ).ready(function() {
  var slidePhotoFor = $('.slide-photo-for');
  var slidePhotoNav = $('.slide-photo-nav');
  var slideNews = $('.news-slide');

  var listButtonSeason = $('.btn-season');
  var listLogoSeason = $('.logo-season');

  var loadingPage = $('.loading-page');

  var navItem = $('.navbar .nav-item');
  var navItem01 = $('.navbar .nav-item:nth-child(1)');
  var navItem02 = $('.navbar .nav-item:nth-child(2)');
  var navItem03 = $('.navbar .nav-item:nth-child(3)');
  var navItem04 = $('.navbar .nav-item:nth-child(4)');
  var navItem05 = $('.navbar .nav-item:nth-child(5)');

  var navLink = $('.navbar .nav-prevent');
  var pageScroll = $('html,body');
  var scrollDown =  $('.scroll-down');

  var bannerAbout = $('#banner-about');
  var bannerContest = $('#banner-contest');
  var sponsors = $('#sponsors');
  var news = $('#news');
  var backToTop = $('.back-to-top');

  //Slick slide sync section photo
  function SlickPhoto () {
    slidePhotoFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slide-photo-nav'
    });

    slidePhotoNav.slick({
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

  //Slick slide section news
  function SlickNews () {
    slideNews.slick({
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

  //Add active button season
  function AddActiveButtonSeason () {
    listButtonSeason.on('click', function (e) {
      e.preventDefault();
      ResetClassActiveSeason(listButtonSeason);
      $(this).addClass('active');
      var currentAttr = $(this).attr('data-season');
      ShowLogoSeason(currentAttr);
    })
  }

  //Reset class active season
  function ResetClassActiveSeason (elementLoop) {
    elementLoop.each(function (index, value) {
      if($(value).hasClass('active')) {
        $(value).removeClass('active')
      }
    })
  }

  //Show logo season
  function ShowLogoSeason (currentAttr) {
    for (let i = 0; i < listLogoSeason.length; i++) {
      if($(listLogoSeason[i]).attr('data-logo-season') === currentAttr) {
        ResetClassActiveSeason(listLogoSeason);
        $(listLogoSeason[i]).addClass('active');
      }
    }
  }

  //Active refresh
  function ActiveRefresh () {
    let currentOffset = $(window).scrollTop();
    if(currentOffset >= 0 ) {
      ResetClassActiveNavItem();
      navItem01.addClass('active')
    }
    if(currentOffset >= bannerAbout.offset().top - 50) {
      ResetClassActiveNavItem();
      navItem02.addClass('active')
    }
    if(currentOffset >= bannerContest.offset().top - 50) {
      ResetClassActiveNavItem();
      navItem03.addClass('active')
    }
    if(currentOffset >= sponsors.offset().top - 100) {
      ResetClassActiveNavItem();
      navItem04.addClass('active')
    }
    if(currentOffset >= news.offset().top - 50) {
      ResetClassActiveNavItem();
      navItem05.addClass('active')
    }
  }

  //Scroll spy active
  function ScrollSpyActive () {
    $(window).on('scroll', function () {
      var currentOffset = $(window).scrollTop();
      if(currentOffset >= 0 ) {
        ResetClassActiveNavItem();
        navItem01.addClass('active')
      }
      if(currentOffset >= bannerAbout.offset().top - 50) {
        ResetClassActiveNavItem();
        navItem02.addClass('active')
      }
      if(currentOffset >= bannerContest.offset().top - 50) {
        ResetClassActiveNavItem();
        navItem03.addClass('active')
      }
      if(currentOffset >= sponsors.offset().top - 100) {
        ResetClassActiveNavItem();
        navItem04.addClass('active')
      }
      if(currentOffset >= news.offset().top - 80) {
        ResetClassActiveNavItem();
        navItem05.addClass('active')
        backToTop.addClass('show')
      }else {
        backToTop.removeClass('show')
      }
    })
  }

  //Scroll body when click
  function ScrollTopBody () {
    navLink.on('click', function (e) {
      //set prevent default
      e.preventDefault();
      //condition scroll
      if($(this).html() === 'Home') {
        pageScroll.animate({
          scrollTop: 0
        }, 'slow');
      }
      if($(this).html() === 'About') {
        pageScroll.animate({
          scrollTop: $('#banner-about').offset().top
        }, 'slow');
      }
      if($(this).html() === 'Contest') {
        pageScroll.animate({
          scrollTop: $('#banner-contest').offset().top
        }, 'slow');
      }
      if($(this).html() === 'Sponsors') {
        pageScroll.animate({
          scrollTop: $('#sponsors').offset().top - 80
        }, 'slow');
      }
      if($(this).html() === 'Contact') {
        pageScroll.animate({
          scrollTop: $('#footer').offset().top
        }, 'slow');
      }
    })
    //click back to top
    backToTop.on('click', function (e) {
      //set prevent default
      e.preventDefault();
      pageScroll.animate({
        scrollTop: 0
      }, 'slow');
    })
  }

  //Scroll down default banner
  function ScrollDown () {
    scrollDown.on('click', function () {
      pageScroll.animate({
        scrollTop: $('#banner-about').offset().top
      }, 'slow');
    })
  }

  //Reset class active nav item
  function ResetClassActiveNavItem () {
    navItem.each(function (index, value) {
      if($(value).hasClass('active')) {
        $(value).removeClass('active')
      }
    })
  }

  //Hidden loading in mobile
  function HiddenLoadingInMobile () {
    if($(window).width() < 1280) {
      loadingPage.css('display','none');
    }
  }

  function bindEvents () {
    console.log('page home')
    HiddenLoadingInMobile();
    SlickPhoto();
    SlickNews();
    AddActiveButtonSeason();
    ActiveRefresh();
    ScrollSpyActive();
    ScrollTopBody();
    ScrollDown();
  }

  bindEvents();
})
