$(document).ready(function () {
  var $bestSlide = $(".bestSlide");

  function initializeSlider() {
    $bestSlide.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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

$(".snsPreview_mo").slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});
