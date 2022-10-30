$(document).ready(function () {
  $(".hero").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
  });
  $(".carousel__films").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
  });
});
