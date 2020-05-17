$(document).ready(function() {
  var date_now = new Date();
  var path = window.location.href;
  $("#brand i").click(function() {
    $("ul li").not("#brand").toggleClass("show-menu");
  });
  $("footer time").text(new Date().getFullYear());
  if ($(this).width() > 768) {
    ScrollReveal({reset: true}).reveal("#creation figure", { duration: 1800 });
  }
  $(this).scroll(function() {
    if ($(this).scrollTop() >= $("header").outerHeight() + $("#skills").outerHeight() + $("#creation").outerHeight() + $("#about").outerHeight() - $("nav").outerHeight()) {
      $("nav").addClass("on-bottom");
    }
    else {
      $("nav").removeClass("on-bottom");
    }
    if ($(this).width() > 768) {
      if ($(this).scrollTop() > 60) {
        $("nav").addClass("scroll-nav");
      }
      else {
        $("nav").removeClass("scroll-nav");
      }
    }
  });
});
