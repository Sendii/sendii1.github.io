import $ from 'jquery';
import './TweenMax';
import './slick-1.8.1/slick/slick.min';

$(document).ready(function() {
  $("#brand i").click(function() {
    $("ul li").not("#brand").toggleClass("show-menu");
  });
  $(".skills__item").slick({
    prevArrow: "<a href='' class='slick-arrow slick-arrow-prev'><i class='bx bx-left-arrow-alt' ></i></a>",
    nextArrow: "<a href='' class='slick-arrow slick-arrow-next'><i class='bx bx-right-arrow-alt'></i></a>"
  });
  $("img").attr("draggable", "false");
  $("footer time").text(new Date().getFullYear());
  TweenMax.to("header h2", 2, {maxHeight: "none", delay: 2.5});
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

      if ($(this).scrollTop() >= $("header").outerHeight() + $("#skills").outerHeight() + 230) {
        TweenMax.to("#about li:first-child", 2.5, {left: "0px", opacity: 1, xPercent: "100%"});
        TweenMax.to("#about li:nth-child(2)", 2.5, {right: "0px", opacity: 1, xPercent: "-100%", delay: 0.5});
        TweenMax.to("#about li:nth-child(3)", 2.5, {left: "0px", opacity: 1, xPercent: "100%", delay: 1});
        TweenMax.to("#about li:last-child", 2.5, {right: "0px", opacity: 1, xPercent: "-100%", delay: 1.5});
      }

      if ($(this).scrollTop() >= $("header").outerHeight() + $("#skills").outerHeight() - $("nav").outerHeight() - 230) {
        TweenMax.staggerTo("#creation figure", 0.8, {opacity: 1}, 0.3);
        TweenLite.to("#creation figure", 0.5, {ease: Power4.easeOut});
      }
    }
  });
});
