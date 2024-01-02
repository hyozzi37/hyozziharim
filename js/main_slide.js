$(document).ready(function () {
  var $bestSlide = $(".bestSlide");

  function initializeSlider() {
    $bestSlide.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    });
  }

  function destroySlider() {
    if ($bestSlide.hasClass("slick-initialized")) {
      $bestSlide.slick("unslick");
    }
  }

  // Initial check on document ready
  if (window.innerWidth > 800) {
    initializeSlider();
  }

  // Check on window resize
  $(window).resize(function () {
    if (window.innerWidth > 800) {
      initializeSlider();
    } else {
      destroySlider();
    }
  });
});
