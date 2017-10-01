$(function () {
  $(".section").css("height", window.outerHeight + "px");
  $("header").css("height", window.outerHeight + "px");
  $("nav").hide();

  $("#aboutBtn").on("click", function() {
    location.hash = "about";
  });
  $("#projectBtn").on("click", function() {
    location.hash = "projects";
  });
  $("#contactBtn").on("click", function() {
    location.hash = "contact";
  });
});
