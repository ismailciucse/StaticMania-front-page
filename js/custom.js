$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 500,
  });

  $(".testimonial-items").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 20,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
  });
});
