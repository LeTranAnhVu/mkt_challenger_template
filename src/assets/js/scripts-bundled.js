/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var main = new _main.default();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = _interopRequireDefault(__webpack_require__(2));

var _home = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Main() {
    _classCallCheck(this, Main);

    var common = new _common.default();
    var home = new _home.default();
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Main, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Main;
}();

exports.default = Main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Common =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Common() {
    _classCallCheck(this, Common);

    // This File Contain The Behavior Of All The Pages
    this.btnNavbarToggleMobile = $('.navbar-toggler');
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


  _createClass(Common, [{
    key: "bindEvents",
    value: function bindEvents() {
      console.log('Common JS');
      this.AddActiveNavbarToggle();
      this.ScrollTopBody();
      this.bannerHome.css('marginTop', Math.round(this.headerHeight));
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "AddActiveNavbarToggle",
    value: function AddActiveNavbarToggle() {
      var self = this;
      this.btnNavbarToggleMobile.on('click', function () {
        if (!self.navbarCollapse.hasClass('show')) {
          self.navbarToggleIcon.addClass('active');
        } else if (self.navbarCollapse.hasClass('show')) {
          self.navbarToggleIcon.removeClass('active');
        }
      });
    }
  }, {
    key: "ScrollTopBody",
    value: function ScrollTopBody() {
      var self = this;
      this.navLink.on('click', function (e) {
        //set prevent default
        e.preventDefault(); //condition scroll

        if ($(this).html() === 'Home') {
          self.pageScroll.animate({
            scrollTop: 0
          }, 'slow');
        }

        if ($(this).html() === 'About') {
          self.pageScroll.animate({
            scrollTop: $('#banner-about').offset().top
          }, 'slow');
        }

        if ($(this).html() === 'Contest') {
          self.pageScroll.animate({
            scrollTop: $('#banner-contest').offset().top
          }, 'slow');
        }

        if ($(this).html() === 'Sponsors') {
          self.pageScroll.animate({
            scrollTop: $('#sponsors').offset().top - 80
          }, 'slow');
        }
      });
    }
  }, {
    key: "ResetClassActiveNavLink",
    value: function ResetClassActiveNavLink() {
      this.navLink.each(function (index, value) {
        if ($(value).parent().hasClass('active')) {
          $(value).parent().removeClass('active');
        }
      });
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Home =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Home() {
    _classCallCheck(this, Home);

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


  _createClass(Home, [{
    key: "bindEvents",
    value: function bindEvents() {
      console.log('page home');
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

  }, {
    key: "SlickPhoto",
    value: function SlickPhoto() {
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
        centerPadding: 20,
        arrows: true,
        prevArrow: '<div class="prev"><img src="./assets/images/arrow-white-left.png" src="arrow"/></div>',
        nextArrow: '<div class="next"><img src="./assets/images/arrow-white-right.png" src="arrow"/></div>',
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
  }, {
    key: "SlickNews",
    value: function SlickNews() {
      this.slideNews.slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
  }, {
    key: "AddActiveButtonSeason",
    value: function AddActiveButtonSeason() {
      var self = this;
      this.listButtonSeason.on('click', function (e) {
        e.preventDefault();
        self.ResetClassActiveSeason(self.listButtonSeason);
        $(this).addClass('active');
        var currentAttr = $(this).attr('data-season');
        self.ShowLogoSeason(currentAttr);
      });
    }
  }, {
    key: "ShowLogoSeason",
    value: function ShowLogoSeason(currentAttr) {
      var self = this;

      for (var i = 0; i < this.listLogoSeason.length; i++) {
        if ($(this.listLogoSeason[i]).attr('data-logo-season') === currentAttr) {
          self.ResetClassActiveSeason(self.listLogoSeason);
          $(this.listLogoSeason[i]).addClass('active');
        }
      }
    }
  }, {
    key: "ResetClassActiveSeason",
    value: function ResetClassActiveSeason(elementLoop) {
      elementLoop.each(function (index, value) {
        if ($(value).hasClass('active')) {
          $(value).removeClass('active');
        }
      });
    }
  }, {
    key: "ActiveRefresh",
    value: function ActiveRefresh() {
      var currentOffset = $(window).scrollTop();

      if (currentOffset >= 0) {
        this.ResetClassActiveNavItem();
        this.navItem01.addClass('active');
      }

      if (currentOffset >= this.bannerAbout.offset().top - 50) {
        this.ResetClassActiveNavItem();
        this.navItem02.addClass('active');
      }

      if (currentOffset >= this.bannerContest.offset().top - 50) {
        this.ResetClassActiveNavItem();
        this.navItem03.addClass('active');
      }

      if (currentOffset >= this.sponsors.offset().top - 100) {
        this.ResetClassActiveNavItem();
        this.navItem04.addClass('active');
      }

      if (currentOffset >= this.news.offset().top - 50) {
        this.ResetClassActiveNavItem();
        this.navItem05.addClass('active');
      }
    }
  }, {
    key: "ScrollSpyActive",
    value: function ScrollSpyActive() {
      var self = this;
      $(window).on('scroll', function () {
        var currentOffset = $(window).scrollTop();

        if (currentOffset >= 0) {
          self.ResetClassActiveNavItem();
          self.navItem01.addClass('active');
        }

        if (currentOffset >= self.bannerAbout.offset().top - 50) {
          self.ResetClassActiveNavItem();
          self.navItem02.addClass('active');
        }

        if (currentOffset >= self.bannerContest.offset().top - 50) {
          self.ResetClassActiveNavItem();
          self.navItem03.addClass('active');
        }

        if (currentOffset >= self.sponsors.offset().top - 100) {
          self.ResetClassActiveNavItem();
          self.navItem04.addClass('active');
        }

        if (currentOffset >= self.news.offset().top - 50) {
          self.ResetClassActiveNavItem();
          self.navItem05.addClass('active');
        }
      });
    }
  }, {
    key: "ResetClassActiveNavItem",
    value: function ResetClassActiveNavItem() {
      this.navItem.each(function (index, value) {
        if ($(value).hasClass('active')) {
          $(value).removeClass('active');
        }
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ })
/******/ ]);