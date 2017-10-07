$(function () {
  $('#about').collapse('show');

  $('#about').on('show.bs.collapse', function () {
    $('#projects').collapse('hide');
    $('#contact').collapse('hide');
  });

  $('#projects').on('show.bs.collapse', function () {
    $('#about').collapse('hide');
    $('#contact').collapse('hide');
  });

  $('#contact').on('show.bs.collapse', function () {
    $('#about').collapse('hide');
    $('#projects').collapse('hide');
  });
});
