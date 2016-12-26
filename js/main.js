function menuToggle() {
  var menuToggle = $('.js-mobileMenuBtn').unbind();
  $('.js-menu').removeClass("is-shown");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.js-menu').slideToggle(function(){
      if($('.js-menu').is(':hidden')) {
        $('.js-menu').removeAttr('style');
      }
    });
  });
}

function siteHeadScroll() {
  var previousScroll = 0,
      headerOrgOffset = $('.siteHead-wrap').height();

  $('.siteHead').height($('.siteHead-wrap').height());
  $('.siteHead').slideUp();
  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll < headerOrgOffset *3) {
        $('.siteHead').slideUp();
      } else {
        $('.siteHead').slideDown();
      }
      previousScroll = currentScroll;
  });
}

$(document).ready(function() {
  siteHeadScroll();
});

